import pandas as pd

class PredictionReadJson:

    def severityreadjson(self):
        severity_json = pd.read_json('./json_data/severity_test.json')
        severity_df = pd.DataFrame.from_dict(severity_json, orient='columns')

        slight_count = 0
        serious_count = 0
        fatal_count = 0

        for severity_data in severity_df['Accident_Severity']:
            if severity_data == 0:
                slight_count = slight_count + 1
            elif severity_data == 1:
                serious_count = serious_count + 1
            elif severity_data == 2:
                fatal_count = fatal_count + 1

        #json_data = [{"slight_count": slight_count}, {"serious_count": serious_count}, {"fatal_count": fatal_count}]
        json_data = [{'type': 'slight_count', 'count': slight_count}, {'type': 'serious_count', 'count': serious_count},
                     {'type': 'fatal_count', 'count': fatal_count}]
        return json_data

    #reason prediction read results
    def reasonreadjson(self):
        reason_json = pd.read_json('./json_data/reason_test.json')
        reason_df = pd.DataFrame.from_dict(reason_json, orient='columns')

        careless_driving = 0
        drunk = 0
        speed = 0
        overtake = 0
        rule_violating = 0
        turning = 0
        other = 0

        for reason_data in reason_df['reasons']:
            if reason_data == 0:
                careless_driving = careless_driving + 1
            elif reason_data == 1:
                drunk = drunk + 1
            elif reason_data == 2:
                speed = speed + 1
            elif reason_data == 3:
                overtake = overtake + 1
            elif reason_data == 4:
                rule_violating = rule_violating + 1
            elif reason_data == 5:
                turning = turning + 1
            elif reason_data == 6:
                other = other + 1

        #json_data = [{"careless_driving": careless_driving}, {"drunk": drunk}, {"speed": speed}, {"overtake": overtake}, {"rule_violating": rule_violating}, {"turning": turning}, {"other": other}]
        json_data = [{'type': 'careless_driving', 'count': careless_driving}, {'type': 'drunk', 'count': drunk},
                     {'type': 'speed', 'count': speed}, {'type': 'overtake', 'count': overtake},
                     {'type': 'rule_violating', 'count': rule_violating}, {'type': 'turning', 'count': turning},
                     {'type': 'other', 'count': other}]
        return json_data

    #frequency prediction read results
    def frequncyreadjson(self):
        frequency_json = pd.read_json('./json_data/frequency_test.json')
        frequency_df = pd.DataFrame.from_dict(frequency_json, orient='columns')

        time_zone1 = 0
        time_zone2 = 0
        time_zone3 = 0
        time_zone4 = 0

        for frequncy_data in frequency_df['time_zone']:
            if frequncy_data == 0:
                time_zone1 = time_zone1 + 1
            elif frequncy_data == 1:
                time_zone2 = time_zone2 + 1
            elif frequncy_data == 2:
                time_zone3 = time_zone3 + 1
            elif frequncy_data == 3:
                time_zone4 = time_zone4 + 1

        json_data = [{'type': 'time_zone1', 'count': time_zone1}, {'type': 'time_zone2', 'count': time_zone2},
                     {'type': 'time_zone3', 'count': time_zone3}, {'type': 'time_zone4', 'count': time_zone4}]
        return json_data

    #Read severity summary
    def severitySummary(self):
        read_json = pd.read_json('./json_data/severity_summary.json')
        sNoOfRecords = read_json['count'][0]
        sNoOfFeatures = read_json['count'][1]
        accuracy = read_json['count'][2]

        json_data = [{'type': 'sNoOfRecords', 'count': sNoOfRecords}, {'type': 'sNoOfFeatures', 'count': sNoOfFeatures},
                     {'type': 'accuracy', 'count': accuracy}]
        return json_data

    def reasonSummary(self):
        data_json = pd.read_json('./json_data/reason_summary.json')

        rNoOfRecords = data_json['count'][0]
        rNoOfFeatures = data_json['count'][1]
        accuracy = data_json['count'][2]

        json_data = [{'type': 'rNoOfRecords', 'count': rNoOfRecords}, {'type': 'rNoOfFeatures', 'count': rNoOfFeatures},
                     {'type': 'accuracy', 'count': accuracy}]
        return json_data

    def frequencySummary(self):
        data_json = pd.read_json('./json_data/frequency_summary.json')

        fNoOfRecords = data_json['count'][0]
        fNoOfFeatures = data_json['count'][1]
        accuracy = data_json['count'][2]

        json_data = [{'type': 'fNoOfRecords', 'count': fNoOfRecords}, {'type': 'fNoOfFeatures', 'count': fNoOfFeatures},
                     {'type': 'accuracy', 'count': accuracy}]
        return json_data

    def vicinityCount(self):
        data_json = pd.read_json('./json_data/area_count_json.json')

        area1 = data_json['Count'][0]
        area2 = data_json['Count'][1]
        area3 = data_json['Count'][2]
        area4 = data_json['Count'][3]

        json_data = [{'type': 'area1', 'count': area1}, {'type': 'are2', 'count': area2},
                     {'type': 'area3', 'count': area3},{'type': 'area4', 'count': area4}]
        return json_data

prediction_results=PredictionReadJson()
print("area")
count = prediction_results.frequencySummary()
print(count)


