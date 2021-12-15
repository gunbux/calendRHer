from flask import Flask,request,Blueprint,jsonify
from db import db

user = Blueprint('user',__name__,url_prefix='/user')

#query all events participated by the user
@user.route('/query/', methods=['GET'])
def getAllEvents():
    userID = request.args["userID"]
    x = db.UserList.find({"userID":userID})
    x = list(x)
    eventsIDList = x[0].get("eventID")  # only works if there is only 1 object in x
    eventsNameList = [] 
    for theEvent in eventsIDList:
        y = db.EventList.aggregate( [ 
            { "$match": { "eventID": theEvent } },
            { "$project" : {  "eventName" : 1 , "_id" : 0 } }
             ] )
        y = list(y)
        for theElement in y:
            eventsNameList.append(y[0].get("eventName"))
    return str(eventsNameList)                          #returns list of all event names participated by user







    

