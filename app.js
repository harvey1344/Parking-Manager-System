//const wp = require("./wp.js");
const express = require('express');
const app = express();
const create= require('./API/Routes/create-car-park.js');
const admin = require('./API/Routes/verfiy/admin.js');
const register = require('./API/Routes/verfiy/register.js');
const login = require('./API/Routes/verfiy/login.js');
const remove = require('./API/Routes/removePark');

app.use(express.static('testproject'));

const bodyParser = require('body-parser');
const fs = require("fs");
const jsonParser = bodyParser.json();



app.get('/', function(req, res) {
    res.sendFile('FrontEnd/pages/Login.html', { root: __dirname })
});

app.get('/Register.html', function(req, res) {
    res.sendFile('FrontEnd/pages/Register.html', { root: __dirname })
});

app.get('/adminLogin.html', function(req, res) {
    res.sendFile('FrontEnd/pages/adminLogin.html', { root: __dirname })
});

app.get('/style.css', function(req, res) {
    res.sendFile('FrontEnd/styles/style.css', { root: __dirname })
});
app.get('/dashStyle.css', function(req, res) {
    res.sendFile('FrontEnd/styles/dashStyle.css', { root: __dirname })
});
app.get('/adminDashStyle.css', function(req, res) {
    res.sendFile('FrontEnd/styles/adminDashStyle.css', { root: __dirname })
});

app.get('/wp.js', function(req, res) {
    res.sendFile('FrontEnd/JavaScript/wp.js', { root: __dirname })
});
app.get('/dashboard.js', function(req, res) {
    res.sendFile('FrontEnd/JavaScript/dashboard.js', { root: __dirname })
});

app.get('/dashboard.html', function(req, res) {
    res.sendFile('FrontEnd/pages/dashboard.html', { root: __dirname })
});

app.get('/adminDashboard.html', function(req, res) {
    res.sendFile('FrontEnd/pages/adminDashboard.html', { root: __dirname })
});

app.get('/carParkList.html', function(req, res) {
    res.sendFile('FrontEnd/pages/carParkList.html', { root: __dirname })
});

app.get('/userList.html', function(req, res) {
    res.sendFile('FrontEnd/pages/userList.html', { root: __dirname })
});

app.get('/addCarPark.html', function(req, res) {
   res.sendFile('FrontEnd/pages/addCarPark.html', { root: __dirname })
});

app.get('/removeCarPark.html', function(req, res) {
    res.sendFile('FrontEnd/pages/removeCarPark.html', { root: __dirname })
});

// if the client side has made a post request with the path of /loginSend, run this
app.use('/loginSend', login);
// if the client side has made a post request with the path of /formSend, run this
app.use('/formSend', register);
// if the client side has made a post request with the path of /loginSend, run this
app.use('/adminSend', admin);

app.use('/removeParkSend',remove);

app.use('/adminDashboard/addCarPark', create);

app.listen(5000, () => console.log('Express app listening on port 5000...'));



