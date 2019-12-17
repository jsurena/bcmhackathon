import pandas as pd
import json

path = r'C:\Users\UJ336KG\Documents\Codebase\Hackathon\BCMHackathon2019\bcmhackathon\backend\api\src'
csvPath = path + r'\transactions.csv'
jsonPath = path + r'\trans.json'

a = pd.read_csv(csvPath)

a = a.to_dict(orient='records')

b = {'transactions' : a}

with open(jsonPath, 'w') as pr:
    json.dump(b, pr)