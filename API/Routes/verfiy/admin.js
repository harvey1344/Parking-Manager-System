const admin = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const adminDetails = []
adminDetails.push({firstname: "Admin",password: "Password"});



admin.post('/', jsonParser, (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;


    userData = {
        name: req.body.username,
        password: password,
    }

    const fs = require('fs');

    // if the details entered, can be found in data storage,
    if(adminDetails.find( ({firstname}) => firstname === userData.name) &&
        adminDetails.find( ({password}) => password === userData.password)){

        // send a response to the client side with exists if the data can be found
        res.send('exists')
        console.log("Moving to admin dashboard");
        res.status(200).json(userData);

        // if details cannot be found, send back "doesnt exist to the client side"
    } else{
        res.send('doesnt exist')
    };
}
);

module.exports=admin;