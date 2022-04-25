//const wp = require("./wp.js");
const express = require('express');
const app = express();
const classes= require('./Classes.js');

app.use(express.static('testproject'));

const userDetails = []
const adminDetails = []
const carParkDetails = []
const bodyParser = require('body-parser');
const req = require('express/lib/request');
const res = require('express/lib/response');
const fs = require("fs");
const jsonParser = bodyParser.json();
adminDetails.push({firstname: "Admin",password: "Password"})

const adminJSON = console.log()

app.get('/', function(req, res) {
    res.sendFile('Register.html', { root: __dirname })
});

app.get('/Login.html', function(req, res) {
    res.sendFile('Login.html', { root: __dirname })
});

app.get('/adminLogin.html', function(req, res) {
    res.sendFile('adminLogin.html', { root: __dirname })
});

app.get('/Register.html', function(req, res) {
    res.sendFile('Register.html', { root: __dirname })
});

app.get('/style.css', function(req, res) {
    res.sendFile('style.css', { root: __dirname })
});

app.get('/wp.js', function(req, res) {
    res.sendFile('wp.js', { root: __dirname })
});

app.get('/team.html', function(req, res) {
    res.sendFile('team.html', { root: __dirname })
});

app.get('/form.html', function(req, res) {
    res.sendFile('form.html', { root: __dirname })
});

app.get('/dashboard.html', function(req, res) {
    res.sendFile('dashboard.html', { root: __dirname })
});

app.get('/adminDashboard.html', function(req, res) {
    res.sendFile('adminDashboard.html', { root: __dirname })
});

app.get('/addCarPark.html', function(req, res) {
    res.sendFile('addCarPark.html', { root: __dirname })
});

/*app.post('/Register', (req, res) => {
    userDetails.push({name: req.body.username, password: req.body.password})
    console.log(userDetails)
});*/

// JSON file should be blank


// if the client side has made a post request with the path of /formSend, run this
app.post('/formSend', jsonParser, (req, res) => {
    console.log(req.body);
    const username = req.body.username;
    const password = req.body.password;


    userData = {
        name: req.body.username,
        password: password,
    }

    const fs = require('fs');

    // if already exists in the array then dont add
    if(userDetails.find( ({firstname}) => firstname === userData.name) &&
        userDetails.find( ({password}) => password === userData.password)){

        res.send('exists')
        console.log("Account has already been registered, not added to json file")


    }
    // if no data is entered into either fields, then reject and return a 'noData' response, handled in wp.js
    else if(userData.name === '' || userData.password === ''){
        res.send('noData')
        console.log("No data entered, not added to json file")
    }
    // If the items are not already in the array then add them:
    else{
        // append userData in JSON format to driverUser.json
        fs.appendFile('driverUser.json', JSON.stringify(userData), error => {
            if (error) {
                return console.log(error);
            } else {
                console.log('driverUser.json was updated and saved');
            }
            // push to local array
            userDetails.push({firstname: req.body.username,password: req.body.password})
            console.log(userDetails)
        });
        res.status(200).json(userData);
    }
});

// if the client side has made a post request with the path of /loginSend, run this
app.post('/loginSend', jsonParser, (req, res) => {
        console.log(req.body);
        const username = req.body.username;
        const password = req.body.password;


        userData = {
            name: req.body.username,
            password: password,
        }

        const fs = require('fs');

        // if the details entered, can be found in data storage,
        if(userDetails.find( ({firstname}) => firstname === userData.name) &&
            userDetails.find( ({password}) => password === userData.password)){

            // send a response to the client side with exists if the data can be found
            res.send('exists')
            console.log("Moving to dashboard");
            res.status(200).json(userData);

            // if details cannot be found, send back "doesnt exist to the client side"
        } else{
            res.send('doesnt exist')
        };
    }
);

// if the client side has made a post request with the path of /loginSend, run this
app.post('/adminSend', jsonParser, (req, res) => {
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

app.post('/dashboard',jsonParser, (req, res)=>{
    //console.log(req.body);
    const spaceID= req.body.spaceID;
    const occupied= req.body.occupied;
    const duration= req.body.duration;
    const booked= true;

    temp = new classes.parkingSpace(spaceID, occupied, duration, booked)
    res.send(temp);
    console.log(temp);
}
)

app.post('/adminDashboard/addCarPark', jsonParser, (req, res)=>
{
    /*
    const fs = require('fs');
    const name = req.body.name;
    const blockLocation= req.body.blockLocation;
    const maxCapacity= req.body.maxCapacity;
    const basePrice = req.body.basePrice;

    const carPark= new classes.CarPark(name, blockLocation, maxCapacity, basePrice);
    for (let i = 1; i <= maxCapacity; i++)
    {
      space= new classes.parkingSpace(i, false, 0, false);
      carPark._spaces.push(space);
    }
    const json= JSON.stringify(carPark);
    fs.writeFile(carPark.name+".json", json, err => {
      if (err)
      {
        console.log("Error!");
      }
      else
      {
        console.log("Written");
      }
    })
    res.send(carPark);
    */
// /*
    console.log(req.body);
    const name = req.body.name;
    const blockLocation= req.body.blockLocation;
    const maxCapacity= req.body.maxCapacity;
    const basePrice = req.body.basePrice;


    carParkData = {
        name: req.body.name,
        blockLocation: req.body.blockLocation,
        maxCapacity: maxCapacity,
        basePrice: basePrice
    }

    const fs = require('fs');

    // if already exists in the array then dont add
    if(carParkDetails.find( ({name}) => name === carParkData.name) &&
        carParkDetails.find( ({blockLocation}) => blockLocation === carParkData.blockLocation)){

        res.send('exists')
        console.log("Car Park has already been registered, not added to json file")


    }
    // if no data is entered into either fields, then reject and return a 'noData' response, handled in wp.js
    else if(carParkData.name === '' || carParkData.blockLocation === '' || carParkData.maxCapacity === '' || carParkData.basePrice === ''){
        res.send('noData')
        console.log("No data entered, not added to json file")
    }
    // If the items are not already in the array then add them:
    else{
        // append carParkData in JSON format to carPark.json
        fs.appendFile('carPark.json', JSON.stringify(carParkData), error => {
            if (error) {
                return console.log(error);
            } else {
                console.log('carPark.json was updated and saved');
            }
            // push to local array
            carParkDetails.push({name: req.body.name, blockLocation: req.body.blockLocation, maxCapacity: req.body.maxCapacity, basePrice: req.body.basePrice})
            console.log(carParkDetails)
        });
        res.status(200).json(carParkData);
    }
//*/

})

app.listen(5000, () => console.log('Express app listening on port 5000...'));
console.log(classes);



