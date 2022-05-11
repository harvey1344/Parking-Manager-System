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

carParks.post('/display', jsonParser, (req, res)=> {
{
   //console.log('In carParks /display in car-Parks.js')
    const fs = require('fs');
    const path='./carPark.JSON';

    if (fs.existsSync(path))
    {
        fs.readFile(path, (err, data)=>
        {
            const dataArr = [];
            if (err){console.log('error')}
            else{
                let obj= JSON.parse(data);
                let arr = obj.carParks;

                const nameData= arr.map(x => x._name);
                const locationData= arr.map(x => x._blockLocation);
                const capacityData= arr.map(x => x._maxCapacity);
                const priceData= arr.map(x => x._basePrice);
                const spaceData= arr.map(x => x._spaces);

                // test code - please do not remove in case I need to look at this again later

                /*console.log("spacedata.len: " + spaceData.length)
                console.log("spacedata[0][0]: " + spaceData[0][0]._isBooked);
                console.log("spacedata[0]: ");
                console.log(spaceData[0]);
                console.log("spacedata[0].len: " + spaceData[0].length)
                console.log("spacedata[1]: ");
                console.log(spaceData[1]);
                console.log("spacedata[2]: ");
                console.log(spaceData[2]);
                console.log("spacedata[0].len: " + spaceData[2].length)*/


                // appends each car parks' unbooked spaces to an array.
                let numArray = [];
                for(let i = 0; i < spaceData.length; i++){
                    //console.log('i: ' + i);
                    let count = 0;
                    for(let j = 0; j < spaceData[i].length; j++){
                        if(spaceData[i][j]._isBooked === false){
                            //console.log('i: ' + i);
                            //console.log('j: ' + j);
                            //console.log('false');
                            count ++;
                            //console.log('count: ' + count);
                        }
                    }
                    numArray.push(count);
                }
                //console.log('numArray: ' + numArray);


                let carParkID = [];
                for(let i = 0; i < spaceData.length; i++){
                    //console.log('i: ' + i);
                    let str = '';
                    let count = 0;
                    for(let j = 0; j < spaceData[i].length; j++){
                        if(spaceData[i][j]._isBooked === false){
                            str += spaceData[i][j]._spaceID + ', ';
                            count ++
                        }
                    }
                    if (count === 0){
                        carParkID.push('No Free Spaces Currently')
                    } else {
                        carParkID.push(str);
                    }

                }
                console.log(carParkID)
                for(let i = 0; i < nameData.length; i++){
                    dataArr.push(nameData[i]);
                    dataArr.push(locationData[i]);
                    dataArr.push(capacityData[i]);
                    dataArr.push(priceData[i]);
                    dataArr.push(numArray[i]);
                    dataArr.push(carParkID[i]);
                }

                res.send(dataArr);
            }
        })
    }
}})

carParks.post('/graph', jsonParser, (req, res)=> {
    {
        let dataArray = [];


        const fs = require('fs');

        fs.readFile('./carPark.JSON', (err, userData)=>
        {
            let obj= JSON.parse(userData);
            let arr = obj.carParks;

            const nameData= arr.map(x => x._name);
            const spaceData= arr.map(x => x._spaces);
            const capacity = arr.map(x => x._maxCapacity);

            //console.log('nameData: ' + nameData);

            let spaceArray = [];
            for(let i = 0; i < spaceData.length; i++){
                let count = 0;
                for(let j = 0; j < spaceData[i].length; j++){
                    if(spaceData[i][j]._isBooked === false){
                        count ++;
                    }
                }
                // might be problematic
                // Percentage of Car Park utilisation
                spaceArray.push(((capacity[i] - count)/capacity[i]) * 100);
            }

            for(let i = 0; i < nameData.length; i++){
                dataArray.push(nameData[i]);
                dataArray.push(spaceArray[i]);
            }

            //console.log('data array: ' + dataArray);
            res.send(dataArray);
        });


    }});


module.exports= carParks;

