from bs4 import BeautifulSoup
import requests
import cfscrape
import os
import json

filepath = os.path.dirname(os.path.abspath(__file__)) + '\exchanges.json'

def getExchanges():
    with open(filepath) as fp:
        data = json.loads(fp.read())
    return data[0]['exchanges']

def getRows(url):
    """
    * Given a CMC url, return all the rows from that webpage

    Params
    ------
    url : string
    Valid only for coinmarketcap urls

    Returns
    -------
    rows : bs4 element tag
    """
    scraper = cfscrape.create_scraper()
    page  = scraper.get(url).text
    soup  = BeautifulSoup(page, "html.parser")
    rows  = soup.find_all('tr')
    return rows

def getExchangeImages():
    url = 'https://coinmarketcap.com/exchanges/'
    scraper = cfscrape.create_scraper()
    page  = scraper.get(url).text
    soup  = BeautifulSoup(page, "html.parser")
    images = soup.find_all('img', {'class':'logo-sprite'})
    images = [image['src'] for image in images[:10]]
    extendedImages = soup.find_all('img', {'class':'logo-sprite', 'data-src':True})
    extendedImages = [image['data-src'] for image in extendedImages]
    return images + extendedImages

def getExchangeNames(rows):
    """
    * Given a set of rows from the exchange table, extract the names of all the exchanges and return as a list

    Params
    ------
    rows : bs4 element tag

    Returns
    -------
    nameList : list
    """
    nameList = list()
    for row in rows:
        for tableData in row.find_all('td', {'class':'no-wrap currency-name'}):
            for a in tableData.find_all('a',href=True):
                nameList.append(a['href'])
    return nameList


def extractData(rows):
    """
    * Given a set of rows from a currency table, extract the pair names, total volume, price and relative volume
    * of each of the currencies from their respective rows

    Params
    ------
    rows : bs4 element tag

    Returns
    -------
    exchangeDict : dictionary
    """
    exchangeDict = dict()
    for row in rows:
        values = list()
        for tableData in row.find_all('td'):
            if('data-sort' in tableData.attrs):
                values.append(tableData['data-sort'])
            else:
                values.append(tableData.string)
        if len(values) == 9:
            pairInformation = {'pairing':values[2], 'volume_dollar':values[3], 'price':values[4], 'volume_percent':values[5] }
            if(values[1] in exchangeDict):
                exchangeDict[values[1]].append(pairInformation)
            else:
                exchangeDict[values[1]] = [pairInformation]
    return exchangeDict


def gname(rows):
    nameList = list()
    for row in rows:
        for tableData in row.find_all(title=True):
            if tableData['href'][-1] == '/':
                nameList.append(tableData['href'])
    return nameList
