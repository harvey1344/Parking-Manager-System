const register = require('express').Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


register.post('/', jsonParser, (req, res)=>
{
    const fs= require('fs');
    const path= './userDB.JSON';

    if (req.body.username===''||req.body.password==='')
    {
        res.send('noData');
        return;
    }
    const username= req.body.username;
    const password= req.body.password;
    let user =
    {
        username,
        password
    };

    if (fs.existsSync(path))
    {
        console.log("file found")
        fs.readFile(path, (err, data)=>
        {
            if (err){return console.log('error')}
            else{
                console.log("file read");
                let dataBase= JSON.parse(data);
                let users=dataBase.details;
                console.log(users);
                const usrCheck= users.map(x=> x.username);
                if (!(usrCheck.includes(username)))
                {
                    users.push(user);
                    fs.writeFileSync(path,JSON.stringify(dataBase), (err)=>
                    {
                        if (err)
                        {
                            console.log("error")
                            return;
                        }
                    
                    })
                    console.log(`${user} added to database`)
                    res.send('ok');
                }
                else {
                    console.log("user attemped to register byt exists");
                    res.send('exists');

                }
            }
        })
    }
    else {
        let db= 
        {
            name: 'login-store',
            details:[user]
        }
        fs.writeFileSync(path, JSON.stringify(db), (err)=>
        {
            if (err)
            {
                console.log("error")
            }
        })
    }

})

module.exports= register;