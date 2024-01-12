import pandas as pd
import numpy as np
from pandas  import DataFrame
# reading data from data sets
reason=pd.read_csv('reasons.csv')
officers=pd.read_csv('officers.csv')
accident_prediction=pd.read_csv('accident_prediction.csv')

#removing unwanted features
officer=officers.drop(["ASSIGNMENT","RACE/ETHNICITY","CITY_RESIDENT","AGENCY","SHIFT_PREFERENCE","Area"],axis=1)

# combine two dataframes reason and officers
combine_officers_rate = pd.merge(officer, reason, on='officer_id')

#checking for null values
print(combine_officers_rate.isnull());
combine_officers_rate.info()

#implementing KNN

# creating a pivot matrix
##create a Pivot matrix

officers_reasons_experience_rating=combine_officers_rate.pivot_table(index='officer_id',columns='reason',values='experience_rate').fillna(0)

#convert the pivot table into an array matrix
from scipy.sparse import csr_matrix
officers_reasons_matrix = csr_matrix(officers_reasons_experience_rating.values)

#then import NearestNeighbors (unsupervised machine learning)
from sklearn.neighbors import NearestNeighbors

model_knn = NearestNeighbors(metric = 'cosine', algorithm = 'brute')
model_knn.fit(officers_reasons_matrix)

# taking reasons of top 3 accident percentages for each time zone
one=[]
two=[]
three=[]
four=[]
#one.append(accident_prediction['time_zone'][row])
for row in accident_prediction.index:
    if accident_prediction['time_zone'][row]==1:
        one.append(accident_prediction['drunk'][row])
        one.append(accident_prediction['careless_driving'][row])
        one.append(accident_prediction['overtake'][row])
        one.append(accident_prediction['rule_violation'][row])
        one.append(accident_prediction['speed'][row])
        one.append(accident_prediction['turning'][row])
        one.append(accident_prediction['other'][row])
    if accident_prediction['time_zone'][row]==2:
        two.append(accident_prediction['drunk'][row])
        two.append(accident_prediction['careless_driving'][row])
        two.append(accident_prediction['overtake'][row])
        two.append(accident_prediction['rule_violation'][row])
        two.append(accident_prediction['speed'][row])
        two.append(accident_prediction['turning'][row])
        two.append(accident_prediction['other'][row])
    if accident_prediction['time_zone'][row]==3:
        three.append(accident_prediction['drunk'][row])
        three.append(accident_prediction['careless_driving'][row])
        three.append(accident_prediction['overtake'][row])
        three.append(accident_prediction['rule_violation'][row])
        three.append(accident_prediction['speed'][row])
        three.append(accident_prediction['turning'][row])
        three.append(accident_prediction['other'][row])
    if accident_prediction['time_zone'][row]==4:
        four.append(accident_prediction['drunk'][row])
        four.append(accident_prediction['careless_driving'][row])
        four.append(accident_prediction['overtake'][row])
        four.append(accident_prediction['rule_violation'][row])
        four.append(accident_prediction['speed'][row])
        four.append(accident_prediction['turning'][row])
        four.append(accident_prediction['other'][row])

# get the maximum percentage accident reasons for each time zone
# i=0 -> drunk
# i=1 -> careless_driving
# i=2 -> overtake
# i=3 -> rule_violation
# i=4 -> speed
# i=5 -> turning
# i=6 -> other

# for timezone 1
tm_1 = []

for i in range(0, 3):
    f = np.array([one])
    a = f.argmax()
    one[a] = 0
    tm_1.append(a)

print(tm_1)
print(one)

# for timezone 2
tm_2 = []

for i in range(0, 3):
    f = np.array([two])
    a = f.argmax()
    two[a] = 0
    tm_2.append(a)

print(tm_2)
print(two)

# for timezone 3
tm_3 = []

for i in range(0, 3):
    f = np.array([three])
    a = f.argmax()
    three[a] = 0
    tm_3.append(a)

print(tm_3)
print(three)

# for timezone 4
tm_4 = []

for i in range(0, 3):
    f = np.array([four])
    a = f.argmax()
    four[a] = 0
    tm_4.append(a)

print(tm_4)
print(four)

# selecting random officer for timezone one
# selecting random officer for timezone_1
first_1 = ""
second_1 = ""
third_1 = ""
j = 0
for i in range(0, 8):
    if i == 0:
        if i == tm_1[0]:
            first_1 = 'drunk'
        if i == tm_1[1]:
            second_1 = 'drunk'
        if i == tm_1[2]:
            third_1 = 'drunk'
    elif i == 1:
        if i == tm_1[0]:
            first_1 = 'careless_driving'
        if i == tm_1[1]:
            second_1 = 'careless_driving'
        if i == tm_1[2]:
            third_1 = 'careless_driving'
    elif i == 2:
        if i == tm_1[0]:
            first_1 = 'overtake'
        if i == tm_1[1]:
            second_1 = 'overtake'
        if i == tm_1[2]:
            third_1 = 'overtake'
    elif i == 3:
        if i == tm_1[0]:
            first_1 = 'rule_violating'
        if i == tm_1[1]:
            second_1 = 'rule_violating'
        if i == tm_1[2]:
            third_1 = 'rule_violating'
    elif i == 4:
        if i == tm_1[0]:
            first_1 = 'speed'
        if i == tm_1[1]:
            second_1 = 'speed'
        if i == tm_1[2]:
            third_1 = 'speed'
    elif i == 5:
        if i == tm_1[0]:
            first_1 = 'turning'
        if i == tm_1[1]:
            second_1 = 'turning'
        if i == tm_1[2]:
            third_1 = 'turning'
    else:
        if i == tm_1[0]:
            first_1 = 'other'
        if i == tm_1[1]:
            second_1 = 'other'
        if i == tm_1[2]:
            third_1 = 'other'

print("first : " + first_1)
print("second : " + second_1)
print("third : " + third_1)

off1 = []
off1 = np.where((officers_reasons_experience_rating[first_1] == 3) & (officers_reasons_experience_rating[second_1] == 3) & (officers_reasons_experience_rating[third_1] == 3))
arr = np.array([off1])

result = arr.flatten()
print(result)

random_officer_one = np.random.choice(result)
print(random_officer_one)

# selecting random officer for timezone two
first_2 = ""
second_2 = ""
third_2 = ""
j = 0
for i in range(0, 8):
    if i == 0:
        if i == tm_2[0]:
            first_2 = 'drunk'
        if i == tm_2[1]:
            second_2 = 'drunk'
        if i == tm_2[2]:
            third_2 = 'drunk'
    elif i == 1:
        if i == tm_2[0]:
            first_2 = 'careless_driving'
        if i == tm_2[1]:
            second_2 = 'careless_driving'
        if i == tm_2[2]:
            third_2 = 'careless_driving'
    elif i == 2:
        if i == tm_2[0]:
            first_2 = 'overtake'
        if i == tm_2[1]:
            second_2 = 'overtake'
        if i == tm_2[2]:
            third_2 = 'overtake'
    elif i == 3:
        if i == tm_2[0]:
            first_2 = 'rule_violating'
        if i == tm_2[1]:
            second_2 = 'rule_violating'
        if i == tm_2[2]:
            third_2 = 'rule_violating'
    elif i == 4:
        if i == tm_2[0]:
            first_2 = 'speed'
        if i == tm_2[1]:
            second_2 = 'speed'
        if i == tm_2[2]:
            third_2 = 'speed'
    elif i == 5:
        if i == tm_1[0]:
            first_1 = 'turning'
        if i == tm_1[1]:
            second_1 = 'turning'
        if i == tm_1[2]:
            third_1 = 'turning'
    else:
        if i == tm_2[0]:
            first_2 = 'other'
        if i == tm_2[1]:
            second_2 = 'other'
        if i == tm_2[2]:
            third_2 = 'other'

print("first : " + first_2)
print("second : " + second_2)
print("third : " + third_2)

off2 = []
off2 = np.where((officers_reasons_experience_rating[first_2] == 3) & (officers_reasons_experience_rating[second_2] == 3) & (officers_reasons_experience_rating[third_2] == 3))
arr = np.array([off2])

result = arr.flatten()
print(result)

random_officer_two = np.random.choice(result)
print(random_officer_two)

# selecting random officer for timezone three
first_3 = ""
second_3 = ""
third_3 = ""
j = 0
for i in range(0, 8):
    if i == 0:
        if i == tm_3[0]:
            first_3 = 'drunk'
        if i == tm_3[1]:
            second_3 = 'drunk'
        if i == tm_3[2]:
            third_3 = 'drunk'
    elif i == 1:
        if i == tm_3[0]:
            first_3 = 'careless_driving'
        if i == tm_3[1]:
            second_3 = 'careless_driving'
        if i == tm_3[2]:
            third_3 = 'careless_driving'
    elif i == 2:
        if i == tm_3[0]:
            first_3 = 'overtake'
        if i == tm_3[1]:
            second_3 = 'overtake'
        if i == tm_3[2]:
            third_3 = 'overtake'
    elif i == 3:
        if i == tm_3[0]:
            first_3 = 'rule_violating'
        if i == tm_3[1]:
            second_3 = 'rule_violating'
        if i == tm_3[2]:
            third_3 = 'rule_violating'
    elif i == 4:
        if i == tm_3[0]:
            first_3 = 'speed'
        if i == tm_3[1]:
            second_3 = 'speed'
        if i == tm_3[2]:
            third_3 = 'speed'
    elif i == 5:
        if i == tm_3[0]:
            first_3 = 'turning'
        if i == tm_3[1]:
            second_3 = 'turning'
        if i == tm_3[2]:
            third_3 = 'turning'
    else:
        if i == tm_3[0]:
            first_3 = 'other'
        if i == tm_3[1]:
            second_3 = 'other'
        if i == tm_3[2]:
            third_3 = 'other'

print("first : " + first_3)
print("second : " + second_3)
print("third : " + third_3)

off3 = []
off3 = np.where((officers_reasons_experience_rating[first_3] == 3) & (officers_reasons_experience_rating[second_3] == 3) & (officers_reasons_experience_rating[third_3] == 3))
arr = np.array([off3])

result = arr.flatten()
print(result)

random_officer_three = np.random.choice(result)
print(random_officer_three)

# selecting random officer for timezone four
first_4 = ""
second_4 = ""
third_4 = ""
j = 0
for i in range(0, 8):
    if i == 0:
        if i == tm_4[0]:
            first_4 = 'drunk'
        if i == tm_4[1]:
            second_4 = 'drunk'
        if i == tm_4[2]:
            third_4 = 'drunk'
    elif i == 1:
        if i == tm_4[0]:
            first_4 = 'careless_driving'
        if i == tm_4[1]:
            second_4 = 'careless_driving'
        if i == tm_4[2]:
            third_4 = 'careless_driving'
    elif i == 2:
        if i == tm_4[0]:
            first_4 = 'overtake'
        if i == tm_4[1]:
            second_4 = 'overtake'
        if i == tm_4[2]:
            third_4 = 'overtake'
    elif i == 3:
        if i == tm_4[0]:
            first_4 = 'rule_violating'
        if i == tm_4[1]:
            second_4 = 'rule_violating'
        if i == tm_4[2]:
            third_4 = 'rule_violating'
    elif i == 4:
        if i == tm_4[0]:
            first_4 = 'speed'
        if i == tm_4[1]:
            second_4 = 'speed'
        if i == tm_4[2]:
            third_4 = 'speed'
    elif i == 5:
        if i == tm_4[0]:
            first_4 = 'turning'
        if i == tm_4[1]:
            second_4 = 'turning'
        if i == tm_4[2]:
            third_4 = 'turning'
    else:
        if i == tm_4[0]:
            first_4 = 'other'
        if i == tm_4[1]:
            second_4 = 'other'
        if i == tm_4[2]:
            third_4 = 'other'

print("first : " + first_4)
print("second : " + second_4)
print("third : " + third_4)

off4 = []
# off4=np.where((test_reasons_experience_rating[first_4]==1) & (test_reasons_experience_rating[second_4]==1) & (test_reasons_experience_rating[third_4]==1))
off4 = np.where((officers_reasons_experience_rating[first_4] == 3) & (officers_reasons_experience_rating[second_4] == 3) & (officers_reasons_experience_rating[third_4] == 3))
arr = np.array([off4])

result = arr.flatten()
print(result)

random_officer_four = np.random.choice(result)
print(random_officer_four)

flattened = pd.DataFrame(officers_reasons_experience_rating.to_records())

#recommending officers for timezone one
officer_one = []
distances_one, indices_one = model_knn.kneighbors(
    officers_reasons_experience_rating.iloc[random_officer_one, :].values.reshape(1, -1), n_neighbors=21)
indices_one
print("recommended police officers for time_zone one")
for i in range(0, len(distances_one.flatten())):
    print('{0}: {1}, with distance of {2}:'.format(i, officers_reasons_experience_rating.index[indices_one.flatten()[i]],indices_one.flatten()[i]))
    officer_one.append(officers_reasons_experience_rating.index[indices_one.flatten()[i]])

#output for recommended officers in timezone 1
jsonOffOne = DataFrame(officer_one, columns=['Officers'])
jsonOffOne.to_json(r'officers1.json')


#recommending officers for timezone two
officer_two=[]
distances_one, indices_one = model_knn.kneighbors(officers_reasons_experience_rating.iloc[random_officer_two,:].values.reshape(1, -1), n_neighbors = 21)
print("recommended police officers for time_zone two")
for i in range(0, len(distances_one.flatten())):
    print('{0}: {1}, with distance of {2}:'.format(i, officers_reasons_experience_rating.index[indices_one.flatten()[i]], indices_one.flatten()[i]))
    officer_two.append(officers_reasons_experience_rating.index[indices_one.flatten()[i]])

jsonOffTwo = DataFrame(officer_two, columns=['Officers'])
jsonOffTwo.to_json(r'officers2.json')

#recommending officers for timezone three
officer_three=[]
distances_one, indices_one = model_knn.kneighbors(officers_reasons_experience_rating.iloc[random_officer_three,:].values.reshape(1, -1), n_neighbors = 21)
print("recommended police officers for time_zone three")
for i in range(0, len(distances_one.flatten())):
    print('{0}: {1}, with distance of {2}:'.format(i, officers_reasons_experience_rating.index[indices_one.flatten()[i]], indices_one.flatten()[i]))
    officer_three.append(officers_reasons_experience_rating.index[indices_one.flatten()[i]])

jsonOffThree = DataFrame(officer_three, columns=['Officers'])
jsonOffThree.to_json(r'officers3.json')

#recommending officers for timezone four
officer_four=[]
distances_one, indices_one = model_knn.kneighbors(officers_reasons_experience_rating.iloc[random_officer_four,:].values.reshape(1, -1), n_neighbors = 21)
indices_one
print("recommended police officers for time_zone four")
for i in range(0, len(distances_one.flatten())):
    print('{0}: {1}, with distance of {2}:'.format(i, officers_reasons_experience_rating.index[indices_one.flatten()[i]], indices_one.flatten()[i]))
    officer_four.append(officers_reasons_experience_rating.index[indices_one.flatten()[i]])

jsonOffFour = DataFrame(officer_four, columns=['Officers'])
jsonOffFour.to_json(r'officers4.json')