from  flask import Flask,jsonify,request
from  flask_pymongo import PyMongo
from bson.json_util import dumps
from  bson.objectid import ObjectId
from werkzeug.security import  generate_password_hash,check_password_hash
from read_json import ReadJson
from prediction_read_json import PredictionReadJson
from schedule_json import ScheduleOfficers
from flask_mail import Mail, Message
#officers recommendation json file called
off1=ReadJson()
tzone=off1.readjsontzoneOne()
tzTwo=off1.readjsontzoneTwo()
tzThree=off1.readjsontzoneThree()
tzFour=off1.readjsontzoneFour()
accpre=off1.readjsonAccidentPrediction()
#severity prediction functions call
prediction_results=PredictionReadJson()
sv_rs_count=prediction_results.severityreadjson()
sv_summary = prediction_results.severitySummary()
#reason prediction function call
rs_rs_count=prediction_results.reasonreadjson()
rs_summary = prediction_results.reasonSummary()
#frequency prediction function call
fp_rs_count=prediction_results.frequncyreadjson()
fp_summary=prediction_results.frequencySummary()
#officer schedule time zone one schedulejsontzoneOne function call
sch=ScheduleOfficers()
scOne=sch.schedulejsontzoneOne()
scTwo=sch.schedulejsontzTwo()
scThree=sch.schedulejsontzThree()
scFour=sch.schedulejsontzFour()
#vicinity
vp_count = prediction_results.vicinityCount()

app = Flask(__name__)

app.secret_key = "secretkey"

app.config['MONGO_URI']='mongodb://ktprojects:kt2020@clustersmartcop-shard-00-00-nhjxy.mongodb.net:27017,clustersmartcop-shard-00-01-nhjxy.mongodb.net:27017,clustersmartcop-shard-00-02-nhjxy.mongodb.net:27017/smartcopdb?ssl=true&replicaSet=ClusterSmartCop-shard-0&authSource=admin&retryWrites=true&w=majority'

mongo=PyMongo(app)

app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 465
app.config['MAIL_USERNAME'] = 'smartcop.email@gmail.com'
app.config['MAIL_PASSWORD'] = 'smartcopemail1234'
app.config['MAIL_USE_TLS'] = False
app.config['MAIL_USE_SSL'] = True

mail = Mail(app)

@app.route('/add',methods=['POST'])
def add_user():
    _json=request.json
    _name=_json['name']
    _email=_json['email']


    if _name and _email and request.method == 'POST':
        id = mongo.db.animals.insert({'name':_name,'email':_email})
        resp = jsonify("Animal added successfully")
        resp.status_code=200
        return resp
    else:
        return not_found()
#adding officers for time zone 1
@app.route('/add_officers_one',methods=['POST'])
def add_officer_one():
    if tzone and request.method == 'POST':
        id = mongo.db.timezoneone.insert(tzone)
        resp = jsonify("officer added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()

#adding officers for time zone 2
@app.route('/add_officers_two',methods=['POST'])
def add_officer_two():
    if tzTwo and request.method == 'POST':
        id = mongo.db.timezonetwo.insert(tzTwo)
        resp = jsonify("officer added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()

#adding officers for time zone 3
@app.route('/add_officers_three',methods=['POST'])
def add_officer_three():
    if tzThree and request.method == 'POST':
        id = mongo.db.timezonethree.insert(tzThree)
        resp = jsonify("officer added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()

#adding officers for time zone 4
@app.route('/add_officers_four',methods=['POST'])
def add_officer_four():
    if tzFour and request.method == 'POST':
        id = mongo.db.timezonefour.insert(tzFour)
        resp = jsonify("officer added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()

#adding accident_prediction data
@app.route('/add_accident_prediction',methods=['POST'])
def add_accident_prediction():
    if accpre and request.method == 'POST':
        id = mongo.db.accidentPrediction.insert(accpre)
        resp = jsonify("accident prediction details added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()


#add severity prediction results to db
@app.route('/add_prediction_results',methods=['POST'])
def add_prediction_results():
    if sv_rs_count and request.method == 'POST':
        id = mongo.db.severityresultscount.insert(sv_rs_count)
        resp = jsonify("severity results added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()

#add frequency prediction results to db
@app.route('/add_frequency_results',methods=['POST'])
def add_frequency_prediction_results():
    if fp_rs_count and request.method == 'POST':
        id = mongo.db.frequencyresultscount.insert(fp_rs_count)
        resp = jsonify("frequency results added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()

#get severity prediction results count
@app.route('/prediction_results')
def prediction_results():
    sv_results=mongo.db.severityresultscount.find()
    response=dumps(sv_results)
    return response


#getting officers from time zone 1
@app.route('/get_officers_one')
def getOfficerOne():
    print('okay')
    officer1=mongo.db.timezoneone.find()
    response=dumps(officer1)
    return response

#getting officers from time zone 2
@app.route('/get_officers_two')
def getOfficerTwo():
    officer2=mongo.db.timezonetwo.find()
    response=dumps(officer2)
    return response


#getting officers from time zone 3
@app.route('/get_officers_three')
def getOfficerThree():
    officer3=mongo.db.timezonethree.find()
    response=dumps(officer3)
    return response

#getting officers from time zone 4
@app.route('/get_officers_four')
def getOfficerFour():
    officer4=mongo.db.timezonefour.find()
    response=dumps(officer4)
    return response


#getting accident prediction details
@app.route('/get_accident_prediction')
def getAccident():
    acc=mongo.db.accidentPrediction.find()
    response=dumps(acc)
    return response

#add reason prediction results to db
@app.route('/add_reason_results',methods=['POST'])
def add_reason_prediction_results():
    if rs_rs_count and request.method == 'POST':
        id = mongo.db.reasonresultscount.insert(rs_rs_count)
        resp = jsonify("reason results added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()


#get reason prediction results count
@app.route('/reason_prediction_results')
def get_reason_prediction_results():
    rs_results=mongo.db.reasonresultscount.find()
    response=dumps(rs_results)
    return response

@app.errorhandler(404)
def not_found(error=None):
    message = {
        'status':404,
        'message':'Not Found' + request.url
    }
    resp=jsonify(message)
    resp.status_code=404

    return resp


#adding schedule officers time zone one
@app.route('/add_schedule_officers_one',methods=['POST'])
def add_schedule_officers_one():
    print('okay1')
    if scOne and request.method == 'POST':
        id = mongo.db.scheduletimezoneone.insert(scOne)
        resp = jsonify("officer added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()


#adding schedule officers time zone two
@app.route('/add_schedule_officers_two',methods=['POST'])
def add_schedule_officers_two():
    print('okay2')
    if scTwo and request.method == 'POST':
        id = mongo.db.scheduletimezonetwo.insert(scTwo)
        resp = jsonify("officer added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()


#adding schedule officers time zone three
@app.route('/add_schedule_officers_three',methods=['POST'])
def add_schedule_officers_three():
    print('okay3')
    if scThree and request.method == 'POST':
        id = mongo.db.scheduletimezonethree.insert(scThree)
        resp = jsonify("officer added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()


#adding schedule officers time zone four
@app.route('/add_schedule_officers_four',methods=['POST'])
def add_schedule_officers_four():
    print('okay4')
    if scFour and request.method == 'POST':
        id = mongo.db.scheduletimezonefour.insert(scFour)
        resp = jsonify("officer added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()


#getting scheduled officers from time zone 1
@app.route('/get_scheduled_officers_one')
def getScheduleOfficerOne():
    schedule1=mongo.db.scheduletimezoneone.find()
    response=dumps(schedule1)
    return response


#getting scheduled officers from time zone 2
@app.route('/get_scheduled_officers_two')
def getScheduleOfficerTwo():
    schedule2=mongo.db.scheduletimezonetwo.find()
    response=dumps(schedule2)
    return response


#getting scheduled officers from time zone 3
@app.route('/get_scheduled_officers_three')
def getScheduleOfficerThree():
    schedule3=mongo.db.scheduletimezonethree.find()
    response=dumps(schedule3)
    return response



#getting scheduled officers from time zone 4
@app.route('/get_scheduled_officers_four')
def getScheduleOfficerFour():
    schedule4=mongo.db.scheduletimezonefour.find()
    response=dumps(schedule4)
    return response

#getting frequency prediction count in time zone wise
@app.route('/get_frequency_pred_results')
def getFrequencyCount():
    frequency=mongo.db.frequencyresultscount.find()
    response=dumps(frequency)
    return response

#getting vicinity prediction count
@app.route('/get_vicinity_pred_results')
def getVicinityCount():
    vicinity=mongo.db.vicinityresultscount.find()
    response=dumps(vicinity)
    return response

#severitySummary Insert
@app.route('/add_severity_summary',methods=['POST'])
def add_severity_summary():
    if sv_summary and request.method == 'POST':
        id = mongo.db.severitySummary.insert(sv_summary)
        resp = jsonify("Severity Summary added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()

#reasonSummary Insert
@app.route('/add_reason_summary',methods=['POST'])
def add_reason_summary():
    if rs_summary and request.method == 'POST':
        id = mongo.db.reasonSummary.insert(rs_summary)
        resp = jsonify("Reason Summary added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()

#frequencySummary Insert
@app.route('/add_frequency_summary',methods=['POST'])
def add_frequency_summary():
    if fp_summary and request.method == 'POST':
        id = mongo.db.frequencySummary.insert(fp_summary)
        resp = jsonify("Frequency Summary added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()

#getting severity summary
@app.route('/get_severity_summary')
def getSeveritySummary():
    severity=mongo.db.severitySummary.find()
    response=dumps(severity)
    return response

#getting reason summary
@app.route('/get_reason_summary')
def getReasonSummary():
    reason=mongo.db.reasonSummary.find()
    response=dumps(reason)
    return response

#getting frequency summary
@app.route('/get_frequency_summary')
def getFrequencySummary():
    frequency=mongo.db.frequencySummary.find()
    response=dumps(frequency)
    return response

#send email
@app.route('/send_email',methods=['POST'])
def send_email():
    _json = request.json
    _body = _json['body']
    _reviever = _json['reviever']
    msg = Message('Hey There three', sender="smartcop.email@gmail.com", recipients=[_reviever])
    msg.body = _body
    mail.send(msg)
    return 'message three has been sent'

#get officer details
@app.route('/get_officer_details/<_id>',methods=['GET'])
def get_officer_details(_id):
    resp = mongo.db.officers.find_one({'_id': _id})
    if resp:
        output = {'result': resp}
    else:
        output = 'output not found'

    return  jsonify(output)

@app.route('/get_officers_details')
def get_officers_details():
    officers = mongo.db.officers.find()
    response=dumps(officers)
    return response

#Area count Insert
@app.route('/add_area',methods=['POST'])
def add_area():
    if vp_count and request.method == 'POST':
        id = mongo.db.area.insert(vp_count)
        resp = jsonify("cluster added successfully")
        resp.status_code = 200
        return resp

    else:
        return not_found()

#getting area clusters
@app.route('/get_area_count')
def get_area_count():
    area=mongo.db.area.find()
    response=dumps(area)
    return response

if __name__ == "__main__":
    app.run(debug=True)

