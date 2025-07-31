module.exports =  reqFilter = (req, resp, next) => {
   // console.log('reqFilter');
   if (!req.query.age) {
        resp.send('Please provide age');
    } else if (req.query.age < 18) {
        resp.send('You are not allowed to access this page');   
    } else {
        next(); // proceed to the next middleware or route handler
    }    
}