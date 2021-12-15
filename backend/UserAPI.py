from flask import Flask,request,Blueprint,jsonify
from db import db

user = Blueprint('user',__name__,url_prefix='/user')

#query all events participated by the user
@user.route('/query/', methods=['GET'])
def getAllEvents():
    userID = request.args["userID"]
    x = db.UserList.find({"userID":userID})
    x = list(x)
    eventsIDList = x[0].get("eventID") 
    eventsNameList = [] 
    for theEvent in eventsIDList:
        y = db.EventList.aggregate( [ 
            { "$match": { "eventID": theEvent } },
            { "$project" : {  "eventName" : 1 , "startDate" : 1, "endDate" : 1, "eventID":1, "eventLocation" : 1, "_id" : 0 } }
             ] )
        y = list(y)
        for a in y:
            eventsNameList.append(a)
    eventsNameList = str(eventsNameList)
    return eventsNameList         