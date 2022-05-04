const login = require('express').Router();
const bodyParser = require('body-parser');
const { send } = require('express/lib/response');
const jsonParser = bodyParser.json();

login.post('/', jsonParser, (req,res)=>
{
    const fs= require('fs');
    const path= './userDB.JSON';

    if (req.body.username===''||req.body.password==='')
    {
        res.send('noData');
        return;
    }

    let user =
    {
        username: req.body.username,
        password: req.body.password
    };
    console.log(user);

    fs.readFile(path, (err, data)=>
    {
        if (err) {return console.log('error')}
        else{
                let dataBase= JSON.parse(data);
                let users= dataBase.details;
                if (users.some(e => e.username===user.username && e.password===user.password))
                {
                    usersName = user.username;
                    console.log(`${user.username} details matched, logging in`);
                    res.send("goodLogin");
                
                }
                else{
                console.log("Bad login attempt");  
                res.send("badLogin");  
                }            
            }

    })
})

module.exports= login;