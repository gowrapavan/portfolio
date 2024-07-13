const { MongoClient } = require('mongodb');

// Connection URI
const uri = 'mongodb+srv://gowrapavankumar2004:doLWwg4ElKEXR6Np@gowra.9flea75.mongodb.net/?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri);

async function connectToMongoDB() {
    try {
        // Connect the client to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');

        // Specify the database and collection
        const database = client.db('mydatabase');
        const collection = database.collection('myCollection');

        // Example: Querying documents
        const queryResult = await collection.findOne({ name: 'John Doe' });
        console.log('Found document:', queryResult);
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    } finally {
        // Close the connection when finished
        await client.close();
        console.log('Disconnected from MongoDB');
    }
}
// Connect to MongoDB
connectToMongoDB();
