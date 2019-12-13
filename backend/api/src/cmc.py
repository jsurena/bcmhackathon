import json
import scrapy


start_urls = ['https://next-prod.coinmarketcap.com/rankings/exchanges/']


class CoinMarketCapSpider(scrapy.Spider):
    name = 'CoinMarketCapSpider'
    img_base_url = 'https://s2.coinmarketcap.com/static/img/exchanges/64x64/{exchange_id}.png'
    #start_urls = ['https://coinmarketcap.com/exchanges/{}/'.format(self.exchange)]

    def parse(self, response):
        data = response.css('#__NEXT_DATA__::text').get()
        data = json.loads(data)
        exchanges = data['props']['initialState']['exchange']['listingLatest']['data']
        relevant = data['props']['initialState']['exchange']['marketPairsLatest']['data']
        exchangeID = list(relevant.keys())[0]
        rawTradingPairs = relevant[exchangeID]['active']['data']['market_pairs']
        tradingPairs = []
        for pair in rawTradingPairs:
            pairInfo = {
                "ticker_id": pair["market_id"], 
                "pair": pair['market_pair'], 
                "price":pair["quote"]["exchange_reported"]["price"],
                "volume_percentage": pair["calculated_market_pair_volume_percentage"], 
                "rank": pair["rank"]
                }
            tradingPairs.append(pairInfo)
        yield {exchangeID : tradingPairs}

"""
start_urls = ["https://coinmarketcap.com/exchanges/biki/", "https://coinmarketcap.com/exchanges/bkex/", "https://coinmarketcap.com/exchanges/p2pb2b/", "https://coinmarketcap.com/exchanges/fatbtc/", "https://coinmarketcap.com/exchanges/coinex/", "https://coinmarketcap.com/exchanges/lbank/", "https://coinmarketcap.com/exchanges/binance/", "https://coinmarketcap.com/exchanges/mxc/", "https://coinmarketcap.com/exchanges/dcoin/", "https://coinmarketcap.com/exchanges/coinbene/", "https://coinmarketcap.com/exchanges/bit-z/", "https://coinmarketcap.com/exchanges/digifinex/", "https://coinmarketcap.com/exchanges/coineal/", "https://coinmarketcap.com/exchanges/bibox/", "https://coinmarketcap.com/exchanges/idax/", "https://coinmarketcap.com/exchanges/cointiger/", "https://coinmarketcap.com/exchanges/hitbtc/", "https://coinmarketcap.com/exchanges/huobi-global/", "https://coinmarketcap.com/exchanges/bilaxy/", "https://coinmarketcap.com/exchanges/bitforex/", "https://coinmarketcap.com/exchanges/okex/", "https://coinmarketcap.com/exchanges/bigone/", "https://coinmarketcap.com/exchanges/cbx/", "https://coinmarketcap.com/exchanges/coinsuper/", "https://coinmarketcap.com/exchanges/bw-com/", "https://coinmarketcap.com/exchanges/latoken/", "https://coinmarketcap.com/exchanges/bitmart/", "https://coinmarketcap.com/exchanges/exrates/", "https://coinmarketcap.com/exchanges/rightbtc/", "https://coinmarketcap.com/exchanges/coinegg/", "https://coinmarketcap.com/exchanges/55-com/", "https://coinmarketcap.com/exchanges/idcm/", "https://coinmarketcap.com/exchanges/hcoin/", "https://coinmarketcap.com/exchanges/hubi/", "https://coinmarketcap.com/exchanges/bcex/", "https://coinmarketcap.com/exchanges/hotbit/", "https://coinmarketcap.com/exchanges/zb-com/", "https://coinmarketcap.com/exchanges/catex/", "https://coinmarketcap.com/exchanges/bitasset/", "https://coinmarketcap.com/exchanges/cryptonex/", "https://coinmarketcap.com/exchanges/bithumb/", "https://coinmarketcap.com/exchanges/coinsbit/", "https://coinmarketcap.com/exchanges/tokok/", "https://coinmarketcap.com/exchanges/dragonex/", "https://coinmarketcap.com/exchanges/sistemkoin/", "https://coinmarketcap.com/exchanges/chaoex/", "https://coinmarketcap.com/exchanges/vindax/", "https://coinmarketcap.com/exchanges/upbit/", "https://coinmarketcap.com/exchanges/coinbase-pro/", "https://coinmarketcap.com/exchanges/bhex/", "https://coinmarketcap.com/exchanges/bitrabbit/", "https://coinmarketcap.com/exchanges/folgory/", "https://coinmarketcap.com/exchanges/chainx/", "https://coinmarketcap.com/exchanges/bitmax/", "https://coinmarketcap.com/exchanges/kraken/", "https://coinmarketcap.com/exchanges/bitstamp/", "https://coinmarketcap.com/exchanges/bitrue/", "https://coinmarketcap.com/exchanges/bitfinex/", "https://coinmarketcap.com/exchanges/dobi-exchange/", "https://coinmarketcap.com/exchanges/coinlim/", "https://coinmarketcap.com/exchanges/coinmex/", "https://coinmarketcap.com/exchanges/kryptono/", "https://coinmarketcap.com/exchanges/bitinka/", "https://coinmarketcap.com/exchanges/tidebit/", "https://coinmarketcap.com/exchanges/coinbit/", "https://coinmarketcap.com/exchanges/huobi-russia/", "https://coinmarketcap.com/exchanges/oceanex/", "https://coinmarketcap.com/exchanges/simex/", "https://coinmarketcap.com/exchanges/bitflyer/", "https://coinmarketcap.com/exchanges/coinall/", "https://coinmarketcap.com/exchanges/huobi-korea/", "https://coinmarketcap.com/exchanges/bithumb-global/", "https://coinmarketcap.com/exchanges/gate-io/", "https://coinmarketcap.com/exchanges/paybito/", "https://coinmarketcap.com/exchanges/coinone/", "https://coinmarketcap.com/exchanges/abcc/", "https://coinmarketcap.com/exchanges/extstock/", "https://coinmarketcap.com/exchanges/poloniex/", "https://coinmarketcap.com/exchanges/whitebit/", "https://coinmarketcap.com/exchanges/probit-exchange/", "https://coinmarketcap.com/exchanges/btc-alpha/", "https://coinmarketcap.com/exchanges/yobit/", "https://coinmarketcap.com/exchanges/coinhe/", "https://coinmarketcap.com/exchanges/kucoin/", "https://coinmarketcap.com/exchanges/bitbank/", "https://coinmarketcap.com/exchanges/bitubu/", "https://coinmarketcap.com/exchanges/bitbay/", "https://coinmarketcap.com/exchanges/exmo/", "https://coinmarketcap.com/exchanges/livecoin/", "https://coinmarketcap.com/exchanges/bitlish/", "https://coinmarketcap.com/exchanges/alterdice/", "https://coinmarketcap.com/exchanges/shortex/", "https://coinmarketcap.com/exchanges/coindeal/", "https://coinmarketcap.com/exchanges/bittrex/", "https://coinmarketcap.com/exchanges/coinfield/", "https://coinmarketcap.com/exchanges/yunex/", "https://coinmarketcap.com/exchanges/hanbitco/", "https://coinmarketcap.com/exchanges/okex-korea/", "https://coinmarketcap.com/exchanges/lakebtc/", "https://coinmarketcap.com/exchanges/bbx/"]
    
        next_page = response.css('[data-qa-id="table-listing-button-next"]::attr(href)').get()
        if next_page:
            yield scrapy.Request(url=response.urljoin(next_page), callback=self.parse)
"""