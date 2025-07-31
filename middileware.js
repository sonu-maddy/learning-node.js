const express = require('express');
const app = express();
const port = 3000;
const router = express.Router();

// const reqFilter = (req, resp, next) => {
//    // console.log('reqFilter');
//    if (!req.query.age) {
//         resp.send('Please provide age');
//     } else if (req.query.age < 18) {
//         resp.send('You are not allowed to access this page');   
//     } else {
//         next(); // proceed to the next middleware or route handler
//     }    
// }

//.........................................................
// this all code is moved to middleware.js file for the practice purpose of separate middleware file
// i want to use middleware for in a seperate file.. so i will create a middleware.js file and export the function
const reqFilter = require('./middileware2');




// aapllication level middleware
// app.use(reqFilter);

app.get('/', (req, res) => {
    res.send('Hello, Welcome to Home Page!!!!');
});

app.get('/user', (req, res) => {
    res.send('Hello, Welcome to user Page!!!!');   
});

// route level middleware - SINGLE route
app.get('/about', reqFilter, (req, res) => {
    res.send('Hello, Welcome to about Page!!!!');   
});


// route level middleware - MULTIPLE routes

router.use(reqFilter); // apply middleware to all routes defined in this router
// now all routes defined in this router will use the reqFilter middleware  

router.get('/product', (req, res) => {
    res.send('Hello, Welcome to product Page!!!!'); 
});
router.get('/contact', (req, res) => {
    res.send('Hello, Welcome to contact Page!!!!'); 
});

router.get('/help', (req, res) => {
    res.send('Hello, Welcome to help Page!!!!');    
});

app.use('/', router); // use the router for all routes starting with '/'    


app.listen(port);
console.log(`Server is running on http://localhost:${port}`);