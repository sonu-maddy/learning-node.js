const express = require('express');

require('./configMongoos'); // Ensure MongoDB connection is established

const Product = require('./Product'); // Import the Product model

const app = express();

app.post('/create' , (req, resp) => {
    resp.send("Product Created");
})

app.listen(3000);