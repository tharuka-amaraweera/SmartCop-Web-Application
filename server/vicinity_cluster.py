# Required Libraries
import pandas as pd
#import matplotlib.pyplot as plt
from sklearn.cluster import KMeans
from sklearn.decomposition import PCA
from sklearn.preprocessing import StandardScaler
#%config InlineBackend.figure_format='retina'
#normalize labels because there are both numerical and categorical features. Use LabelEncorder
from sklearn.preprocessing import LabelEncoder
import numpy as np

#Read dataset
accident_df_for_ap = pd.read_csv('./dataset/acc_data_for_area_prediction.csv')
accident_df_for_ap.head()

#randomly select 100 records
smple_df_for_ap = accident_df_for_ap.loc[np.random.choice(accident_df_for_ap.index, size=100)]
#Count number of records
num_of_records=len(smple_df_for_ap)
print(num_of_records)

#label encoding
lbl_enc = LabelEncoder()
tf_acc_data = smple_df_for_ap.copy()
for i in smple_df_for_ap.columns:
    tf_acc_data[i]=lbl_enc.fit_transform(smple_df_for_ap[i])

# Standardize the data to have a mean of ~0 and a variance of 1
X_std = StandardScaler().fit_transform(tf_acc_data)

# Create a PCA instance: pca
pca = PCA(n_components=23)
principalComponents = pca.fit_transform(X_std)

# Save components to a DataFrame
PCA_components = pd.DataFrame(principalComponents)

kms = range(1, 10)
inertias = []
for k in kms:
    # k clusters: model
    model = KMeans(n_clusters=k)

    # Fit model to samples
    pca = model.fit(PCA_components.iloc[:, :3])

    # Append the inertia to inertias lists
    inertias.append(model.inertia_)

#state number of clusters
k_means = KMeans(n_clusters=4)
#Run the clustering algorithm
model = k_means.fit(PCA_components.iloc[:,:3])
model
#Generate cluster predictions
y_pred = k_means.predict(PCA_components.iloc[:,:3])

from sklearn import metrics
labels = k_means.labels_
metrics.calinski_harabasz_score(PCA_components.iloc[:,:3], labels)

from collections import Counter
print(Counter(labels))

#save counts in array
import json

df_areas = Counter(labels)
a1_count = df_areas[0]
a2_count = df_areas[1]
a3_count = df_areas[2]
a4_count = df_areas[3]

area_data = [['area1', a1_count], ['area2', a2_count], ['area3', a3_count], ['area4', a4_count]]

# Create the pandas DataFrame
area_count_df = pd.DataFrame(area_data, columns=['Area', 'Count'])

#convert dataframe to json
area_count_df.to_json (r'./json_data/area_count_json_100.json',orient='columns')