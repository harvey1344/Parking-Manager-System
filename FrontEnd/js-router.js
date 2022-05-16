const js = require('express').Router();

js.get('/wp.js', function(req, res) {
    res.sendFile('./JavaScript/wp.js', { root: __dirname })
});

// bloat code as morgan used wp.js ;{
js.get('/Car-Parks/wp.js', function(req, res) {
    res.sendFile('./JavaScript/wp.js', { root: __dirname })
});
js.get('/Space/pay.js', function(req, res) {
    res.sendFile('./JavaScript/pay.js', { root: __dirname })
});

js.get('/dashboard.js', function(req, res) {
    res.sendFile('./JavaScript/dashboard.js', { root: __dirname })
});

js.get('/Space/requestSpace.js',function(req, res) {
    res.sendFile('./JavaScript/requestSpace.js', { root: __dirname })
});

js.get('/User-Management/requestSpace.js',function(req, res) {
    res.sendFile('./JavaScript/wp.js', { root: __dirname })
});

js.get('/User-Management/wp.js',function(req, res) {
    res.sendFile('./JavaScript/wp.js', { root: __dirname })
});

js.get('/Space/wp.js',function(req, res) {
    res.sendFile('./JavaScript/wp.js', { root: __dirname })
});

js.get('/Messaging.js',function(req, res) {
    res.sendFile('./JavaScript/messaging.js', { root: __dirname })
});

js.get('/userMessaging.js',function(req, res) {
    res.sendFile('./JavaScript/userMessaging.js', { root: __dirname })
});

module.exports=js;