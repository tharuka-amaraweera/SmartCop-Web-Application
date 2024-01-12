import json

class ReadJson:
    def readjsontzoneOne(self):
        with open('json_data/officers1.json') as json_file:
            data=json.loads(json_file.read())
            return data

    def readjsontzoneTwo(self):
        with open('json_data/officers2.json') as json_file:
            data=json.loads(json_file.read())
            return data

    def readjsontzoneThree(self):
        with open('json_data/officers3.json') as json_file:
            data=json.loads(json_file.read())
            return data

    def readjsontzoneFour(self):
        with open('json_data/officers4.json') as json_file:
            data=json.loads(json_file.read())
            return data

    def readjsonAccidentPrediction(self):
        with open('json_data/accident_prediction.json') as json_file:
            data=json.loads(json_file.read())
            return data
