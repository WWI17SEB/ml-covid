import math
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

from sklearn import preprocessing
from sklearn.preprocessing import normalize
from sklearn.preprocessing import PolynomialFeatures
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression
from sklearn import metrics

def regression(X, y, regressor, test_size=0.2, random_state=None):
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=test_size, random_state=random_state)
    regressor.fit(X_train, y_train)
    y_pred = regressor.predict(X_test)
    y_train_pred = regressor.predict(X_train)

    print('Mean Absolute Error:', metrics.mean_absolute_error(y_test, y_pred))
    print('Mean Squared Error:', metrics.mean_squared_error(y_test, y_pred))
    print('Root Mean Squared Error:', np.sqrt(metrics.mean_squared_error(y_test, y_pred)))
    print('R2 Score:', metrics.r2_score(y_test, y_pred))

    f, (ax1, ax2) = plt.subplots(1,2,figsize=(15,5))
    plotDataSortedByActual(ax1, y_train, y_train_pred, "Train Data")
    plotDataSortedByActual(ax2, y_test, y_pred, "Test Data")

    return [regressor, y_test, y_pred]

def plotDataSortedByActual(ax, actual, prediction, title, ylim_min=None, ylim_max=None):
    compare = []
    for i in range(len(prediction)):
        compare.append({ "actual": actual[actual.index[i]], "predicted": prediction[i]})
    def get_actual(obj):
        return obj["actual"]
    compare = sorted(compare, key=get_actual)
    ax.plot([x for x in range(len(compare))], [t["actual"] for t in compare], '-o')
    ax.plot([x for x in range(len(compare))], [t["predicted"] for t in compare], '-x')
    if (ylim_min != None and ylim_max != None): ax.set_ylim(ylim_min, ylim_max)
    ax.set_title(title)
