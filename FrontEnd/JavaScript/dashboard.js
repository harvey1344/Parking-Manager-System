console.log(document.cookie)

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  console.log(getCookie('username'));

  let userElement= document.getElementById('titleBox');
  userElement.innerHTML= `<h1>Welcome ${getCookie('username')}</h1>`

  const submitArrival = ()=>
{
    //Search Car Park for users space
    fetch('/CDB')
    .then(response => response.json())
    .then(data => 
      {
        let name= getCookie('username');
        let db= data.carParks;
        let code= searchForSpace(db, name)
        switch (code)
        {
          case 0:
            {
              alert("Please book a space")
              break;
            }
          case 1:
            {
              console.log('Success')
              break;
            }
          case 2:
            {
              alert("You have alreayd arrived")
              break;
            }
          default:
          {
            alert("An unexpected error occuried")
          }
          
        }

       
        
        


        
        
      });

}

const searchForSpace =(db, name)=>
{
  for (let i=0 ;i< db.length; i++)
        {
          let carPark=db[i]._spaces;
          for (let j=0; j <carPark.length;j++)
          {
            let space=carPark[j];
            if (space._isBooked===name)
            {
              if (space._occupied)
              {
                return 2;
              }
            
              space.carPark=db[i]._name;
              spaceFoundHandler(space);
              return 1;
            }
          }
        }
        return 0;
}

const spaceFoundHandler= (space)=>
{
  console.log(space);
  //send post request to update db
  fetch("http://localhost:5000/Home/arrive", {
     
    // Adding method type
    method: "PATCH",
    // Adding body or contents to send
    body: JSON.stringify({
        space    }),
    // Adding headers to the request
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
    
}).then(function(res){
  if (res.statusText==='OK')
  {
    window.location.href='/Thanks'
  }
  else
  {
    alert('Server error, try again later')
  }
})
.then(function(data)
{
  console.log(data);
})
}


