import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn.ensemble import RandomForestRegressor
from sklearn.metrics import mean_squared_error, r2_score
import numpy as np

data = {
    'chemical_property_1': [0.65, 0.72, 0.80, 0.58, 0.67],  
    'chemical_property_2': [0.85, 0.88, 0.90, 0.80, 0.83],  
    'clinical_trial_data': [500, 800, 450, 600, 700],        
    'previous_trial_success': [0.9, 0.8, 0.85, 0.95, 0.88],  
    'drug_name': ['NeuroZap', 'SynthMed', 'CardioHeal', 'Livozyme', 'Ayurprol'],  
    'success_rate': [95, 82, 89, 76, 92],                     
    'confidence_score': [0.92, 0.88, 0.90, 0.85, 0.93]        
}


df = pd.DataFrame(data)


features = ['chemical_property_1', 'chemical_property_2', 'clinical_trial_data', 'previous_trial_success']

target_success_rate = 'success_rate'
target_confidence_score = 'confidence_score'

X = df[features]
y_success_rate = df[target_success_rate]
y_confidence_score = df[target_confidence_score]


X_train, X_test, y_train_success, y_test_success = train_test_split(X, y_success_rate, test_size=0.2, random_state=42)
X_train, X_test, y_train_confidence, y_test_confidence = train_test_split(X, y_confidence_score, test_size=0.2, random_state=42)
