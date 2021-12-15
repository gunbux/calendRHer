from flask import Flask,request,Blueprint,jsonify
from db import db

event = Blueprint('event',__name__,url_prefix='/event')

#create new event
@event.route('/create/', methods = ['POST','GET'])
def createNewEvent():
    startDate = request.args.get("startDate",None)
    endDate = request.args.get("endDate",None)
    eventName = request.args.get("eventName",None)
    eventID = request.args.get("eventID",None,int)
    eventLocation = request.args.get("eventLocation",None)
    if not db.EventList.find_one({"eventName": eventName}):
        db.EventList.insert_one({"eventName": eventName, "startDate": startDate, "endDate":endDate, "eventID":eventID, "eventLocation":eventLocation,"userID":[]})
        return "event created"
    else:
        return "event already exists"

#update current event
@event.route('/update/', methods = ['POST','GET'])
def updateEvent():
    startDate = request.args.get("startDate",None)
    endDate = request.args.get("endDate",None)
    eventName = request.args.get("eventName",None)
    eventLocation = request.args.get("eventLocation",None)
    eventID = request.args.get("eventID")
    if db.EventList.find_one({"eventID": int(eventID)}):
        db.EventList.update_one({"eventID":int(eventID)},{"$set":{"eventName":eventName, "startDate":startDate, "endDate":endDate}})
        return "event details updated"      #only works if every detail is provided
    else:
        return "event does not exist"

@event.route('/delete/', methods = ['DELETE','GET'])
def deleteEvent():
    eventID = request.args.get("eventID")
    returnResult = db.EventList.delete_one({"eventID":int(eventID)})
    return f"number of events deleted: {str(returnResult.deleted_count)}"

