const dash = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();
const path='./carPark.JSON';
const fs = require('fs');


dash.patch('/arrive', jsonParser, (req, res)=>
{
    const carParkQuery= req.body.space.carPark;
    const spaceIndex=req.body.space._spaceID-1;

    fs.readFile(path, (err, data)=>
    {
        if (err){console.log(err)}
        else
        {
            let obj= JSON.parse(data);
            let db= obj.carParks;
            let index = db.findIndex(p => p._name == carParkQuery)
            console.log(index);
            if (index===-1)
            {
                res.status(404).send('NO');
                return
            }
            else
            {
                const carParkToSearch= db[index];
                console.log(carParkToSearch)
                let spaceToEdit= carParkToSearch._spaces[spaceIndex];
                console.log(spaceToEdit);
                spaceToEdit._occupied=true;

                fs.writeFileSync(path,JSON.stringify(obj), (err)=>
                {
                    if (err){console.log(err)};
                })
                res.send('OK');
                
            


            }

        }
    })

    
    

})






module.exports=dash;