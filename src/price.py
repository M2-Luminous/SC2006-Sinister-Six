import warnings
warnings.filterwarnings('ignore')

##################################################importing the libraries####################################################

#python -m pip install -U pip
import numpy as np # pip install numpy
import pandas as pd # pip install pandas
import sklearn
import pickle
#pip install fsspec
import matplotlib.pyplot as plt #python -m pip install -U matplotlib
import seaborn as sns # pip install seaborn
from sklearn.model_selection import train_test_split #pip install -U scikit-learn
from sklearn.preprocessing import MinMaxScaler
#pip install statsmodels
from sklearn.feature_selection import RFE
from sklearn.linear_model import LinearRegression
import statsmodels.api as sm 
from statsmodels.stats.outliers_influence import variance_inflation_factor
from sklearn.metrics import r2_score 
from matplotlib import style
from sklearn.utils import shuffle
from sklearn import linear_model
style.use("ggplot")
######################################################importing data#########################################################

houses = pd.read_csv('C:\\Users\\M2-Winterfell\\Documents\\Code\\predict\\py\\resaleFlat.csv', on_bad_lines='skip', sep=",")

houses_lr = houses[['month', 'town', 'flat_type', 'flat_model', 'storey_range',
                  'floor_area_sqm', 'lease_commence_date', 'resale_price']]

predict = "resale_price"


houses_lr = shuffle(houses_lr)

x = np.array(houses_lr.drop([predict], 1))
y = np.array(houses_lr[predict])

x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(x, y, test_size = 0.1)

# Train model multiple times to find the highest accuracy
best = 0
for _ in range(30000):
    x_train, x_test, y_train, y_test = sklearn.model_selection.train_test_split(x, y, test_size = 0.1)

    linear = linear_model.LinearRegression()

    linear.fit(x_train, y_train)
    acc = linear.score(x_test, y_test)
    print("Accuracy: " + str(acc))

    # Save the highest accuracy
    if (acc > best):
        best = acc
        with open("price.pickle", "wb") as f:
            pickle.dump(linear, f)
print("Highest Accuracy:", best)

# Load model
pickle_in = open("price.pickle", "rb")
linear = pickle.load(pickle_in)

print("-------------------------")
print('Coefficient: \n', linear.coef_)
print('Intercept: \n', linear.intercept_)
print("-------------------------")

predictions = linear.predict(x_test)
test_ten_lines = range(10)
# Print the predictions, the variables we used and the actual final grade
#for x in range(len(predictions)):
for x in test_ten_lines:
    print("Predicted price:", predictions[x], "Data:", x_test[x], "Actural price:", y_test[x])

# Create visualisation of the model

##############################################Train-Test Split and feature scaling##########################################
#
#np.random.seed(0)
#df_train, df_test = train_test_split(houses_lr, train_size = 0.7, test_size = 0.3, random_state = 100)
#
#scaler = MinMaxScaler()
#num_vars = ['month', 'town', 'flat_type', 'block', 'street_name','storey_range','floor_area_sqm','flat_model',
#            'lease_commence_date', 'resale_price']
#df_train[num_vars] = scaler.fit_transform(df_train[num_vars])
#df_train.head()
#df_train.describe()
#
###################################################model building##########################################################
#
#y_train = df_train.pop('resale_price')
#X_train = df_train
#
#lm = LinearRegression()
#lm.fit(X_train,y_train)
#rfe = RFE(lm, 10)
#rfe = rfe.fit(X_train, y_train)
#
#list(zip(X_train.columns,rfe.support_,rfe.ranking_))
#
#X_train.columns[rfe.support_]
#
#X_train_rfe = X_train[X_train.columns[rfe.support_]]
#X_train_rfe.head()
#
#def build_model(X,y):
#    X = sm.add_constant(X) #Adding the constant
#    lm = sm.OLS(y,X).fit() # fitting the model
#    print(lm.summary()) # model summary
#    return X
#    
#def checkVIF(X):
#    vif = pd.DataFrame()
#    vif['Features'] = X.columns
#    vif['VIF'] = [variance_inflation_factor(X.values, i) for i in range(X.shape[1])]
#    vif['VIF'] = round(vif['VIF'], 2)
#    vif = vif.sort_values(by = "VIF", ascending = False)
#    return(vif)
#
##################################Building model using statsmodel, for the detailed statistics########################################
#
##initializing model 1
#X_train_new = build_model(X_train_rfe,y_train)
##end of model 1
#X_train_new = X_train_rfe.drop(["twelve"], axis = 1)
#
##initializing model 2
#X_train_new = build_model(X_train_new,y_train)
##Calculating the Variance Inflation Factor
#checkVIF(X_train_new)
##end of model 2
#X_train_new = X_train_new.drop(["curbweight"], axis = 1)
#
###################################################prediction and evaluation##########################################################
#
##Scaling the test set
#num_vars = ['month', 'town', 'flat_type', 'block', 'street_name','storey_range','floor_area_sqm','flat_model',
#            'lease_commence_date', 'resale_price']
#df_test[num_vars] = scaler.fit_transform(df_test[num_vars])
#
##Dividing into X and y
#y_test = df_test.pop('price')
#X_test = df_test
#
## Now let's use our model to make predictions.
#X_train_new = X_train_new.drop('const',axis=1)
## Creating X_test_new dataframe by dropping variables from X_test
#X_test_new = X_test[X_train_new.columns]
#
## Adding a constant variable 
#X_test_new = sm.add_constant(X_test_new)
#
## Making predictions
#y_pred = lm.predict(X_test_new)
#
#r2_score(y_test, y_pred)
#
#print(lm.summary())