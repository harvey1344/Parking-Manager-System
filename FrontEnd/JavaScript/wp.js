

// called in registration if the account being added already exists
function accountExists()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'Account already exists';
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

// called if incorrect login details are entered
function badLogin()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'Account details could not be found';
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

// called if no details are entered
function noData()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'Fields indicated by an asterisk cannot be left blank';
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

//creat car park form
// called in registration if the account being added already exists
function carParkExists()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'Car Park already exists';
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

function badPark()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'Car Park could not be found';
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

function badUser()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'User with that username could not be found';
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
function carParkAddSuccess()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'Car Park was successfully added!';
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
function removalSuccess()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'Car Park was successfully removed!';
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

function removalSuccessUser()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'User was successfully Deleted from records!';
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
// called by register.html - converts data to JSON and calls post function with this data and the '/formsend' path
function savePage()
{
	alert('in the function savePage')
	// collects data from the form
	const form = document.querySelector("form");
	const formData = new FormData(form);
	console.log(formData);
	// create an object from the form data
	const data = Object.fromEntries(formData);
	console.log('Data from form: ' + data);
	// for use in the post command
	const path = '/formSend'

	// calls post method with the path and the form data

	post(path,data)
}

// called by login.html - converts data to JSON and calls post function with this data and the '/loginSend' path
function saveLogin()
{
	alert('in the function saveLOGIN')
	// collects data from the form
	const form = document.querySelector("form");
	const formData = new FormData(form);
	console.log(formData);
	// create an object from the form data
	const data = Object.fromEntries(formData);
	console.log(data);
	// for use in the post command
	const path = '/loginSend'

	// calls post method with the path and the form data
	post(path,data)
}

function saveAdminLogin()
{
	alert('in the function saveADMINlogin')
	// collects data from the form
	const form = document.querySelector("form");
	const formData = new FormData(form);
	console.log(formData);
	// create an object from the form data
	const data = Object.fromEntries(formData);
	console.log(data);
	// for use in the post command
	const path = '/adminSend'

	// calls post method with the path and the form data
	post(path,data)
}

function removeCarPark()
{
	console.log("In remvoe")
	alert('in the function remove')
	// collects data from the form
	const form = document.querySelector("form");
	const formData = new FormData(form);
	console.log(formData);
	// create an object from the form data
	const data = Object.fromEntries(formData);
	console.log(data);
	// for use in the post command
	const path = '/Car-Parks/remove'

	// calls post method with the path and the form data
	post(path,data)
}

function removeUser()
{
	alert('in the function removeUser')
	// collects data from the form
	const form = document.querySelector("form");
	const formData = new FormData(form);
	console.log(formData);
	// create an object from the form data
	const data = Object.fromEntries(formData);
	console.log(data);
	console.log('in removeUser');
	// for use in the post command
	const path = '/User-Management/remove'

	// calls post method with the path and the form data
	post(path,data)
}

function refreshUsers()
{
	const path ='/User-Management/display';

	console.log('in refreshJSON')

	$.ajax({
		url: path,
		method: 'POST',
		success: function (rt) {
			if (path === '/User-Management/display') {
				// if the server returns a response (exists) then accountExists function will be called in wp.js

				console.log(rt);

				refreshUserDataHandler(rt)
			}
		}
	})
}

function refreshUserDataHandler(data){
	console.log('in data handle, data: ' + data);

	// disallows multiple clicks of button
	document.getElementById("refreshFunctionButton").disabled = true;

	// textFill is an empty div in userList.html placed there so we can append elements to it
	const divTextFill = document.getElementById('textFill');

	// Generates Username and Password HEADINGS for the table
	const textArray = ['Username','Password'];
	for(let i = 0; i < textArray.length; i++){
		let divElement = document.createElement('titleDiv');
		divTextFill.appendChild(divElement);
		// if you ever want to change the style of these elements, edit jsTitleDiv in adminDashStyle.css
		divElement.classList.add('jsTitleDiv');

		divElement.textContent = textArray[i];
	}

	// Generates the table CSS for the dynamic user data records
	for(let i = 0; i < data.length; i++){

		let divElement = document.createElement('dataArrayDiv');
		divTextFill.appendChild(divElement);
		// if you ever want to change the style of these elements, edit jsDiv in adminDashStyle
		// IF WE ADD A PASSWORD FIELD FOR USERS: its important the CSS gets changed to 33%
		// otherwise it will not fit on the page
		divElement.classList.add('jsDiv');

		// username and pass in one line
		divElement.textContent = data[i];

	}
}

function refreshCarParks()
{
	const path ='/Car-Parks/display';

	console.log('in refreshJSON')

	$.ajax({
		url: path,
		method: 'POST',
		success: function (rt) {
			if (path === '/Car-Parks/display') {
				// if the server returns a response (exists) then accountExists function will be called in wp.js

				console.log(rt);

				refreshCarParkDataHandler(rt)
			}
		}
	})
}

function refreshCarParkDataHandler(data){
	console.log('in data handle, data: ' + data);

	// disallows multiple clicks of button
	document.getElementById("refreshFunctionButton").disabled = true;

	// textFill is an empty div in userList.html placed there so we can append elements to it
	const divTextFill = document.getElementById('textFill');

	// Generates Username and Password HEADINGS for the table
	const textArray = ['Name','Location','Max Capacity','Price Per Hour (£)','Number of Available Spaces'];
	for(let i = 0; i < textArray.length; i++){
		let divElement = document.createElement('titleDiv');
		divTextFill.appendChild(divElement);
		// if you ever want to change the style of these elements, edit jsTitleDiv in adminDashStyle.css
		divElement.classList.add('jsParkTitleDiv');

		divElement.textContent = textArray[i];
	}

	// Generates the table CSS for the dynamic user data records
	for(let i = 0; i < data.length; i++){

		let divElement = document.createElement('dataArrayDiv');
		divTextFill.appendChild(divElement);
		// if you ever want to change the style of these elements, edit jsDiv in adminDashStyle
		// IF WE ADD A PASSWORD FIELD FOR USERS: its important the CSS gets changed to 33%
		// otherwise it will not fit on the page
		divElement.classList.add('jsParkDiv');

		// username and pass in one line
		divElement.textContent = data[i];

	}
}


// posts the data to the URL specified by 'url' (handled server side in app.js)
function post(path, data)
{
	console.log(path)
	alert('in post')
	const json = JSON.stringify(data);

	$.ajax ({
		url: path,
		data: json,
		method: 'POST',
		contentType: 'application/json',
		success: function (rt) {
			//console.log(rt)
			// if the path being passed in is /formsend, do this
			if (path === '/formSend') {
				// if the server returns a response (exists) then accountExists function will be called in wp.js
				if (rt === 'exists'){
					accountExists();
				}
				// if noData was returned (from app.js) then call method that displays a warning on screen
				else if (rt === 'noData') {
					noData();
				}
				// if nothing is returned, navigate to login page
				else{
					alert('into path === /formSend')
					console.log(json)
					alert('JSON: ' + json)

					window.location.href = "/"
				}

			}

			// if the path being passed in is /loginSend, do this
			else if (path === '/loginSend'){
				alert("in loginSend within post")

				// if the server returns a response (exists) then we navigate to dashboard
				if (rt === 'goodLogin'){
					let myForm = document.getElementById('login');
					//del prev cookie if exist
					document.cookie = "username= ; expires = Thu, 01 Jan 1970 00:00:00 GMT"
					//new cookie
					document.cookie=`username=${myForm.elements[0].value}`




					window.location.href = "/Home"
				}
				// if the server does not return a response then we call badLogin() function within wp.js
				else if (rt==='badLogin') {
					badLogin();
				}
				else if (rt==='noData')
				{
					noData();
				}
			}

			else if (path === '/adminSend'){
				alert("in adminSend within post")

				// if the server returns a response (exists) then we navigate to dashboard
				if (rt === 'exists'){
					window.location.href = "/Admin"
				}
				// if the server does not return a response then we call badLogin() function within wp.js
				else {
					badLogin();
				}
			}

			// if the path being passed in is /adminDashboard/addCarPark, do this
			else if (path === '/Car-Parks/add') {
			// if the server returns a response (exists) then accountExists function will be called in wp.js
				if (rt === 'exists') {
					carParkExists();
					}
				// if noData was returned (from app.js) then call method that displays a warning on screen
				else if (rt === 'cpNoData') {
					noData();
				}
				else if (rt === 'ok'){
					alert('added!')
					carParkAddSuccess();
					console.log(json)
				}
			}

			else if (path === '/Car-Parks/remove'){
				alert("in removeParkSend within post")
				// if the server does not return a response then we call badLogin() function within wp.js
				 if (rt==='badData') {
					badPark();
				}
				else {
					removalSuccess();
				}
			}

		

			else if (path === '/User-Management/remove'){
				alert("in user remove within post");
				// if the server does not return a response then we call badLogin() function within wp.js
				if (rt==='noMatch') {
					badUser();
				}
				else if (rt=== 'ok') {
					removalSuccessUser();
				}
			}

			
		}, error: function(){
			console.log('eorr')
			alert("Error connecting to the server")
		}
	})
}



function saveCarPark()
{
	alert('in the function saveCarPark')
	// collects data from the form
	const form = document.querySelector("form");
	const formData = new FormData(form);
	console.log(formData);
	// create an object from the form data
	const data = Object.fromEntries(formData);
	console.log(data);
	// for use in the post command
	const path = '/Car-Parks/add'

	// calls post method with the path and the form data
	post(path,data)
}

// reset button for the form
function onResetClick()																		// function creates a red warning paragraph on screen to let user know they have reset the form
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'Form has been reset';											// paragraph CSS styles
	alertPara.style.cssText = 'color: red';
	alertPara.style.textAlign = 'center';
	alertPara.style.backgroundColor = '#dedede';
	let resetElement = document.querySelector('legend');
	resetElement.parentNode.insertBefore(alertPara, resetElement.nextSibling);
	resetButton.removeEventListener('click', onResetClick);									// removes event listener so user cannot keep generating text on screen
	window.scrollTo(																		// scrolls window to top in order to bring attention to the message
		{
			top: 0,
			left: 0,
			behavior: 'smooth'
		});
}

const resetButton = document.querySelector('#reset');										// on the id reset (on form page)
resetButton.addEventListener('click', onResetClick);

function success(json)
{
	console.log(json);
}

function onResponse(json)
{
	return json.json()
}

function onError(error)
{
	console.log('Error : ' + error);
}


const form = document.querySelector("form");
form.addEventListener("click",function(event){
	event.preventDefault()
  });



    