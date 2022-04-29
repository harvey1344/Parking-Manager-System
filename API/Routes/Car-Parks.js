const carParks = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const classes= require('./Classes');


//add
carParks.post('/add', jsonParser, (req, res)=>
{
    const path='./carPark.JSON';
    if (req.body.name===''||req.body.blockLocation===''||req.maxCapacity==='')
    {
        res.send('cpNoData');
        return;
    }
    const name = req.body.name;
    const blockLocation= req.body.blockLocation;
    const maxCapacity= req.body.maxCapacity;
    const basePrice = req.body.basePrice;
    const carParkData= new classes.CarPark(name, blockLocation, maxCapacity, basePrice);
    for (let i = 1; i <= maxCapacity; i++)
    {
      space= new classes.parkingSpace(i, false, 0, false);
      carParkData._spaces.push(space);
    }


    const fs = require('fs');
    if (fs.existsSync(path))
    {
        fs.readFile(path, (err, data)=>
        {
            if (err){console.log('error')}
            else{
                let obj= JSON.parse(data);
                let arr= obj.carParks;
                //console.log(arr);
                //check car park exists
                const nameData= arr.map(x => x._name);

                if (!(nameData.includes(name)))
                {
                    arr.push(carParkData);
                    fs.writeFileSync(path,JSON.stringify(obj), (err)=>
                    {
                        if (err)
                        {
                            console.log("error")
                        }
                    
                    })
                    console.log(`${carParkData.name} added to database`)
                    res.send('ok');
                }
            
                else{
                    console.log("car parked creation attempted, but exists");
                    res.send('exists');
                }
            }
        })
    }
    else
    {
        let carPark=
        {
            word: 'List-of-car-parks',
            carParks: [carParkData]
        };
        fs.writeFileSync(path,JSON.stringify(carPark), (err)=>
        {
            if (err)
            {
                console.log("error")
            }
        })
    }

})

carParks.post('/remove', jsonParser, (req, res)=>
{
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
                    console.log(`${parkName._name} removed from database`)
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


module.exports= carParks;

