const pages = require('express').Router();

pages.get('/', function(req, res) {
    res.sendFile('./Pages/Login.html', { root: __dirname })
});

pages.get('/Register', function(req, res) {
    res.sendFile('./Pages/Register.html', { root: __dirname })
});

pages.get('/Admin-Login', function(req, res) {
    res.sendFile('./Pages/adminLogin.html', { root: __dirname })
});

pages.get('/Home', function(req, res) {
    res.sendFile('./Pages/dashboard.html', { root: __dirname })
});
pages.get('/Space/request',function(req, res) {
    res.sendFile('./Pages/requestSpace.html', { root: __dirname })
});
pages.get('/Space/pay',function(req, res) {
    res.sendFile('./Pages/payments.html', { root: __dirname })
});


//admin pages below
pages.get('/Admin', function(req, res) {
    res.sendFile('./Pages/adminDashboard.html', { root: __dirname })
});

pages.get('/Car-Parks', function(req, res) {
    res.sendFile('./Pages/carParkList.html', { root: __dirname })
});

pages.get('/Car-Parks/add', function(req, res) {
    res.sendFile('./Pages/addCarPark.html', { root: __dirname })
 });

pages.get('/Car-Parks/remove', function(req, res) {
    res.sendFile('./Pages/removeCarPark.html', { root: __dirname })
 });


pages.get('/User-Management', function(req, res) {
    res.sendFile('./Pages/userList.html', { root: __dirname })
});

pages.get('/User-Management/remove', function(req, res) {
    res.sendFile('./Pages/removeUser.html', { root: __dirname })
});

module.exports=pages;