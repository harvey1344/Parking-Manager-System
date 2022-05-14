/*
 Javascript file containing functions for payment page
 Heavily reliant on cookies pushed from request-space page 
*/

//hepler function to get cookies
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

//factory function to create new space from stored data 
const spaceMaker =() =>
{
  return{
    CarPark: getCookie('carPark'),
    spaceID: getCookie('spaceID'),
    occupied: false,
    isBooked: getCookie('username')

  }
}

let newSpace= spaceMaker();
console.log(newSpace);
const payment = getCookie('payment');

//add carpakr and space to form
document.getElementById('change').innerHTML=`Request for <strong>${newSpace.CarPark}: ${newSpace.spaceID}
</strong>accepted`;
document.getElementById('change2').innerHTML=`Please pay the amount: <em>${payment}</em>`;


/*
 Function to send relevant data to update carpark db so that a user has
 now booked a space
 Ran on success of payment
*/
const submitPayment= ()=>
{
  fetch("http://localhost:5000/space/pay", {
     
    // Adding method type
    method: "POST",
    // Adding body or contents to send
    body: JSON.stringify({
        newSpace
    }),
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    
})
.then(function(res){
  console.log(res);
  window.location.href='/Home';
})
.catch(function(res){ console.log(res) });

}
