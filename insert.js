//const dbConnect = require('./mongo'); // Import the database connection function


const insertData = async () =>{
    const db = await dbConnect(); // Get the database connection
    // const result =  db.insertOne(
    //     {
    //         name: 'iPhone 14', brand: 'Apple', price: 999
    //     }
    // ); // Insert a document into the collection

    const result = await db.insertMany(
      [
        {  name: 'iPhone 14', brand: 'Apple', price: 999, },
        {  name: 'iPhone 15', brand: 'Apple', price: 1099, },
        {  name: 'iPhone 16', brand: 'Apple', price: 1199, }
      ]  
    ); 
    console.log(result); // Log the result of the insertion
}
  insertData()