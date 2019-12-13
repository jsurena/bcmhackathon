import json
import requests
from datetime import datetime

url = 'https://newsapi.org/v2/everything?q={}&language={}&apiKey={}'
urlDate = 'https://newsapi.org/v2/everything?q={}&language={}&from={}&apiKey={}'

apiKey = '84ec4c588a764032a4c72e7112563b95'

def getHeadlines(exchange, language='en', today=False, response_count=-1):
    count = 0
    current_time = datetime.now()
    responseList = list()
    if today:
        apiCall = urlDate.format(exchange, language, current_time.strftime('%Y-%m-%d'), apiKey)
    else:
        apiCall = url.format(exchange, language, apiKey)
    response = requests.get(apiCall)
    data = response.json()
    for i in data['articles']:
        source = i['source']['name']
        author = i['author']
        title = i['title']
        description = i['description']
        link = i['url']
        responseList.append({'source':source, 'author':author, 'title':title, 'description':description, 'url':link})
        count += 1
        if count == response_count:
            break
    return responseList
