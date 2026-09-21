const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');

app.use(cookieParser()); // Optional if not using signed cookies directly

app.use(session({
    secret: 'your-secret-key',
    resave: false,            
    saveUninitialized: false
}));

// Add this line right after session:
app.use(flash());

app.get("/", (req, res) => {
    if (req.session.page_views) {
        req.session.page_views++;
    } else {
        req.session.page_views = 1;
    }
    console.log(req.session);       
    res.send(`You have visited this page ${req.session.page_views} times.`);
});

app.get("/register", (req, res) => {
    let { name = "anonymous" } = req.query;
    req.session.name = name;
    if (req.session.name === "anonymous") {
        req.flash("error", "Name cannot be anonymous!");
    } else {
        req.flash("success", "Name registered successfully!");
    }
    res.redirect("/hello");
});

// Route to display the flash messages
app.get("/hello", (req, res) => {
    const errorMsg = req.flash("error");
    const successMsg = req.flash("success");
    res.send({
        name: req.session.name,
        error: errorMsg,
        success: successMsg
    });
});

app.listen(8080, () => {
    console.log(`Server is running on PORT 8080`);
});