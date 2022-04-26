console.log(document.cookie)

function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
  }

  console.log(getCookie('username'));

  let userElement= document.getElementById('titleBox');
  userElement.innerHTML= `<h1>Welcome ${getCookie('username')}</h1>`