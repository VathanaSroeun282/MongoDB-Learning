import { Collection, MongoClient } from 'mongodb';


//uri
const uri = "mongodb+srv://vathanasroeun:N5HZNDyalbefIihG@cluster0.mpjuipa.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

//database name 
const dbName = "konpapa";

//connect by object
const client = new MongoClient(uri);

//function for fetch data from MongoDB
const firstConnection = async ()=>{
    try{
        console.log("Wait...!");
        //Try to connect 
        await client.connect();

        //access database
        const db = client.db(dbName);

        //collection 'posts' in that database 'konpapa'
        const postsCollection = await db.collection('posts'); 
        const documents = await postsCollection.find({}).toArray();
        console.log("Documents : " + documents);

    }
    catch(err){
        console.error("Error : " + err);
    }
    finally{
        console.log("End Connection!");
        await client.close();
    }
}

await firstConnection();