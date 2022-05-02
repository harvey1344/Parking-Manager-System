const users = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

users.post('/remove', jsonParser, (req, res)=>
{
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
                    console.log(`${userName.username} removed from database`)
                    res.send('ok');
                }
                else {
                    console.log('database does not contain username entered')
                    res.send('noMatch')
                }
            }
        })
    }
    else
    {
        console.log('No car park file exists')
    }

})


users.post('/display', jsonParser, (req, res)=>
{
   console.log('in display in server');
   const fs = require('fs');
   const path='./userDB.JSON';

    if (fs.existsSync(path))
    {
        fs.readFile(path, (err, data)=>
        {
            const dataArr = [];
            if (err){console.log('error')}
            else{
                let obj= JSON.parse(data);
                let arr = obj.details;

                const nameData= arr.map(x => x.username);
                const passData = arr.map(x => x.password);


                console.log('nameData: ' + nameData);
                console.log('passData: ' + passData);

                for(let i = 0; i < nameData.length; i++){
                    dataArr.push(nameData[i]);
                    dataArr.push(passData[i]);
                }

                res.send(dataArr);
                }
        })
    }
})

module.exports=users;