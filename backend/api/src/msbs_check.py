"""

Code designed to look through Fincen list of approvals and identify which exchanges are approved
Results will need to be manually reviewed since some names don't line up

"""

from . import CCELScraper as scr
#import CCELScraper as scr
import pandas as pd
import pickle
import json
import os

filepath = os.path.dirname(os.path.abspath(__file__)) + "\\exchanges\\"
ccel                = dict()
mainPath = filepath + 'ccel.json'
with open(mainPath) as cc:
    ccel = json.loads(cc.read())[0]

#exchanges = scr.getExchangeInfo('https://www.cryptocurrencyexchangelist.info/cryptocurrency-exchanges-list').keys()
filepath = os.path.dirname(os.path.abspath(__file__)) + r'\msbs.csv'
exchanges = [c.lower() for c in ccel['name']]

def getApprovedDF():
    df = pd.read_csv(filepath)
    df.columns = [column.replace(' ', '_') for column in list(df.columns)]
    df2 = pd.DataFrame(columns=df.columns)
    df2['Exchange'] = None
    for exchange in exchanges:
        name = exchange
        if exchange == 'coinbase':
            name = 'coinbase-pro'
        cond = df.LEGAL_NAME.str.contains(exchange, case=False, na=False)
        rows = df.loc[cond, :]
        rows['Exchange'] = name
        df2 = df2.append(rows, ignore_index=True)
    return df2


"""
b = getApprovedDF()
print(list(set(b['Exchange'])))
print('okex' in list(set(b['Exchange'])))
"""