import pandas as pd

officerOne = pd.read_json(r'../json_data/officers1.json')
officerTwo = pd.read_json(r'../json_data/officers2.json')
officerThree = pd.read_json(r'../json_data/officers3.json')
officerFour = pd.read_json(r'../json_data/officers4.json')

from gurobipy import *

# Converting recommended officer data to lists
officersTZOne=officerOne.values.tolist()
officersTZOne = [x[0] for x in officersTZOne]

officersTZTwo=officerTwo.values.tolist()
officersTZTwo = [x[0] for x in officersTZTwo]

officersTZThree=officerThree.values.tolist()
officersTZThree = [x[0] for x in officersTZThree]

officersTZFour=officerFour.values.tolist()
officersTZFour = [x[0] for x in officersTZFour]

#lists
M = ["chkPoint1","chkPoint2","chkPoint3","chkPoint4","chkPoint5"]
D = ["Mon","Teu","Wed","Thur","Fri","Sat","Sun"]

#parameters
Hm = 3

#constants
S = 5;

#Create new models for each timezones
modelOne=Model("time_zone_one")
modelTwo=Model("time_zone_two")
modelThree=Model("time_zone_three")
modelFour=Model("time_zone_four")

#Model implenatation for recommended officers in time zone one
#Define Decision Variable
zone=modelOne.addVars(officersTZOne,M,D, vtype=GRB.BINARY, name="zone")

#Define Other Variables
N=len(officersTZOne)
possibilities =range(N*3)
possibilities

#Objective Function
modelOne.setObjective(
quicksum([zone[n,m,d] for n in officersTZOne for m in M for d in D]), sense=GRB.MINIMIZE)

#Add Constraints
modelOne.addConstrs((quicksum([zone[(n,m,d)] for m in M for d in D])<=S for n in officersTZOne), name="maximum_shifts_per_officer");
modelOne.addConstrs((quicksum([zone[(n,m,d)] for n in officersTZOne])>=Hm for m in M for d in D), name="minimum_officers_for_each_checkpoin");
modelOne.addConstrs((quicksum([zone[(n,m,d)] for n in officersTZOne for m in M for d in D])==(N*S) for p in possibilities), name="all_officers_in_all_checkpoints");
#In one particulat day a police officer can be allocated only in one or no checkpoint. otherwise one police officer might get scheduled in more tha 1 checkpoint in a particular day which is not possible.
modelOne.addConstrs((quicksum([zone[(n,m,d)] for m in M])<=1 for n in officersTZOne for d in D),name="One officer at one checkpoint at any given day");

modelOne.optimize()
modelOne.printAttr('X')


#Model implenatation for recommended officers in time zone two
#Define Decision Variable
ztwo=modelTwo.addVars(officersTZTwo,M,D, vtype=GRB.BINARY, name="ztwo")

#Define Other Variables
N=len(officersTZTwo)
possibilities =range(N*3)

#Objective Function
modelTwo.setObjective(
quicksum([ztwo[n,m,d] for n in officersTZTwo for m in M for d in D]), sense=GRB.MINIMIZE)

#Add Constraints
modelTwo.addConstrs((quicksum([ztwo[(n,m,d)] for m in M for d in D])<=S for n in officersTZTwo), name="maximum_shifts_per_officer");
modelTwo.addConstrs((quicksum([ztwo[(n,m,d)] for n in officersTZTwo])>=3 for m in M for d in D), name="minimum_officers_for_each_checkpoin");
modelTwo.addConstrs((quicksum([ztwo[(n,m,d)] for n in officersTZTwo for m in M for d in D])==(N*S) for p in possibilities), name="all_officers_in_all_checkpoints");
modelTwo.addConstrs((quicksum([ztwo[(n,m,d)] for m in M])<=1 for n in officersTZTwo for d in D),name="One officer at one checkpoint at any given day")

modelTwo.optimize()
modelTwo.printAttr('X')

#Model implenatation for recommended officers in time zone three
#Define Decision Variable
zthree=modelThree.addVars(officersTZThree,M,D, vtype=GRB.BINARY, name="zthree")

#Define Other Variables
N=len(officersTZThree)
possibilities =range(N*3)

#Objective Function
modelThree.setObjective(
quicksum([zthree[n,m,d] for n in officersTZThree for m in M for d in D]), sense=GRB.MINIMIZE)

#Add Constraints
modelThree.addConstrs((quicksum([zthree[(n,m,d)] for m in M for d in D])<=S for n in officersTZThree), name="maximum_shifts_per_officer");
modelThree.addConstrs((quicksum([zthree[(n,m,d)] for n in officersTZThree])>=3 for m in M for d in D), name="minimum_officers_for_each_checkpoin");
modelThree.addConstrs((quicksum([zthree[(n,m,d)] for n in officersTZThree for m in M for d in D])==(N*S) for p in possibilities), name="all_officers_in_all_checkpoints");
modelThree.addConstrs((quicksum([zthree[(n,m,d)] for m in M])<=1 for n in officersTZThree for d in D),name="One officer at one checkpoint at any given day")

modelThree.optimize()
modelThree.printAttr('X')

#Model implenatation for recommended officers in time zone four
#Define Decision Variable
zfour=modelFour.addVars(officersTZFour,M,D, vtype=GRB.BINARY, name="zfour")

#Define Other Variables
N=len(officersTZFour)
possibilities =range(N*3)

#Objective Function
modelFour.setObjective(quicksum([zfour[n,m,d] for n in officersTZFour for m in M for d in D]), sense=GRB.MINIMIZE)

#Add Constraints
modelFour.addConstrs((quicksum([zfour[(n,m,d)] for m in M for d in D])<=S for n in officersTZFour), name="maximum_shifts_per_officer");
modelFour.addConstrs((quicksum([zfour[(n,m,d)] for n in officersTZFour])>=3 for m in M for d in D), name="minimum_officers_for_each_checkpoin");
modelFour.addConstrs((quicksum([zfour[(n,m,d)] for n in officersTZFour for m in M for d in D])==(N*S) for p in possibilities), name="all_officers_in_all_checkpoints");
modelFour.addConstrs((quicksum([zfour[(n,m,d)] for m in M])<=1 for n in officersTZFour for d in D),name="One officer at one checkpoint at any given day")

modelFour.optimize()
modelFour.printAttr('X')

#json file generation

#timezone one
offOne=[]
checkOne=[]
dayOne=[]
for n in officersTZOne:
    for m in M:
        for d in D:
            if zone[n,m,d].X>0:
                offOne.append(format(n))
                checkOne.append(format(m))
                dayOne.append(format(d))
dataone={'officers':offOne,'checkpoints':checkOne,'days':dayOne}
MOne=pd.DataFrame.from_dict(dataone)
MOne.to_json(r'../json_data/schedule_officers/officerOne.json')

#timezone two
offTwo=[]
checkTwo=[]
dayTwo=[]
for n in officersTZTwo:
    for m in M:
        for d in D:
            if ztwo[n,m,d].X>0:
                offTwo.append(format(n))
                checkTwo.append(format(m))
                dayTwo.append(format(d))
datatwo={'officers':offTwo,'checkpoints':checkTwo,'days':dayTwo}
MTwo=pd.DataFrame.from_dict(datatwo)
MTwo.to_json(r'../json_data/schedule_officers/officerTwo.json')

#timezone three
offThree=[]
checkThree=[]
dayThree=[]
for n in officersTZThree:
    for m in M:
        for d in D:
            if zthree[n,m,d].X>0:
                offThree.append(format(n))
                checkThree.append(format(m))
                dayThree.append(format(d))
datathree={'officers':offThree,'checkpoints':checkThree,'days':dayThree}
MThree=pd.DataFrame.from_dict(datathree)
MThree.to_json(r'../json_data/schedule_officers/officerThree.json')

#timezone four
offFour=[]
checkFour=[]
dayFour=[]
for n in officersTZFour:
    for m in M:
        for d in D:
            if zfour[n,m,d].X>0:
                offFour.append(format(n))
                checkFour.append(format(m))
                dayFour.append(format(d))
datafour={'officers':offFour,'checkpoints':checkFour,'days':dayFour}
MFour=pd.DataFrame.from_dict(datafour)
MFour.to_json(r'../json_data/schedule_officers/officerFour.json')
