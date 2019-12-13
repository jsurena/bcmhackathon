import pandas as pd
import json
import os
from . import CCELScraper as scr

filepath = os.path.dirname(os.path.abspath(__file__)) + "\\exchanges\\ccel.json"
with open(filepath) as cc:
        ccel = json.loads(cc.read())[0]
resources = os.path.dirname(os.path.abspath(__file__)) + "\\resources\\"
# Get country risk scoring information
countries = pd.read_csv(os.path.join(resources + "countries_risk.csv"))
# Get currency risk scoring information
tokenRisk = json.load(open(resources + "currencyRisk.json"))
# Get margin flag

def score(exchange, location):
    global countries, tokenRisk, marginFlags
    tokenScore = tokenRisk[exchange.lower()] * 3
    index = ccel["slug"].index(exchange)
    if ccel['margin'][index] == 'No' or ccel['margin'][index] == 'N/A':
        marginRisk = 0
    else:
        marginRisk = 10
    print(marginRisk)
    country = countries.loc[countries.Country ==
                            location.upper()]["Overall Score 2018"].tolist()
    if location == None or len(country) == 0:
        countryRisk = 21
    else:
        countryRisk = float(
            countries.loc[countries.Country == location.upper()]["Overall Score 2018"]) * 3.5
    score = (tokenScore + marginRisk + countryRisk) / 7.5
    print("TOKEN SCORE: ", score, (tokenScore, marginRisk, countryRisk))
    scoreList = [int(tokenScore), int(marginRisk), int(countryRisk), int(score)]
    if score > 4:
        return ('High', scoreList, [10, 1, 3.5])
    elif score > 2.9 and score <= 4:
        return ('Medium', scoreList, [10, 1, 3.5])
    else:
        return ('Low', scoreList, [10, 1, 3.5])
