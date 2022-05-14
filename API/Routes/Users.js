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

        if (fs.existsSync(path)) {
            fs.readFile(path, (err, data) => {
                fs.readFile(carParkPath, (carParkErr, carParkData) => {
                    const dataArr = [];
                    if (err) {
                        console.log('error')
                    } else {
                        let car = JSON.parse(carParkData);
                        let carr = car.carParks;

                        const parkSpaceData = carr.map(x => x._spaces);
                        const parkNameData = carr.map(x => x._name);

                        let carParkID = [];


                        let obj = JSON.parse(data);
                        let arr = obj.details;

                        const nameData = arr.map(x => x.username);
                        const passData = arr.map(x => x.password);


                        // for every user
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

                                        dataArr.push(parkSpaceData[j][k]._spaceID);
                                        count++
                                    }
                                }

                            }
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
    console.log('in message in server');

    const path = './messages.JSON';
    const userPath = './userDB.JSON';

    const username = req.body.name;
    const message = req.body.message;

    console.log('user: ' + username);
    console.log('message: ' + message);

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
            console.log('namedata v')
            console.log(nameData);

            if(nameData.includes(username)) {

                if (fs.existsSync(path)) {
                    fs.readFile(path, (err, data) => {
                        if (err) {
                            console.log('error')
                        } else {
                            let obj = JSON.parse(data);
                            let arr = obj.data;
                            console.log('arr is below v')
                            console.log(arr);

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
                                console.log('idx was found: ' + idx);


                                const userRecordToSearch = arr[idx];

                                console.log('user record to search: v')
                                console.log(userRecordToSearch);

                                userRecordToSearch.message = message;

                                console.log('arr is below v')
                                console.log(arr);
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
                console.log('name not in file');
                res.send('noMatch')
            }

    }})

    users.post('/message', jsonParser, (req, res) => {
        console.log('in message in server');

        const path = './messages.JSON';
        const userPath = './userDB.JSON';

        const username = req.body.name;
        const message = req.body.message;

        console.log('user: ' + username);
        console.log('message: ' + message);

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
                console.log('namedata v')
                console.log(nameData);

                if(nameData.includes(username)) {

                    if (fs.existsSync(path)) {
                        fs.readFile(path, (err, data) => {
                            if (err) {
                                console.log('error')
                            } else {
                                let obj = JSON.parse(data);
                                let arr = obj.data;
                                console.log('arr is below v')
                                console.log(arr);

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
                                    console.log('idx was found: ' + idx);


                                    const userRecordToSearch = arr[idx];

                                    console.log('user record to search: v')
                                    console.log(userRecordToSearch);

                                    userRecordToSearch.message = message;

                                    console.log('arr is below v')
                                    console.log(arr);
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
                    console.log('name not in file');
                    res.send('noMatch')
                }

            }})


    });


});


    users.post('/receive', jsonParser, (req, res) => {
    console.log('in receive in server');

    const path = './messages.JSON';
    const username = req.body.name;

    console.log('user: ' + username);

    const fs = require('fs');

        fs.readFile(path, (err, data) => {
            if (err) {
                console.log('error')
            } else {
                let obj = JSON.parse(data);
                let arr = obj.data;
                console.log('arr is below v')
                console.log(arr);

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
    console.log('in userMessage in server');

    let username = req.body.user;
    let message = req.body.data.message;

    console.log('username: ' + username);
    console.log('message: ' + message);

    let path = './messages.JSON';

    const fs = require('fs');
    fs.readFile(path, (err, data) => {

        if (err) {
            console.log('error')
        } else {
            let obj = JSON.parse(data);
            let arr = obj.data;
            console.log('arr is below v')
            console.log(arr);

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
                console.log('idx was found: ' + idx);


                const userRecordToSearch = arr[idx];

                console.log('user record to search: v')
                console.log(userRecordToSearch);

                userRecordToSearch.message = message;

                console.log('arr is below v')
                console.log(arr);
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
});

users.post('/userReceive', jsonParser, (req, res) => {

    const path = './messages.JSON';
    const username = req.body.user;

    console.log('user: ' + username);

    const fs = require('fs');

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log('error')
        } else {
            let obj = JSON.parse(data);
            let arr = obj.data;
            console.log('arr is below v')
            console.log(arr);

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