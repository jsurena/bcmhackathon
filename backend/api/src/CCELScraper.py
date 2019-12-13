"""

Code for scraping exchange information from https://www.cryptocurrencyexchangelist.info

"""

from bs4 import BeautifulSoup
import requests


def getRows(url):
    """
    * Given a CCEL url, return all the rows from that webpage

    Params
    ------
    url : string
    Valid only for Crypto Currency Exchange List urls

    Returns
    -------
    rows : bs4 element tag
    """
    page  = requests.get(url,  headers={'User-Agent': 'Mozilla/5.0 (Windows NT 6.3; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/59.0.3071.115 Safari/537.36'}).text
    soup  = BeautifulSoup(page, "html.parser")
    table = soup.find("tbody")
    rows  = table.find_all('tr')
    return rows

def getExchangeInfo(url):
    """
    * Given a CCEL url, return all exchanges and their Rating, Location, and Base Currency Options

    Params
    ------
    url: string
    Valid only for Crypto Currency Exchange List urls

    Returns
    -------
    info : dictionary mapping Exchange name to dictionary of Rating, Location, and BuyWith (Base Currency Options)
    """
    rows = getRows(url)
    info = dict()
    for i in rows:
        info[i.find_all('td')[1].find('img')['alt'].lower()] = {"Rating": i.find_all('td')[4].string, "Location": i.find_all('td')[7].string, "BuyWith": i.find_all('td')[9].string}
    return info

def getExchangeMarginInfo(url):
    rows = getRows(url)
    margin = dict()
    for i in rows:
        margin[i.find_all('td')[1].find('img')['alt'].lower()] = i.find_all('td')[2].string
    return margin
