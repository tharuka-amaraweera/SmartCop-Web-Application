import pandas as pd
#create a dataframe
from pandas import DataFrame

#Load the complete Accident dataset
acc_data_edited = pd.read_csv('edited_accident_vehicle_data.csv', encoding = 'latin')

#Sampling data by selecting 22 features over 52 features
acc_data = acc_data_edited[['Latitude','Longitude', 'Urban_or_Rural_Area','1st_Road_Class', 'Speed_limit',
          'Road_Type', 'Road_Surface_Conditions', 'Weather_Conditions', 'Light_Conditions', 'Date',
          'Age_Band_of_Driver', 'Age_of_Vehicle', 'Junction_Detail', 'Junction_Location', 'X1st_Point_of_Impact',
          'make', 'Vehicle_Type', 'Vehicle_Manoeuvre','Did_Police_Officer_Attend_Scene_of_Accident','Time','reasons','Accident_Severity'
         ]]

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

#Convert preprocessed data into csv file
accident_df3.to_csv (r'./dataset/preprocessed_acc_data.csv', index = False, header=True)

#Count number of records
num_of_records=len(accident_df3)
print(num_of_records)
