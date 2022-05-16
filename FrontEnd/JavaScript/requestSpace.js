/*
 Javascript file containing functions for requesting a space 
*/


/*
 Function to send data to server to find a deal with a space request
 Gets data from form on the DOM and the sends to backend using fetch()
 A space object is returned and saved into cookies then user is relocated to payments
 Note- if returned is booked or occupied, reqesut unsuccessful and page reloaded 
*/
const sendRequest= ()=>
{
    let carpark= document.getElementById('request').elements[0].value;
    let space= document.getElementById('request').elements[1].value;
    let time= document.getElementById('request').elements[2].value;

    if (carpark.toString().trim() === "" || space.toString().trim() === ""
        || time.toString().trim() === "")
    {
      messageFail("Required fields cannot be left empty");
      return;
    }
    if (time>240)
    {
      tooLong();
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
     messageFail("Space not found");
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
    messageFail("Space is currently booked or in use ");
    location.reload();
  }
  else 
  {
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

//helper fucntion to set cokkie 
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

  //helper fucntion to get specific cookie from cookie text fiele
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


//Function top send admin space request (reserve) to backend usiing fetch
const adminReserve= ()=>
{
    let carpark= document.getElementById('request').elements[0].value;
    let space= document.getElementById('request').elements[1].value;

    if(carpark.toString().trim() === '' || space.toString().trim() === ''){
        messageFail('Entry cannot be left blank!');
    } else {

        fetch("http://localhost:5000/space/Admin", {

            // Adding method type
            method: "PATCH",
            // Adding body or contents to send
            body: JSON.stringify({
                carpark: carpark,
                spaceID: space,
                type: 'add'
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
                    messageFail('Car Park or space could not be located. Please check your query');
                }

            })

            .catch(function(res){ console.log(res) })}




}

//Function top send admin space request (release) to backend using fetch
const adminRelease= ()=>
{
    let carpark= document.getElementById('request').elements[0].value;
    let space= document.getElementById('request').elements[1].value;

    if(carpark.toString().trim() === '' || space.toString().trim() === ''){
        messageFail('Entry cannot be left blank!');
    } else {
        fetch("http://localhost:5000/space/Admin", {

        // Adding method type
        method: "PATCH",
        // Adding body or contents to send
        body: JSON.stringify({
            carpark: carpark,
            spaceID: space,
            type: 'remove'
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
                messageFail('Car Park or space could not be located. Please check your query')
            }
        })
        .catch(function(res){ console.log(res) })}
}

//update page on success request (admin)
function spaceSuccess()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'Success';
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

//update page with error booking (user)
const tooLong =()=>
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
}