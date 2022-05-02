const requestSpace = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const classes= require('./Classes');
const fs= require('fs');





requestSpace.post('/', jsonParser, (req, res)=>
{
    console.log(req.body)
    //TODO check car park exists
    const carParkQuery= req.body.carpark;
    const spaceQuery= req.body.spaceID;
    const path='./carPark.JSON';
    let foundSpace;

    fs.readFile(path, (err, data)=>
    {   
        if (err) {console.log('error')}
        else{
            let obj= JSON.parse(data);
            let arr= obj.carParks;
            let index = arr.findIndex(p => p._name == carParkQuery)
            if (index===-1)
            {
                res.status(404).send('NO');
                console.log(`${carParkQuery._name} couldnt be found`)
                return
            }
            else{
                const carParkToSearch= arr[index];
                index=spaceQuery-1;
                console.log(`${index} haha ${carParkToSearch._maxCapacity}`)
                if (carParkToSearch._maxCapacity <=index)
                {
                    res.status(404).send('NO');
                    console.log(`Space ID exceeds max capacity`)
                    return
                   

                
                }
                else{
                    
                    foundSpace= carParkToSearch._spaces[index];
                    foundSpace.carPark= carParkQuery;
                    console.log(foundSpace);
                    res.json(foundSpace);
                 }
            }
    }
})
})


requestSpace.post('/pay', jsonParser, (req, res)=>
{
    console.log(req.body);
    const carParkQuery= req.body.newSpace.CarPark;
    const spaceQuery = req.body.newSpace.spaceID;
    const path='./carPark.JSON';

    fs.readFile(path, (err, data)=>
    {
        if (err){console.log(err)}
        else
        {
            let obj= JSON.parse(data);
            let db = obj.carParks;
            //console.log(db);
            let index = db.findIndex(p => p._name == carParkQuery);
            const carParkToEdit= db[index];
            index=spaceQuery-1;
            space= carParkToEdit._spaces[index];
            space._spaceID= req.body.newSpace.spaceID;
            space._isBooked= req.body.newSpace.isBooked;
            space._occupied= req.body.newSpace.occupied;
            console.log(carParkToEdit._spaces);
            fs.writeFileSync(path,JSON.stringify(obj), (err)=>
                    {
                        if (err)
                        {
                            console.log("error")
                        }
                    
                    })
            res.send('OK');
            
        }
    })
    


})

module.exports= requestSpace;