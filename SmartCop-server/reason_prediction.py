import pandas as pd
#feature scaling
from sklearn import metrics
#sklearn.metrics has metrics of various score functions, performance, distance computations and pairwise metrics
import sklearn.metrics as sm
#normalize labels because there are both numerical and categorical features. Use LabelEncorder
from sklearn.datasets import make_classification
from sklearn.preprocessing import LabelEncoder
#split dataset
from sklearn.model_selection import train_test_split
#AdaBoost Classification algorithm
from sklearn.ensemble import AdaBoostClassifier
#create a dataframe
from pandas import DataFrame

#Load the complete Accident dataset
acc_data_origin = pd.read_csv('edited_accident_vehicle_data.csv', encoding = 'latin')

#Sampling data
acc_data_for_reason_pred = acc_data_origin[['Latitude','Longitude', 'Date','Age_of_Vehicle','make','Time','reasons']]

#number of input features
rNoOfFeatures = 6

#select the dataset except the Accident_Index column
acc_data=acc_data_for_reason_pred.loc[:, acc_data_for_reason_pred.columns != 'Accident_Index']

#Checking for sum of all null values
sum_of_nulls = sum(acc_data.isnull().sum())

#Checking for missing values in each column
count_of_nulls_each_column = acc_data.isnull().sum()

#remove columns with many null values
accident_df1=acc_data[acc_data.columns[acc_data.isnull().mean() < 0.8]]
#remove rows with null values
accident_df2 = accident_df1.dropna(how='any',axis=0)

#Again check for missing values for each column
column_null_count = accident_df2.isnull().sum()
print(column_null_count)

#Current Count number of records
rNoOfRecords=len(accident_df2)
print(rNoOfRecords)

#Normalize data
lbl_enc = LabelEncoder()
tf_acc_data = accident_df2.copy()
for i in accident_df2.columns:
    tf_acc_data[i]=lbl_enc.fit_transform(accident_df2[i])

#Eliminate 'reasons' column: the output feature
X = tf_acc_data.drop(['reasons'], axis=1)
#Assign 'reasons' column to Y varible
Y = tf_acc_data['reasons']
feature_list = list(X.columns)

#Divide the dataset by 80:20 as training and testing, random_state=42
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state = 42)

#Display the measured training shape/length of training and testing datasets
print('The shape of Training Features: ', X_train.shape)
print('The shape of Training Lables: ', Y_train.shape)
print('The shape of Testing Features: ', X_test.shape)
print('The shape of Testing Lables: ', Y_train.shape)

#Implementation of AdaBoost Classification Algorithm which is an expansion of decision tree

X_train, Y_train = make_classification(n_samples=1000, n_features=6,n_informative=2, n_redundant=0,random_state=0, shuffle=False)

adb_clf = AdaBoostClassifier(n_estimators=100, random_state=0)
adb_clf.fit(X_train, Y_train)

#Accident reason predicitions: test data
acc_reason_pred = adb_clf.predict(X_test)


#Measure the accuracy
accuracy=sm.accuracy_score(Y_test, acc_reason_pred)
print('Measured accuracy level of test data:',str(accuracy))

# Display classification report with respect to the predictions

print("Road accident Reason Classification Report : \n\n",
      metrics.classification_report(acc_reason_pred, Y_test, target_names=["careless driving","drunk","speed", "overtake", "rule violating", "turning", "other"]))


#convert test results in to dataframe
df_reason_test_results = DataFrame(acc_reason_pred, columns= ['reasons'])
#convert train results in to dataframe
df_reason_train_results = DataFrame(adb_clf, columns= ['reasons'])

#convert dataframe to json
df_reason_test_results.to_json (r'./json_data/reason_test.json',orient='columns')
df_reason_train_results.to_json (r'./json_data/reason_train.json',orient='columns')

#reason prediction summary
reason_summary_data = {'type':['rNoOfRecords', 'rNoOfFeatures', 'accuracy'],
        'count':[rNoOfRecords, rNoOfFeatures, accuracy]}
df_reason_summary_data = pd.DataFrame(reason_summary_data)
reason_summary = df_reason_summary_data.to_json (r'./json_data/reason_summary.json',orient='columns')