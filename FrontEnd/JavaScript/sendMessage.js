
console.log("workign")
const sendMessage= ()=>
{
    let sender= document.getElementById('message').elements[0].value;
    let reciever= document.getElementById('message').elements[1].value;
    let message= document.getElementById('message').elements[2].value;
    let datetime= document.getElementById('message').elements[3].value;
    console.log(sender);

    fetch("http://localhost:5000/message", {
     
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
        carpark: carpark,
        spaceID: space
    }),
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    
})
 
.then(function(res){ console.log(res.statusText) 
    if (res.statusText==='OK')
    {
        window.location.href='/Space/pay'
    }

})
.catch(function(res){ console.log(res) })

}

