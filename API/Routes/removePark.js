const remove = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const classes= require('./Classes');

remove.post('/', jsonParser, (req, res)=>
{
    console.log('In post function appJS')
    const fs = require('fs');
    const path='./carPark.JSON';

    const parkName = req.body.name;

    if (fs.existsSync(path))
    {
        fs.readFile(path, (err, data)=>
        {
            if (err){console.log('error')}
            else{
                let obj= JSON.parse(data);
                let arr = obj.carParks;
                const nameData= arr.map(x => x._name);

                // if it includes the park name we want to find
                if ((nameData.includes(parkName))) {

                    // find the idx of the thing to be removed in namedata
                    let carParkIndex = nameData.indexOf(parkName);
                    //console.log('index of thing to be removed: ' + carParkIndex);
                    // remove from that corresponding idx
                    arr.splice(carParkIndex,1);


                    fs.writeFileSync(path, JSON.stringify(obj), (err) => {
                        if (err) {
                            console.log("error")
                            return;
                        }

                    })

                    console.log(`${parkName.name} removed from database`)

                    res.send('ok');
                }
                else {
                    console.log('does not contain parkName entered')
                    res.send('badData')
                }
            }
        })
    }
    else
    {
        console.log('No car park file exists')
    }

})

module.exports = remove;