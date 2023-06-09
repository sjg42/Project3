from flask import Flask, render_template
import pandas as pd
import json
import plotly
import plotly.express as px
import requests
from pymongo import MongoClient


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/chart1')
def chart1():
    # create an instance of MongoClient
    mongo = MongoClient(port=27017)
    # make a reference to the new database named "project3" with the collection named test_project3
    db = mongo.project3
    collection = db.test_project3
    results = pd.DataFrame(collection.find({}))
    df = results[[ "Diabetes_binary",
        "HighBP",
        "HighChol",
        "Smoker",
        "Stroke",
        "HeartDiseaseorAttack",
    ]]
    df1 = df.sum().reset_index(name='Sum')
    df1.index = ['Diabetes_binary','High BP', 'High Cholestrol', 'Smoker', 'Stroke', 'Heart Disease']
#    df = pd.DataFrame({
#        "Disease": ["Stroke", "Cholestrol", "High BP", "Smokers", "Stroke", "Cholestrol","High BP","Smokers"],
#        "FieldVal": [1, 1, 1, 1, 1, 1,0,0],
#    })

#   fig = px.bar(df, x=count, y=["HighBP", "HighChol", "Smoker"], title="Diabetes")
#   fig = px.scatter(df, x=df.HighBP, y=df.Smoker, color=df.Stroke, size=df.HighChol)

    fig = px.pie(data_frame=df1,values=df1.Sum, labels=df1.index,names=df1.index)
    graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)
    header="Patients With Diabetes"
    description = """
    A academic study of the number of people with Secondary illness with diabetes
    """
    return render_template('GraphTemplate.html', graphJSON=graphJSON, header=header,description=description)

@app.route('/chart2')
def chart2():
    # create an instance of MongoClient
    mongo = MongoClient(port=27017)
    # make a reference to the new database named "project3" with the collection named test_project3
    db = mongo.project3
    collection = db.test_project3
    results = pd.DataFrame(collection.find({}))
    df = results[[ "Diabetes_binary",
        "HighBP",
        "HighChol",
        "Smoker",
        "Stroke",
        "HeartDiseaseorAttack",
    ]]
    df2 = df.query("Diabetes_binary == 1")
    df3 = df.query("HighBP == 1")
    df4 = df.query("Smoker == 1")
    df5 = df.query("HighChol==1")
    df6 = df.query("HeartDiseaseorAttack==1")
    df7 = df.query("Stroke == 1")
    df2 = df2.count()[0]
    df3 = df3.count()[0]
    df4 = df4.count()[0]
    df5 = df5.count()[0]
    df6 = df6.count()[0]
    df7 = df7.count()[0]
    index_labels = ['Diabetes', 'High BP', 'Smoker', 'High Chol', "Heart Disease","Stroke"]
    index_values = [df2, df3, df4, df5, df6, df7]

#    df = pd.DataFrame({
#        "Disease": ["Stroke", "Cholestrol", "High BP", "Smokers", "Stroke", "Cholestrol","High BP","Smokers"],
#        "FieldVal": [1, 1, 1, 1, 1, 1,0,0],
#    })

#   fig = px.bar(df, x=count, y=["HighBP", "HighChol", "Smoker"], title="Diabetes")
#   fig = px.scatter(df, x=df.HighBP, y=df.Smoker, color=df.Stroke, size=df.HighChol)

    fig = px.pie(index_labels, values=index_values, names=index_labels)
    graphJSON = json.dumps(fig, cls=plotly.utils.PlotlyJSONEncoder)
    header="Patients With Stroke"
    description = """
    A academic study of the number of people with Secondary illness with Stroke
    """
    return render_template('GraphTemplate.html', graphJSON=graphJSON, header=header,description=description)

if __name__ == "__main__":
    app.run(port=5000, debug=True)