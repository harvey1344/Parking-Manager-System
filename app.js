//const wp = require("./wp.js");
const express = require('express');
const app = express();
const create= require('./API/Routes/create-car-park.js');
const admin = require('./API/Routes/verfiy/admin.js');
const register = require('./API/Routes/verfiy/register.js');
const login = require('./API/Routes/verfiy/login.js');

app.use(express.static('testproject'));

const userDetails = []
const carParkDetails = []
const bodyParser = require('body-parser');
const fs = require("fs");
const jsonParser = bodyParser.json();



app.get('/', function(req, res) {
    res.sendFile('FrontEnd/Register.html', { root: __dirname })
});

app.get('/Login.html', function(req, res) {
    res.sendFile('FrontEnd/Login.html', { root: __dirname })
});

app.get('/adminLogin.html', function(req, res) {
    res.sendFile('FrontEnd/adminLogin.html', { root: __dirname })
});

app.get('/Register.html', function(req, res) {
    res.sendFile('FrontEnd/Register.html', { root: __dirname })
});

app.get('/style.css', function(req, res) {
    res.sendFile('FrontEnd/style.css', { root: __dirname })
});

app.get('/wp.js', function(req, res) {
    res.sendFile('FrontEnd/JavaScript/wp.js', { root: __dirname })

});


app.get('/dashboard.html', function(req, res) {
    res.sendFile('FrontEnd/dashboard.html', { root: __dirname })
});

app.get('/adminDashboard.html', function(req, res) {
    res.sendFile('FrontEnd/adminDashboard.html', { root: __dirname })
});

app.get('/addCarPark.html', function(req, res) {
   res.sendFile('FrontEnd/addCarPark.html', { root: __dirname })
});


// if the client side has made a post request with the path of /loginSend, run this
app.use('/loginSend', login);
// if the client side has made a post request with the path of /formSend, run this
app.use('/formSend', register);
// if the client side has made a post request with the path of /loginSend, run this
app.use('/adminSend', admin);

app.use('/adminDashboard/addCarPark', create);

app.listen(5000, () => console.log('Express app listening on port 5000...'));



