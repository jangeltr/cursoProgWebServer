const {MongoClient, ObjectId} = require('mongodb')

const DB_HOST = 'localhost'
const DB_PORT = '27017'
const DB_NAME = 'users'

const MONGO_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`

class Mongo{
    constructor(){
        this.client = new MongoClient(MONGO_URI,{useNewUrlParser : true})
    }
    connect(){
        if (!Mongo.connection){
            Mongo.connection = new Promise((resolve, reject)=>{
                this.client.connect(err => {
                    if (err) {
                        console.log('NO se conecto a la BD')
                        reject(err)
                    }
                    console.log('Se conecto a la BD')
                    resolve(this.client.db())
                })
            })
        }
        return Mongo.connection
    }
    getAll(collection, query){
        console.log('getAll:'+collection)
        return this.connect().then(db=>{
            return db.collection(collection).find(query).toArray()
        })
    }
    getOne(collection, query){

    }
    insert(collection, document){

    }
    update(collection, oldDocument, newDocument){

    }
}

module.exports = Mongo