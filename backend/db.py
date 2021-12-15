import pymongo

DB_USERNAME = "chunyu"
DB_PWD = "ilov3RH"

URL = "mongodb+srv://{}:{}@rhdevs-be-mongo.dv2ho.mongodb.net/admin".format(DB_USERNAME,DB_PWD)

client = pymongo.MongoClient(URL)
db = client["calendher"]
