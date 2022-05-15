const users = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


users.post('/remove', jsonParser, (req, res)=> {

    const fs = require('fs');
    const path = './userDB.JSON';
    const parkPath = './carPark.JSON';

    const userName = req.body.name;

    inCarPark();

    function inCarPark() {

            //console.log('Inside of inCarPark!!')
            fs.readFile(parkPath, (err, parkData) => {
                if (err) {
                    console.log(err)
                } else {
                    let obj = JSON.parse(parkData);
                    let pData = obj.carParks;

                    let count = 0;
                    const spaceData = pData.map(x => x._spaces);

                    for (let i = 0; i < spaceData.length; i++) {
                        //console.log('i: ' + i);
                        for (let j = 0; j < spaceData[i].length; j++) {
                            if (spaceData[i][j]._isBooked === userName) {
                                //console.log('i: ' + i);
                                //console.log('j: ' + j);
                                //console.log('found user in car park');
                                count++;

                                //console.log('count: ' + count);
                            }
                        }
                    }
                    //console.log('count ' + count)
                    if(count === 0){
                        fs.readFile(path, (err, data) => {

                            if (err) {
                                console.log('error')
                            } else {
                                let obj = JSON.parse(data);
                                let arr = obj.details;
                                const nameData = arr.map(x => x.username);

                                // if it includes the park name we want to find
                                if ((nameData.includes(userName))) {

                                    // find the idx of the thing to be removed in namedata
                                    let userIndex = nameData.indexOf(userName);

                                    arr.splice(userIndex, 1);


                                    fs.writeFileSync(path, JSON.stringify(obj), (err) => {
                                        if (err) {
                                            console.log("error")
                                            return;
                                        }

                                    })
                                    console.log(`${userName.username} removed from database`)
                                    res.send('ok');
                                } else {
                                    console.log('database does not contain username entered')
                                    res.send('noMatch')
                                }
                            }
                        })
                    } else {
                        res.send('found user')
                    }
                }
            });
    }
});


    users.post('/display', jsonParser, (req, res) => {
        //console.log('in display in server');
        const fs = require('fs');
        const path = './userDB.JSON';
        const carParkPath = './carPark.JSON';

        // if the file associated with the path exists, then:
        if (fs.existsSync(path)) {

            // read the users file
            fs.readFile(path, (err, data) => {

                // also read the car parks file
                fs.readFile(carParkPath, (carParkErr, carParkData) => {
                    const dataArr = [];
                    if (err) {
                        console.log('error')

                        // if no opening error then:
                    } else {

                        // parse the JSON from the car park file
                        let car = JSON.parse(carParkData);
                        // access the carParks variable of the JSON
                        let carr = car.carParks;

                        // make a list of the spaces and car park names
                        const parkSpaceData = carr.map(x => x._spaces);
                        const parkNameData = carr.map(x => x._name);

                        let carParkID = [];


                        // parse the JSON from the user file
                        let obj = JSON.parse(data);
                        let arr = obj.details;

                        // make a list of the user names and passwords
                        const nameData = arr.map(x => x.username);
                        const passData = arr.map(x => x.password);


                        // for every user, push name and pass to array
                        for (let i = 0; i < nameData.length; i++) {
                            // push their name and password to the array
                            dataArr.push(nameData[i]);
                            dataArr.push(passData[i]);


                            let count = 0;
                            // then for each parking space in the JSON file
                            for (let j = 0; j < parkSpaceData.length; j++) {
                                //console.log('i: ' + i);


                                // iterate over the fields and
                                for (let k = 0; k < parkSpaceData[j].length; k++) {
                                    if (parkSpaceData[j][k]._isBooked === nameData[i]) {

                                        // push each spaceID to an array and increment count
                                        dataArr.push(parkSpaceData[j][k]._spaceID);
                                        count++
                                    }
                                }

                            } // if count is 0 then no empty space id could be found so push no spaces booked
                            if (count === 0) {
                                dataArr.push('No spaces booked');
                            }
                        }

                        res.send(dataArr);
                    }
                })

            })
        }
    })

users.post('/message', jsonParser, (req, res) => {

    const path = './messages.JSON';
    const userPath = './userDB.JSON';
    // save the name of the user sending the message + the message itself into variables
    const username = req.body.name;
    const message = req.body.message;

    if(message.toString().trim() === ''){
        res.send('no message')
    }

    else{
        // save these two entries as msgDetails
        let msgDetails =
            {
                username,
                message
            };

        const fs = require('fs');

        // read the user file
        fs.readFile(userPath, (usrFileErr, usrFileData) => {
            if (usrFileErr) {
                console.log('error')
            } else { // if no error with file then parse the content from the user file
                let obj = JSON.parse(usrFileData);
                // get the details field of the JSON user file
                let arr = obj.details;
                // get a list of usernames from user file
                const nameData = arr.map(x => x.username);

                // if the user file contains the same username in the same case as username posted (line 171) then
                if (nameData.includes(username)) {

                    // check if file exists
                    if (fs.existsSync(path)) {
                        // read messages.JSON
                        fs.readFile(path, (err, data) => {
                            if (err) {
                                console.log('error')
                            } else {
                                // get the existing data from the JSON
                                let obj = JSON.parse(data);
                                let arr = obj.data;

                                // find the index where the username is currently
                                let idx = arr.findIndex(p => p.username === username);

                                // if the username isnt in the file, the new user gets added to the file
                                if (idx === -1) {
                                    console.log('-1');
                                    let newUser =
                                        {
                                            username,
                                            message
                                        }
                                    arr.push(newUser);
                                } // if the username is in the file
                                else {
                                    // find the specific index the data is
                                    const userRecordToSearch = arr[idx];

                                    // change the old message to the new one
                                    userRecordToSearch.message = message;
                                }

                                // write changes to file
                                fs.writeFileSync(path, JSON.stringify(obj), (err) => {
                                    if (err) {
                                        console.log("error")
                                    }

                                })

                                res.send('ok');
                            }
                        })
                        // if file is not found, create it
                    } else {
                        let messageDetails =
                            {
                                word: 'messages',
                                data: msgDetails
                            };
                        fs.writeFileSync(path, JSON.stringify(messageDetails), (err) => {
                            if (err) {
                                console.log("error")
                            }
                        })
                    }

                } else {// if user not in users.JSON return noMatch
                    console.log('name not in file');
                    res.send('noMatch')
                }
            }
        })

    }
});

    users.post('/message', jsonParser, (req, res) => {

        const path = './messages.JSON';
        const userPath = './userDB.JSON';

        const username = req.body.name;
        const message = req.body.message;


        let msgDetails =
            {
                username,
                message
            };

        const fs = require('fs');

        fs.readFile(userPath, (usrFileErr, usrFileData) => {
            if (usrFileErr) {
                console.log('error')
            } else {
                let obj = JSON.parse(usrFileData);
                let arr = obj.details;
                const nameData = arr.map(x => x.username);

                if(nameData.includes(username)) {

                    if (fs.existsSync(path)) {
                        fs.readFile(path, (err, data) => {
                            if (err) {
                                console.log('error')
                            } else {
                                let obj = JSON.parse(data);
                                let arr = obj.data;

                                let idx = arr.findIndex(p => p.username === username);

                                if(idx === -1){
                                    let newUser =
                                        {
                                            username,
                                            message
                                        }
                                    arr.push(newUser);
                                }
                                else {

                                    const userRecordToSearch = arr[idx];

                                    userRecordToSearch.message = message;
                                }

                                fs.writeFileSync(path,JSON.stringify(obj), (err)=>
                                {
                                    if (err)
                                    {
                                        console.log("error")
                                    }

                                })

                                res.send('ok');
                            }
                        })
                    } else {
                        let messageDetails =
                            {
                                word: 'messages',
                                data: msgDetails
                            };
                        fs.writeFileSync(path, JSON.stringify(messageDetails), (err) => {
                            if (err) {
                                console.log("error")
                            }
                        })
                    }

                }
                else{// if user not in users.JSON
                    res.send('noMatch')
                }

            }})





});


    users.post('/receive', jsonParser, (req, res) => {

    const path = './messages.JSON';
    const username = req.body.name;

    const fs = require('fs');

        fs.readFile(path, (err, data) => {
            if (err) {
                console.log('error')
            } else {
                let obj = JSON.parse(data);
                let arr = obj.data;

                let idx = arr.findIndex(p => p.username === username);

                if (idx === -1){
                    res.send('noMatch');
                }
                else {
                    const userRecordToSearch = arr[idx];
                    res.send(userRecordToSearch.message);
                }
            }
        })

});


users.post('/userMessage', jsonParser, (req, res) => {

    let username = req.body.user;
    let message = req.body.data.message;

    let path = './messages.JSON';

    if(message.toString().trim() === ''){
        res.send('no message')
    }

    else{
        const fs = require('fs');
        fs.readFile(path, (err, data) => {

            if (err) {
                console.log('error')
            } else {
                let obj = JSON.parse(data);
                let arr = obj.data;

                let idx = arr.findIndex(p => p.username === username);

                if(idx === -1){
                    console.log('-1');
                    let newUser =
                        {
                            username,
                            message
                        }
                    arr.push(newUser);
                }
                else {
                    const userRecordToSearch = arr[idx];

                    userRecordToSearch.message = message;
                }

                fs.writeFileSync(path,JSON.stringify(obj), (err)=>
                {
                    if (err)
                    {
                        console.log("error")
                    }

                })

                res.send('ok');
            }
        })
    }
});

users.post('/userReceive', jsonParser, (req, res) => {

    const path = './messages.JSON';
    const username = req.body.user;

    const fs = require('fs');

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log('error')
        } else {
            let obj = JSON.parse(data);
            let arr = obj.data;

            let idx = arr.findIndex(p => p.username === username);

            if (idx === -1){
                res.send('noMatch');
            }
            else {
                const userRecordToSearch = arr[idx];
                res.send(userRecordToSearch.message);
            }
        }
    })

});

    module.exports=users;