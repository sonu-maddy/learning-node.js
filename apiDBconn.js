const express = require('express');
const dbConnect = require('./mongo'); // Import the database connection function
const app = express();
const port = 5000;

app.use(express.json());

// get api 
app.get('/',async (req, res) => {

    let data = await  dbConnect(); // Get the database connection
    data = await data.find().toArray(); // Fetch all documents from the collection
    console.log(data); // Log the retrieved documents
    res.send(data); // Send the retrieved documents as a response
   
   
    // res.send('Hello, Welcome to Home Page!!!!'
    // res.send({name: 'sonu'}));
});


// post api
app.post('/', async (req, res) => {
    let data = await dbConnect(); // Get the database connection
    let result = await data.insertOne(
      //  { name: 'iPhone 10', brand: 'Apple', price: 9989 }
    ); // Insert a document into the collection
    console.log(result); // Log the result of the insertion
    res.send(result); // Send the result as a response
});

app.put('/', async  (req,resp)  => {
   /// console.log(req.body); // Log the request body
    let data = await dbConnect(); // Get the database connection
    let result = data.updateOne(
        { name: 'iPhone 15' }, // Filter to find the document to update
        { $set: { price: 900000 } } // Update the price field of the document
     );
     resp.send({result : "updated"}); 
});


app.delete('/:id', async (req, res) => {
    let data = await dbConnect(); // Get the database connection
    let result = await data.deleteOne({ _id: new require('mongodb').ObjectId(req.params.id) }); // Delete a document by ID
    console.log(result); // Log the result of the deletion
    res.send(result); // Send the result as a response
});

app.listen(port);