from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from django.http import JsonResponse
from rest_framework import status
from rest_framework.decorators import api_view
from scrapy.crawler import CrawlerProcess
from .src import CMKScraper
from .src import CCELScraper
from .src import msbs_check
from .src import Exchange
from .src import scorer
from .src import newsGrab
from .src.cmc import CoinMarketCapSpider
import pandas as pd
import time
import json
import os

filepath = os.path.dirname(os.path.abspath(__file__)) + "\\src\\exchanges\\"
BASE = 'https://coinmarketcap.com'
BASE = 'https://next-prod.coinmarketcap.com/'
CCEL_BASE = 'https://www.cryptocurrencyexchangelist.info'
exchanges = []
info = dict()
searchData = dict()
ccel = dict()
approved = pd.DataFrame()


def startupInfo():
    global info, approved, exchanges, ccel
    exchanges = CMKScraper.getExchanges()
    #info = CCELScraper.getExchangeInfo(CCEL_BASE + '/cryptocurrency-exchanges-list')
    mainPath = filepath + 'ccel.json'
    with open(mainPath) as cc:
        ccel = json.loads(cc.read())[0]
    approved = msbs_check.getApprovedDF()


startupInfo()


@api_view(["GET"])
def exchangenames(request):
    global exchanges
    return Response(status=status.HTTP_200_OK, data={"data": exchanges})


@api_view(["GET"])
def exchangeinfo(request):
    global exchanges, approved, searchData, info, filepath, ccel
    exchangeName = dict(request.query_params)['name'][0]
    mainPath = filepath + exchangeName + '.json'
    #ccell = {}
    with open(mainPath) as ex:
        data = json.loads(ex.read())
    if exchangeName.lower() in list(set(approved['Exchange'])):
        certified = "Yes"
    else:
        certified = "No"
    if exchangeName in ccel["slug"]:
        index = ccel["slug"].index(exchangeName)
        location = ccel["Location"][index]
        riskScore = scorer.score(exchangeName, ccel["Location"][index])
        ccell = {"Rating": riskScore, "Location": location,
                 "BuyWith": ccel["BuyWith"][index], "Safety": ccel["Rating"][index]}
    else:
        ccell = {"Rating": ("High", ["N/A", "N/A", "N/A", "N/A"], [10, 1, 3.5]), "Location": "N/A", "BuyWith": "N/A", "Safety": "N/A"}
    return Response(status=status.HTTP_200_OK, data={"exchangeInfo": data, "exchangeName": dict(request.query_params)['name'], "ccel": ccell, "certified": certified})


@api_view(["GET"])
def exchangeAPI(request):
    global exchanges, approved, searchData, info, filepath, ccel
    exchangeName = dict(request.query_params)['name'][0]
    #mainPath = filepath + exchangeName + '.json'
    ccell = {}
    #with open(mainPath) as ex:
    #    data = json.loads(ex.read())
    if exchangeName in ccel["slug"]:
        index = ccel["slug"].index(exchangeName)
        riskScore = scorer.score(exchangeName, ccel["Location"][index])
        ccell = {"Rating": riskScore,
                 "Location": ccel["Location"][index], "BuyWith": ccel["BuyWith"][index]}
    else:
        ccell = {"Rating": "N/A", "Location": "N/A", "BuyWith": "N/A"}
    return JsonResponse({"exchangeName": dict(request.query_params)['name'], "ccel": ccell})

@api_view(["GET"])
def exchangeNews(request):
    global exchanges, approved, searchData, info, filepath, ccel
    exchangeName = dict(request.query_params)['name'][0]
    count = dict(request.query_params)['count'][0]
    news = newsGrab.getHeadlines(exchangeName, response_count=count)
    return JsonResponse(news, safe=False)

"""
print("REQUEST BODY: ",dict(request.query_params)['name'][0], "\n END \n")
exchangeName = dict(request.query_params)['name'][0]
isListed = False
if exchangeName not in searchData.keys():
    listedCheck = approved.LEGAL_NAME.str.contains(exchangeName, case=False, na=False)
    isListed = True if len(set(listedCheck)) > 1 else False
    exchangeURL = BASE + '/exchanges/{}/'.format(exchangeName.lower())
    exchangeRawData = CMKScraper.getRows(exchangeURL)
    exchangeStat = CMKScraper.extractData(exchangeRawData)
    cmkInfo = exchangeStat
    if exchangeName.lower() in info.keys():
        ccelInfo = info[exchangeName.lower()]
    else:
        ccelInfo = []
    exchangeInfo = Exchange.Exchange(exchangeName.lower(), cmkInfo, ccelInfo, isListed)
    tradeData = exchangeInfo.tradeAccumulation()
    searchData[exchangeName] = tradeData
"""
