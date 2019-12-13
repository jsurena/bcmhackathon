import json
import scrapy

class CoinMarketCapSpider(scrapy.Spider):
    name = 'CoinMarketCapSpider'
    start_urls = ['https://next-prod.coinmarketcap.com/rankings/exchanges/']
    img_base_url = 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/{exchange_id}.png'
    exchange_url = 'https://coinmarketcap.com/exchanges/{exchange}/'

    def parse(self, response):
        data = response.css('#__NEXT_DATA__::text').get()
        data = json.loads(data)
        exchanges = data['props']['initialState']['exchange']['listingLatest']['data']
        exchangeNameList = []
        for exchange in exchanges:
            exchangeData = {
                "exchange_id": exchange["id"], 
                "name": exchange["name"], 
                "rank": exchange["rank"], 
                "slug": exchange["slug"], 
                "numTradingPairs": exchange["num_market_pairs"],
                "icon": self.img_base_url.format(exchange_id=exchange["id"]), 
                "cmcURL": self.exchange_url.format(exchange=exchange["slug"]),
                "dateLaunched": exchange["date_launched"], 
                "lastUpdated": exchange["last_updated"], 
                "volume": exchange["quote"]["USD"]["volume_24h"], 
                "volumeChange": exchange["quote"]["USD"]["percent_change_volume_24h"]
                }
            exchangeNameList.append(exchangeData)
        yield {"exchanges" : exchangeNameList}
"""
        next_page = response.css('[data-qa-id="table-listing-button-next"]::attr(href)').get()
        if next_page:
            yield scrapy.Request(url=response.urljoin(next_page), callback=self.parse)
"""