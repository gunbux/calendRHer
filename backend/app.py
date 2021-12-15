from flask import Flask,jsonify,request
from pymongo import cursor
from db import db
import pymongo
from UserAPI import user
from EventsAPI import event

app = Flask(__name__)
app.register_blueprint(user, url_prefix="/user")
app.register_blueprint(event, url_prefix="/event")


# # add user to event collection AND add event to user collection in one function (join event function)
@app.route('/join/', methods = ['POST', 'GET'])
def join_event():
    userIDInput = request.args.get('userID')
    eventIDInput = request.args.get('eventID')

    x = list(db.EventList.find({ "eventID" : eventIDInput })) #change cursor to dict
    for x in x:
        x=x.get("userID")                                     #get list of userID from dict
    y = list(db.UserList.find({ "userID" : userIDInput }))
    for y in y:
        y=y.get("eventID")

    if eventIDInput not in y and userIDInput not in x:        #prevent repeated values in both userlist and eventlist
        db.EventList.update_one({'eventID': eventIDInput}, {'$push': {'userID': userIDInput}})
        db.UserList.update_one({'userID': userIDInput}, {'$push': {'eventID': eventIDInput}})
        return 'JOIN_EVENT_SUCCESS' 
    else:
        return 'JOIN_EVENT_ERROR' 

if __name__ == "__main__":
    app.run(debug=True)
