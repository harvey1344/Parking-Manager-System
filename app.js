//const wp = require("./wp.js");
const express = require('express');
const app = express();
const carParks= require('./API/Routes/Car-Parks')
const admin = require('./API/Routes/verfiy/admin.js');
const register = require('./API/Routes/verfiy/register.js');
const login = require('./API/Routes/verfiy/login.js');
const requestSpace = require('./API/Routes/request-space.js');
const users = require('./API/Routes/Users');

app.use(express.static('testproject'));

const pages = require('./FrontEnd/pages-router');
const styles = require('./FrontEnd/styles-router.js');
const js = require('./FrontEnd/js-router.js');
const res = require('express/lib/response');
const dash = require('./API/Routes/DashBoard');




//router for all html pages
app.use('/', pages);

//router for styles 
app.use('/', styles);

//router for client script files
app.use('/', js);

//routers for login and register
app.use('/loginSend', login);
app.use('/formSend', register);
app.use('/adminSend', admin);

//routers for car park functionality
app.use('/Car-Parks', carParks);

app.use('/space', requestSpace);

app.use('/User-Management', users)

app.use('/Home', dash)

pages.get('/CDB', function(req, res) {
    res.sendFile('./carPark.JSON', { root: __dirname })
});






app.listen(5000, () => console.log('Express app listening on port 5000...'));



