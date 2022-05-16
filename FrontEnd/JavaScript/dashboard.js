/*
 Javascript file containing functions for user home page
 Heavily reliant on cookies pushed from login page 
*/

//helper function to get cookie 
function getCookie(name) 
{
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  
//update page to incluede Welcome username
let userElement= document.getElementById('titleBox');
userElement.innerHTML= `<h1>Welcome ${getCookie('username')}</h1>`



/*
 Fucntion to send relevant data to server to update the database when a user submits they have arrived
 Uses fetch() to get database and pass into function to find the space
 Returns a code to deal with error handling 
*/
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
              alert("You have already arrived")
              break;
            }
          default:
          {
            alert("An unexpected error occurred")
          }
          
        } 
      });

}

/*
 Function performs a brute force search on database to check space exists
 Returns code 2 if space is have already arrived
 Returns code 0 if another error occurs
 Or if success wiht run handler
*/
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
              spaceFoundHandler(space, "http://localhost:5000/Home/arrive");
              return 1;
            }
          }
        }
        return 0;
}

//fucntion to send request to update space to occupied or deoccupied 
//if success takes user to new page
const spaceFoundHandler= (space, url)=>
{
  console.log(space);
  //send post request to update db
  fetch(url, {
     
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

/*
 Fucntion to send relevant data to server to update the database when a user submits they have departed
 Uses fetch() to get database and pass into function to find the space
 Returns a code to deal with error handling 
*/

const submitDepart= ()=>
{
  
  fetch('/CDB')
  .then(response => response.json())
  .then(data => 
    {
      let name= getCookie('username');
      let db= data.carParks;
      let code= searchForSpaceB(db, name)
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
            alert("You dont have a space")
            break;
          }
        default:
        {
          alert("An unexpected error occurred")
        }
        
      }     
    });
}

/*
 Function performs a brute force search on database to check space exists and is occupied by user
 Returns code 2 if space is have already arrived
 Returns code 0 if another error occurs
 Or if success will run handler
*/
const searchForSpaceB =(db, name)=>
{
  for (let i=0 ;i< db.length; i++)
        {
          let carPark=db[i]._spaces;
          for (let j=0; j <carPark.length;j++)
          {
            let space=carPark[j];
            if (space._isBooked===name)
            {
              if (!(space._occupied))
              {
                return 2;
              }
            
              space.carPark=db[i]._name;
              spaceFoundHandler(space,"http://localhost:5000/Home/depart");
              return 1;
            }
          }
        }
        return 0;
}
