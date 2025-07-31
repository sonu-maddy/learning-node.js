// access my packege file in separete html file
const express = require('express'); 
const path = require('path');
const app = express();  
const port = 3000;
// use express static method to serve static files
const publicPath = path.join(__dirname, 'public');

// 1st way to serve static files
// app.use(express.static(publicPath));

// 2nd way to serve static files
app.get(' ', (req, res) => {
    //this is all way type to send file

     //res.sendFile('home.html', { root: publicPath });
    // res.sendFile(`${publicPath}/home.html`));
   // res.sendFile(path.join(publicPath, 'home.html'));
    res.sendFile(path.join(__dirname, 'public', 'home.html'));
});
app.get('/about', (_, res) => {   
     res.sendFile(`${publicPath}/about.html`)
});

app.listen(port);
console.log(`Server is running on http://localhost:${port}`);