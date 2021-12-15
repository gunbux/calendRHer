from flask import Flask,request,Blueprint,jsonify
from db import db

event = Blueprint('event',__name__,url_prefix='/event')

#create new event
@event.route('/create/', methods = ['POST','GET'])
def createNewEvent():
    startDate = request.args.get("startDate",None)
    endDate = request.args.get("endDate",None)
    eventName = request.args.get("eventName",None)
    eventID = request.args.get("eventID",None)
    eventLocation = request.args.get("eventLocation",None)
    if not db.EventList.find_one({"eventName": eventName}):
        db.EventList.insert_one({"eventName": eventName, "startDate": startDate, "endDate":endDate, "eventID":eventID, "eventLocation":eventLocation,"userID":[]})
        return 'CREATE_EVENT_SUCCESS'
    else:
        return 'CREATE_EVENT_ERROR'

#update current event
@event.route('/update/', methods = ['POST','GET'])
def updateEvent():
    startDate = request.args.get("startDate",None)
    endDate = request.args.get("endDate",None)
    eventName = request.args.get("eventName",None)
    eventLocation = request.args.get("eventLocation",None)
    eventID = request.args.get("eventID")
    if db.EventList.find_one({"eventID": eventID}):
        db.EventList.update_one({"eventID":eventID},{"$set":{"eventName":eventName, "startDate":startDate, "endDate":endDate, "eventLocation":eventLocation}})
        return 'UPDATE_EVENT_SUCCESS'      #only works if every detail is provided
    else:
        return 'UPDATE_EVENT_ERROR' 

@event.route('/delete/', methods = ['DELETE','GET'])
def deleteEvent():
    eventID = request.args.get("eventID")
    returnResult = db.EventList.delete_one({"eventID":eventID})
    return f"number of events deleted: {str(returnResult.deleted_count)}"

