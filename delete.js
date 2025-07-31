const dbConnect = require('./mongo');

const deleteData = async () => {
    const db = await dbConnect(); // Get the database connection
    const result = await db.deleteOne({ name: 'iPhone 16' }); // Delete a document from the collection
    console.log(result); // Log the result of the deletion

    // if (result.deletedCount > 0) {
    //     console.log('Document deleted successfully');
    // } else {
    //     console.log('No document found with the specified criteria');   
    // }

    // -------or-------

    if(result.acknowledged) {
        console.log('Document deleted successfully');
    } else {
        console.log('No document found with the specified criteria');
    }   
}   
deleteData(); // Call the function to execute the deletion