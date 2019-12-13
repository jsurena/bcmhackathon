import re

floats = re.compile(r'[+-]?([0-9]*[.])?[0-9]+')

class Exchange:
    def __init__(self, exchangeName, cmk, ccel, approved):
        self.tradeInfo = cmk
        self.exchangeInfo = ccel
        self.approved = approved

    def tradeAccumulation(self):
        ret = dict()
        for i in self.tradeInfo.keys():
            volume_percent_sum = 0.0
            day_volume = 0.0
            avg_price = 0.0
            for n in self.tradeInfo[i]:
                volume_percent_sum = volume_percent_sum + float(floats.search(n['volume_percent']).group())
                day_volume = day_volume + float(floats.search(n['volume_dollar']).group())
                avg_price = avg_price + float(floats.search(n['price']).group())
            avg_price = avg_price / len(self.tradeInfo[i])
            ret[i] = {"total_percent" : volume_percent_sum, "total_volume" : day_volume, "Price" : avg_price}
        return ret

    def getPairs(self, currency, details=False):
        if not details:
            pairs = list()
            for i in self.tradeInfo[currency]:
                pairs.append(i['pairing'])
            return pairs
        else:
            pairs = dict()
            for i in self.tradeInfo[currency]:
                pairs[i[pairing]] = {'volume_dollar':i['volume_dollar'], 'price':i[price], 'volume_percent':i[volume_percent]}
