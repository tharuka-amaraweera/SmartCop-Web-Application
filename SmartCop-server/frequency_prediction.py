import numpy as np
import pandas as pd
#normalize labels because there are both numerical and categorical features. Use LabelEncorder
from sklearn.preprocessing import LabelEncoder
#split dataset
from sklearn.model_selection import train_test_split
#Import KNN classifier
from sklearn.neighbors import KNeighborsClassifier
#Import metrics to test accuracy and scores
from sklearn import metrics
#create a dataframe
from pandas import DataFrame

#Read dataset
acc_data_for_fp = pd.read_csv('./dataset/acc_data_for_frequency_prediction.csv')
print(acc_data_for_fp.head())

#Current Count number of records
fNoOfRecords=len(acc_data_for_fp)
print(fNoOfRecords)

#label encoding
lbl_enc = LabelEncoder()
tf_acc_data_for_fp = acc_data_for_fp.copy()
for i in acc_data_for_fp.columns:
    tf_acc_data_for_fp[i]=lbl_enc.fit_transform(acc_data_for_fp[i])

#Eliminate 'time_zone' column: the output feature
X = tf_acc_data_for_fp.drop(['time_zone'], axis=1)
#Assign 'time_zone' column to Y varible
Y = tf_acc_data_for_fp['time_zone']
#collect and save the required features list
feature_list = list(X.columns)

#train set = 60% and test set = 40%
X_train, X_test,Y_train, Y_test = train_test_split(X, Y, test_size=0.4)

#Apply KNN classifier
knn_classifier_for_fp = KNeighborsClassifier(n_neighbors=3, metric='minkowski', p=2)
knn_classifier_for_fp.fit(X_train, Y_train)

#Fit the test set
Y_pred= knn_classifier_for_fp.predict(X_test)

#Measure the accuracy
accuracy = metrics.accuracy_score(Y_test, Y_pred)
print(metrics.accuracy_score(Y_test, Y_pred))
print(metrics.f1_score(Y_test, Y_pred, average='weighted'))

# Display classification report with respect to the predictions

print("Road accident frequency Classification Report : \n\n",
      metrics.classification_report(Y_pred, Y_test, target_names=["time_zone1","time_zone2","time_zone3", "time_zone4"]))


#convert test results in to dataframe
df_frequency_test_results = DataFrame(Y_pred, columns= ['time_zone'])

#convert dataframe to json
df_frequency_test_results.to_json (r'./json_data/frequency_test.json',orient='columns')

#frequency prediction summary
frequency_summary_data = {'type':['fNoOfRecords', 'fNoOfFeatures', 'accuracy'],
        'count':[fNoOfRecords, 21, accuracy]}
df_frequency_summary_data = pd.DataFrame(frequency_summary_data)
frequency_summary = df_frequency_summary_data.to_json (r'./json_data/frequency_summary.json',orient='columns')

