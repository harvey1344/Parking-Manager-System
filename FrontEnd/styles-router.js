const styles = require('express').Router();


styles.get('/style.css', function(req, res) {
    res.sendFile('./styles/style.css', { root: __dirname })
});

//forward style sheet on to the car-park route
styles.get('/Car-Parks/style.css', function(req, res) {
    res.sendFile('./styles/style.css', { root: __dirname })
});

//forward style sheet on to the Spaces route
styles.get('/Space/style.css', function(req, res) {
    res.sendFile('./styles/style.css', { root: __dirname })
});

styles.get('/message/style.css', function(req, res) {
    res.sendFile('./styles/style.css', { root: __dirname })
});

styles.get('/User-Management/style.css', function(req, res) {
    res.sendFile('./styles/style.css', { root: __dirname })
});


styles.get('/dashStyle.css', function(req, res) {
    res.sendFile('./styles/dashStyle.css', { root: __dirname })
});

styles.get('/adminDashStyle.css', function(req, res) {
    res.sendFile('./styles/adminDashStyle.css', { root: __dirname })
});



module.exports= styles;