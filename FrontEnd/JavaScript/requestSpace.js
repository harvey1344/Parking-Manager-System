
console.log("workign")
console.log(getCookie('test'));
const sendRequest= ()=>
{
    let carpark= document.getElementById('request').elements[0].value;
    let space= document.getElementById('request').elements[1].value;
    let time= document.getElementById('request').elements[2].value;
    if (carpark==="" || space==="" || time ==="")
    {
      alert("all fields need to be filled")
      return;
    }
    if (time>240)
    {
        let alertPara = document.createElement('p');
        alertPara.textContent = 'Max time 10 days (240 hours)';
        alertPara.style.cssText = 'color: red';
        alertPara.style.textAlign = 'center';
        alertPara.style.backgroundColor = '#ffc1cc';
        alertPara.style.borderStyle = 'solid';
        alertPara.style.borderWidth = 'thin';
        alertPara.style.borderColor = '#ff949a';
        let resetElement = document.querySelector('p');
        resetElement.parentNode.insertBefore(alertPara, resetElement.nextSibling);
        resetButton.removeEventListener('click', onResetClick);
      return;
    }

    fetch("http://localhost:5000/space", {
     
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
        carpark: carpark,
        spaceID: space,
        duration: time
    }),
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    
})
 .then(function(res){
   if(res.statusText=== "Not Found")
   {
     alert("Sorry space not found")
     return
   }
   else
   {
    return res.json();
   }

 })
.then(function(data){ 
  let space = data;
  console.log(space);

  if (space._isBooked || space._occupied)
  {
    alert("Sorry space is currently booked or in use ");
    location.reload();
  }
  else 
  {
    //set cookies ugh
    console.log(getCookie('username'))
    document.cookie = "spaceID= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = "carPark= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    document.cookie = "payment= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
    setCookie('spaceID', space._spaceID);
    setCookie('carPark', space.carPark);
    setCookie('payment', space.payment)


    window.location.href='/Space/pay'

  }
    

})
.catch(function(res){ console.log(res) })

}


function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  const adminRequest= ()=>
{
    let carpark= document.getElementById('request').elements[0].value;
    let space= document.getElementById('request').elements[1].value;
    

    fetch("http://localhost:5000/space/Admin", {
     
    // Adding method type
    method: "PATCH",
    // Adding body or contents to send
    body: JSON.stringify({
        carpark: carpark,
        spaceID: space,
    }),
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    
})
 .then(function(res){
   if (res.ok)
   {
     console.log(res);
     spaceSuccess();
   }
   else if (res.status=404)
   {
     alert("Either carpark or space couldnt be located\nPlease check your query")
   }
   
  

 })

.catch(function(res){ console.log(res) })

}
function spaceSuccess()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'Space reserved';
	alertPara.style.cssText = 'color: green';
	alertPara.style.textAlign = 'center';
	alertPara.style.backgroundColor = '#D3FFCC';
	alertPara.style.borderStyle = 'solid';
	alertPara.style.borderWidth = 'thin';
	alertPara.style.borderColor = 'green';
	let resetElement = document.querySelector('p');
	resetElement.parentNode.insertBefore(alertPara, resetElement.nextSibling);
	resetButton.removeEventListener('click', onResetClick);
}