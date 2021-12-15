import pymongo
from db import db



# generate eventID in back or frontend?
# exp 1 # GET /{id} to retrieve the name and all scores of a profile
# receive list of/individual userID and specific eventID
# update participant list of event in mongodb
# update individual event list in mongodb 

# # add user to event collection and add event to user collection in one function (join event function)



# x=list(db.UserList.find({"userID":'A7654321B'}))[0]
# print("A7654321B" in x)
# print(type(x))
if db.EventList.find_one({"eventName": "haha"}):
    print(1)
else:
    print(0)
