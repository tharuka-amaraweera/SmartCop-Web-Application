from flask import Flask, jsonify, request
import pandas as pd
import numpy as np
import joblib
import traceback
from flask_restful import reqparse
app = Flask(__name__)

@app.route("/", methods=['GET'])
def hello():
    return "hey"

@app.route('/predictTime', methods=['POST'])
def predict():
	lr = joblib.load("timemodel.pkl")
	if lr:
		try:
			json = request.get_json()
			model_columns = joblib.load("timemodel_cols.pkl")
			#temp=list(json[0].values())
			vals=np.array([[json[0][0]['CurrentQuestion'],json[0][0]['TimeTakenToAnswer'],json[0][0]['AnswerStatus'],json[0][0]['TimeGiven']]])
			predictionTime = lr.predict(vals)
			print("here:",predictionTime)
            
			return jsonify({'prediction': str(predictionTime)})

		except:        
			return jsonify({'trace': traceback.format_exc()})
	else:
		return ('No model here to use')
    


if __name__ == '__main__':
    app.run(debug=True)