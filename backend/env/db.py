import pymongo

DB_USERNAME = "Shawnleong"
DB_PWD = "v2-z7%2FM0.odb"

URL = "mongodb+srv://{}:{}@rhdevs-be-mongo.dv2ho.mongodb.net/admin".format(DB_USERNAME,DB_PWD)

client = pymongo.MongoClient(URL)
db = client["calendRHer"]