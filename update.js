const dbConnect = require('./mongo');

const updateData = async () => {
    let data = await dbConnect();
   // console.warn(data);
   let result = data.updateOne(
        { name: 'iPhone 14' }, // Filter to find the document to update
        { $set: { price: 900000 } } // Update operation to set a new price
    );
    console.warn(result); // Log the result of the update operation

    // To verify the update, we can fetch the updated document
    let updatedData = await data.find({ name: 'iPhone 14' }).toArray();
    console.log(updatedData); // Log the updated document(s

}

updateData();