import pandas as pd

#Read dataset
acc_data_for_fp = pd.read_csv('./dataset/preprocessed_acc_data.csv')

time_array1 = []
time_array2 = []
time_zone_array = []

for time_value1 in acc_data_for_fp['Time']:
    time_value_first_two_chars = time_value1[:2]
    time_array1.append(time_value_first_two_chars)

for time_value2 in time_array1:
    first_char_value = time_value2[0]
    second_char_value = time_value2[1]
    if second_char_value == ":" :
        time_array2.append(first_char_value)
    else:
        time_array2.append(time_value2)

for time_value3 in time_array2:
    int_time_value = int(time_value3)
    if (int_time_value >= 0) & (int_time_value < 7) :
        time_zone_array.append(1)
    elif (int_time_value >= 7) & (int_time_value < 13) :
        time_zone_array.append(2)
    elif (int_time_value >= 13) & (int_time_value < 19) :
        time_zone_array.append(3)
    elif (int_time_value >= 19) & (int_time_value < 24) :
        time_zone_array.append(4)

#add time zones to dataframe
acc_data_for_fp['time_zone'] = pd.Series(time_zone_array, index=acc_data_for_fp.index)

#Convert dataframe to csv
acc_data_for_fp.to_csv (r'./dataset/acc_data_for_frequency_prediction.csv', index = False, header=True)