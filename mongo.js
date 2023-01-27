const {MongoClient} = require('mongodb')

const DB_NAME = 'users'
const MONGO_URL = 'mongodb://127.0.0.1:27017?maxPoolSize=20&w=majority'

class Mongo{
    constructor(){
        this.client = new MongoClient(MONGO_URL)
        this.db = null
    }
    async connect(){
        await this.client.connect()
        console.log('SE REALIZO UNA CONEXION A LA BD')
        this.db=this.client.db(DB_NAME)
    }
    disconnect(){
        this.client.close()
    }
    async getAll(collection, query){
        console.log('Recibio una peticion getAll a '+collection)
        let findResult
        if (!this.db){
            await this.connect()
        }
        findResult = await this.db.collection(collection).find(query).toArray()
        return findResult
    }
    getOne(collection, query){

    }
    insert(collection, document){

    }
    update(collection, oldDocument, newDocument){

    }
}

module.exports = Mongo