


import mongoose from "mongoose";



const Connection = async (username, password) => {
    const URL = `mongodb://${username}:${password}@ac-blwrml2-shard-00-00.bhq40ff.mongodb.net:27017,ac-blwrml2-shard-00-01.bhq40ff.mongodb.net:27017,ac-blwrml2-shard-00-02.bhq40ff.mongodb.net:27017/?ssl=true&replicaSet=atlas-v72279-shard-0&authSource=admin&retryWrites=true&w=majority`;
    try{
      await mongoose.connect(URL, { useNewUrlParser: true });
      console.log('Database connected successfully')
    }catch(error){
        console.log('Error while connecting with the database ', error)
    }
}
export default Connection

