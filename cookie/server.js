const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

app.use(session({
    secret: 'your-secret-key',
    resave: false,            
  saveUninitialized: false
}))

app.get("/", (req, res) => {
    if(req.session.page_views){
        req.session.page_views++;
    } else {
        req.session.page_views = 1;
    }
    console.log(req.session);       
    res.send(`You have visited this page ${req.session.page_views} times.`);
});

app.listen(8080 , ()=>{
    console.log(`Server is running on PORT ${8080}`);
})