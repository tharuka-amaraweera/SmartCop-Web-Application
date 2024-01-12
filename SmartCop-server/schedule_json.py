import json

class ScheduleOfficers:
    def schedulejsontzoneOne(self):
        with open('json_data/schedule_officers/officerOne.json') as json_file:
            data=json.loads(json_file.read())
            return data

    def schedulejsontzTwo(self):
        with open('json_data/schedule_officers/officerTwo.json') as json_file:
            data=json.loads(json_file.read())
            return data

    def schedulejsontzThree(self):
        with open('json_data/schedule_officers/officerThree.json') as json_file:
            data=json.loads(json_file.read())
            return data

    def schedulejsontzFour(self):
        with open('json_data/schedule_officers/officerFour.json') as json_file:
            data=json.loads(json_file.read())
            return data