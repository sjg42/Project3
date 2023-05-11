from flask import Flask, render_template
#from flask_pymongo import PyMongo
#from bson.json_util import dumps
#import ast
import json
import pandas as pd
from pymongo import MongoClient


app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

# app.config['MONGO_DB_NAME'] = 'project3'
# app.config['MONGO_URI'] = 'mongodb+srv://cl_admin:password1234@cluster0.iacql6n.mongodb.net/TProject3?retryWrites=true&w=majority'
# mongo = PyMongo(app)

@app.route('/getrest',methods=["GET"])
def getrest():
    import request
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
    parg1 = request.args.get('diabetes')
    parg2=request.args.get('stroke')
    query = {}
    if not parg1 == None :
        query["Diabetes_binary"]= int(parg1)
    if not parg2 == None:
        query["Stroke"] = int(parg2)
    print(query)
    mycol = mongo.project3.test_project3
    objects = mycol.find(query)
    return json.dumps(objects)

if __name__ == "__main__":
    app.run(port=4000, debug=True)
