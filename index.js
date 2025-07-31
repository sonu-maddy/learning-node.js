const express = require('express');
const app = express();

app.get('', (req, res) => {
  res.send('Hello, this is a Home Page!');
});

app.get('/about', (req, res) => {
  res.send('Hello, this is a About us Page!');
});

app.get('/input', (req, res) => {
  res.send(
    '<form action="/submit" method="POST">' +
    '<input type="text" name="name" placeholder="Enter your name">' +   
    '<input type="submit" value="Submit">' +
    '</form>'
  );  
});

app.get('/contact', (req, res) => {
  res.send('Hii everyone, this is a Contact us Page!');    
}); 

app.get('/help', (req, resp) => {
    resp.send(
        [
            {
                "name": "rion lio",
                "email": "sonu213@gmail.com"
            },
            {
                "name": "Jane Doe",
                "email": "dahf@gmail.com"
            }    
        ]
    );    
});




app.listen(5000);
// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000');
// })