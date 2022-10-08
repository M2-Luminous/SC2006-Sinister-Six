import warnings
warnings.filterwarnings('ignore')

##################################################importing the libraries####################################################

#python -m pip install -U pip
import numpy as np # pip install numpy
import pandas as pd # pip install pandas
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

######################################################importing data#########################################################

houses = pd.read_csv('C:\\Users\\M2-Winterfell\\Documents\\Code\\predict\\py\\resaleFlat.csv', on_bad_lines='skip')

houses_lr = houses[['month', 'town', 'flat_type','block', 'street_name','storey_range',
                  'floor_area_sqm', 'flat_model', 'lease_commence_date', 'resale_price', 'remaining_lease']]
houses_lr.head()

sns.pairplot(houses_lr)
plt.show()

# Defining the map function
def dummies(x,df):
    temp = pd.get_dummies(df[x], drop_first = True)
    df = pd.concat([df, temp], axis = 1)
    df.drop([x], axis = 1, inplace = True)
    return df
# Applying the function to the houses_lr

houses_lr = dummies('month'         ,houses_lr)
houses_lr = dummies('town'          ,houses_lr)
houses_lr = dummies('flat_type'     ,houses_lr)
houses_lr = dummies('block'         ,houses_lr)
houses_lr = dummies('street_name'   ,houses_lr)
houses_lr = dummies('flat_model'    ,houses_lr)

houses_lr.head()

#############################################Train-Test Split and feature scaling##########################################

np.random.seed(0)
df_train, df_test = train_test_split(houses_lr, train_size = 0.7, test_size = 0.3, random_state = 100)

scaler = MinMaxScaler()
num_vars = ['month', 'town', 'flat_type', 'block', 'street_name','storey_range','floor_area_sqm','flat_model',
            'lease_commence_date', 'resale_price']
df_train[num_vars] = scaler.fit_transform(df_train[num_vars])
df_train.head()
df_train.describe()

##################################################model building##########################################################

y_train = df_train.pop('resale_price')
X_train = df_train

lm = LinearRegression()
lm.fit(X_train,y_train)
rfe = RFE(lm, 10)
rfe = rfe.fit(X_train, y_train)

list(zip(X_train.columns,rfe.support_,rfe.ranking_))

X_train.columns[rfe.support_]

X_train_rfe = X_train[X_train.columns[rfe.support_]]
X_train_rfe.head()

def build_model(X,y):
    X = sm.add_constant(X) #Adding the constant
    lm = sm.OLS(y,X).fit() # fitting the model
    print(lm.summary()) # model summary
    return X
    
def checkVIF(X):
    vif = pd.DataFrame()
    vif['Features'] = X.columns
    vif['VIF'] = [variance_inflation_factor(X.values, i) for i in range(X.shape[1])]
    vif['VIF'] = round(vif['VIF'], 2)
    vif = vif.sort_values(by = "VIF", ascending = False)
    return(vif)

#################################Building model using statsmodel, for the detailed statistics########################################

#initializing model 1
X_train_new = build_model(X_train_rfe,y_train)
#end of model 1
X_train_new = X_train_rfe.drop(["twelve"], axis = 1)

#initializing model 2
X_train_new = build_model(X_train_new,y_train)
#Calculating the Variance Inflation Factor
checkVIF(X_train_new)
#end of model 2
X_train_new = X_train_new.drop(["curbweight"], axis = 1)

##################################################prediction and evaluation##########################################################

#Scaling the test set
num_vars = ['month', 'town', 'flat_type', 'block', 'street_name','storey_range','floor_area_sqm','flat_model',
            'lease_commence_date', 'resale_price']
df_test[num_vars] = scaler.fit_transform(df_test[num_vars])

#Dividing into X and y
y_test = df_test.pop('price')
X_test = df_test

# Now let's use our model to make predictions.
X_train_new = X_train_new.drop('const',axis=1)
# Creating X_test_new dataframe by dropping variables from X_test
X_test_new = X_test[X_train_new.columns]

# Adding a constant variable 
X_test_new = sm.add_constant(X_test_new)

# Making predictions
y_pred = lm.predict(X_test_new)

r2_score(y_test, y_pred)

print(lm.summary())