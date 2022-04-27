
console.log("workign")
const sendRequest= ()=>
{
    let carpark= document.getElementById('request').elements[0].value;
    let space= document.getElementById('request').elements[1].value;
    console.log(carpark);

    fetch("http://localhost:5000/space", {
     
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
 
// Converting to JSON
.then(response => response.json())
// Displaying results to console
.then(json => console.log(json));
}

