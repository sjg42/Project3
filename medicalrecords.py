from flask import Flask, jsonify, request, make_response
from flask_pymongo import PyMongo
from bson.json_util import dumps
import ast
import json

app = Flask(__name__)

app.config['MONGO_DB_NAME'] = 'TProject3'
app.config['MONGO_URI'] = 'mongodb+srv://cl_admin:password1234@cluster0.iacql6n.mongodb.net/TProject3?retryWrites=true&w=majority'
mongo = PyMongo(app)

@app.route('/getrest',methods=["GET"])
def getrest():

    parg1=request.args.get('diabetes')
    parg2=request.args.get('stroke')
    query = {}
    if not parg1 == None :
        query["Diabetes_012"]= int(parg1)
    if not parg2 == None:
        query["Stroke"] = int(parg2)
    print(query)
    mycol = mongo.db.MedicalRecords
    objects = mycol.find(query)
    return dumps(objects)

if __name__ == "__main__":
    app.run(port=4000, debug=True)
