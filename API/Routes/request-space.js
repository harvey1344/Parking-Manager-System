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
        if (err)
        {console.log('error')}
        else{
            let obj= JSON.parse(data);
            let arr= obj.carParks;
            let index = arr.findIndex(p => p._name == carParkQuery)
            const carParkToSearch= arr[index];
            index=spaceQuery-1;
            foundSpace= carParkToSearch._spaces[index];
        
            foundSpace.carPark= carParkQuery;
            console.log(foundSpace);
            res.send("ok");
        
        
        }
                
    })

    

    //FIND space ID- check if booked
    //return booked space as cookie

});


module.exports= requestSpace;