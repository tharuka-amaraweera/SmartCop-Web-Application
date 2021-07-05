import pandas as pd
#feature scaling
from sklearn import metrics
#sklearn.metrics has metrics of various score functions, performance, distance computations and pairwise metrics
import sklearn.metrics as sm
#normalize labels because there are both numerical and categorical features. Use LabelEncorder
from sklearn.preprocessing import LabelEncoder
#split dataset
from sklearn.model_selection import train_test_split
#Random Forest Classifier algorithm
from sklearn.ensemble import RandomForestClassifier
#create a dataframe
from pandas import DataFrame


#Load the complete Accident dataset
acc_data_edited = pd.read_csv('edited_accident_vehicle_data.csv', encoding = 'latin')

#Sampling data by selecting 6 features over 21 features
acc_data = acc_data_edited[['Latitude','Longitude','Date','Age_of_Vehicle','make','Time','Accident_Severity']]

#number of input features
sNoOfFeatures = 6;

#Count number of records
num_of_records=len(acc_data)
print(num_of_records)

#Display dataset including features
print(acc_data.shape)
print(acc_data.head())

#Checking for sum of all null values
sum_of_nulls = sum(acc_data.isnull().sum())
print(sum_of_nulls)

#Checking for missing values in each column
count_of_nulls_each_column = acc_data.isnull().sum()
print(count_of_nulls_each_column)

#remove columns with many null values
accident_df2=acc_data[acc_data.columns[acc_data.isnull().mean() < 0.8]]
#remove rows with null values
accident_df3 = accident_df2.dropna(how='any',axis=0)
print(accident_df3.shape)
print(accident_df3.head())

#Again check for missing values for each column
column_null_count = accident_df3.isnull().sum()
print(column_null_count)

#Current Count number of records
sNoOfRecors=len(accident_df3)
print(sNoOfRecors)

#label encoding
lbl_enc = LabelEncoder()
tf_acc_data = accident_df3.copy()
for i in accident_df3.columns:
    tf_acc_data[i]=lbl_enc.fit_transform(accident_df3[i])

#Eliminate 'Accident_Severity' column: the output feature
X = tf_acc_data.drop(['Accident_Severity'], axis=1)
#Assign 'accident_data' column to Y varible
Y = tf_acc_data['Accident_Severity']
#list the selected input features
feature_list = list(X.columns)

#Divide the dataset by 80:20 as training and testing, random_state=42
X_train, X_test, Y_train, Y_test = train_test_split(X, Y, test_size=0.2, random_state = 42)

#Display the measured training shape/length of training and testing datasets
print('The shape of Training Features: ', X_train.shape)
print('The shape of Training Lables: ', Y_train.shape)
print('The shape of Testing Features: ', X_test.shape)
print('The shape of Testing Lables: ', Y_train.shape)

#Implementation of Random Forest Classifier algorithm
rfc = RandomForestClassifier(max_depth=6) #n_estimators is number of trees in the forest
rfc.fit(X_train, Y_train)

#Accident severity predicitions: test data
severity_pred_results = rfc.predict(X_test)
print('severity prediction results')
print(severity_pred_results)

#Measure the accuracy
accuracy=sm.accuracy_score(Y_test, severity_pred_results)
print('Measured accuracy level of test data:',str(accuracy))

#Classification report with respect to the predicted values

print("Road accident Severity Classification Report : \n\n", metrics.classification_report(severity_pred_results, Y_test, target_names = ["Slight","Serious","Fatal"]))

#convert test results in to dataframe
df_severity_test_results = DataFrame(severity_pred_results, columns= ['Accident_Severity'])
print(df_severity_test_results)
#convert train results in to dataframe
df_severity_train_results = DataFrame(rfc, columns= ['Accident_Severity'])
print(df_severity_train_results)

#convert dataframe to json
df_severity_test_results.to_json (r'./json_data/severity_test.json',orient='columns')
df_severity_train_results.to_json (r'./json_data/severity_train.json',orient='columns')

#severity prediction summary
severity_summary_data = {'type':['sNoOfRecors', 'sNoOfFeatures', 'accuracy'],
        'count':[sNoOfRecors, sNoOfFeatures, accuracy]}
df_severity_summary_data = pd.DataFrame(severity_summary_data)
severity_summary = df_severity_summary_data.to_json (r'./json_data/severity_summary.json',orient='columns')

