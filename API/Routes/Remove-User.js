const rUser = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

rUser.post('/', jsonParser, (req, res)=>
{
    console.log('In post function for remove users appJS')
    const fs = require('fs');
    const path='./userDB.JSON';

    const userName = req.body.name;

    if (fs.existsSync(path))
    {
        fs.readFile(path, (err, data)=>
        {
            if (err){console.log('error')}
            else{
                let obj= JSON.parse(data);
                let arr = obj.details;
                const nameData= arr.map(x => x.username);

                // if it includes the park name we want to find
                if ((nameData.includes(userName))) {

                    // find the idx of the thing to be removed in namedata
                    let userIndex = nameData.indexOf(userName);
                    //console.log('index of thing to be removed: ' + carParkIndex);
                    // remove from that corresponding idx
                    arr.splice(userIndex,1);


                    fs.writeFileSync(path, JSON.stringify(obj), (err) => {
                        if (err) {
                            console.log("error")
                            return;
                        }

                    })
                    console.log(`${userName.name} removed from database`)
                    res.send('ok');
                }
                else {
                    console.log('database does not contain username entered')
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


module.exports= rUser;
