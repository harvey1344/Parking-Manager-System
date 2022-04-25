const create = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const classes= require('./Classes');

create.post('/', jsonParser, (req, res)=>
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
                            return;
                        }
                    
                    })
                    console.log(`${carParkData} added to database`)
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

module.exports = create;