
// called in registration if the account being added already exists

function messageSuccess(text)
{
	let alertPara = document.createElement('p');
	alertPara.textContent = text;
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

function messageFail(text)
{
	let alertPara = document.createElement('p');
	alertPara.textContent = text;
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

function resetForm(){
	location.reload();
}
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

function userBooked()
{
	let alertPara = document.createElement('p');
	alertPara.textContent = 'Cannot remove a user who already has a space booked/occupied!';
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

function saveMessage()
{
	// collects data from the form
	const form = document.querySelector("form");
	const formData = new FormData(form);
	console.log(formData);
	// create an object from the form data
	const data = Object.fromEntries(formData);
	console.log('Data from form: ' + data);
	// for use in the post command
	const path = '/user-management/message'
	// calls post method with the path and the form data

	post(path,data)
}

function getCookie(name)
{
	const value = `; ${document.cookie}`;
	const parts = value.split(`; ${name}=`);
	if (parts.length === 2) return parts.pop().split(';').shift();
}



function userSaveMessage()
{
	let userElement= document.getElementById('titleBox2');
	userElement.innerHTML= `<h5>${getCookie('username')}</h5>`
	let user = document.getElementById('titleBox2').textContent;
	console.log('current user: ' + user);

	// collects data from the form
	const form = document.querySelector("form");
	const formData = new FormData(form);
	console.log(formData);
	// create an object from the form data
	const data = Object.fromEntries(formData);
	console.log('Data from form: ' + data);
	// for use in the post command
	const path = '/User-management/userMessage'


	// calls post method with the path and the form data

	postMessageToAdmin(path,data,user);
}

function receiveMessage()
{
	// collects data from the form
	const form = document.querySelector("form");
	const formData = new FormData(form);
	console.log(formData);
	// create an object from the form data
	const data = Object.fromEntries(formData);
	console.log('Data from form: ' + data);
	// for use in the post command
	const path = '/user-management/receive'

	// calls post method with the path and the form data

	post(path,data)
}

function userReceiveMessage()
{
	let userElement= document.getElementById('titleBox2');
	userElement.innerHTML= `<h5>${getCookie('username')}</h5>`
	let user = document.getElementById('titleBox2').textContent;
	console.log('current user: ' + user);
	// collects data from the form
	const form = document.querySelector("form");
	const formData = new FormData(form);
	console.log(formData);
	// create an object from the form data
	const data = Object.fromEntries(formData);
	console.log('Data from form: ' + data);
	// for use in the post command
	const path = '/user-management/userReceive'

	// calls post method with the path and the form data

	postMessageToAdmin(path,data,user)
}

function displayGraph()
{
	const path ='/Car-Parks/graph';

	document.getElementById("displayGraph").disabled = true;

	document.getElementById("map").style.visibility = "hidden";

	console.log('in refreshJSON')

	$.ajax({
		url: path,
		method: 'POST',
		success: function (rt) {
			if (path === '/Car-Parks/graph') {

				//console.log('rt: ' + rt);

				let name = [];
				let data = []

				for(let i = 0; i < rt.length; i = i+2){
					name.push(rt[i]);
				}
				for(let i = 1; i < rt.length; i = i+2){
					data.push(rt[i]);
				}

				//console.log('name: ' + name);
				//console.log('data: ' + data);

                    const options = {
                        chart: {
                            height: 350,
                            type: 'bar',
                            background: 'f4f4f4',
                            foreColor: '#FFFFFF'
                        },
						dataLabels: {
							background: {
								enabled: true,
								foreColor: '#000',
							},
						},
                        series: [{
                                data: data
                            }],
                        xaxis: {
							categories: name,
							title: {
								text: 'Car Parks',
								style: {
									fontSize: '12px',
									fontFamily: 'Helvetica, Arial, sans-serif',
									fontWeight: 600,
								},
							},
						},
						yaxis: {
							min: 0,
							max: 100,
							title: {
								text: 'Utilisation (%)',
								rotate: -90,
								style: {
									fontSize: '12px',
									fontFamily: 'Helvetica, Arial, sans-serif',
									fontWeight: 600,
								},
							},
							tooltip: {
								enabled: true,
								offsetX: 0,
							},

						},
						title: {
							text: 'Percentage Space Utilisation Across Registered Car Parks'
						},
						fill: {
							colors: ['#FFFFFF']
						},
						tooltip: {
							enabled: false,
						}
                    }

                    const chart = new ApexCharts(
                        document.getElementById("graph"),
                        options
                    );

                    chart.render();
                }

			}
	})
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
	const textArray = ['Username','Password','Space booked ID'];
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

	document.getElementById("map").style.visibility = "hidden";

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

function refreshCarParks2()
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
	const textArray = ['Name','Location','Max Capacity','Price Per Hour (£)','Number of Available Spaces','Space IDs Available'];
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
					console.log(json)

					window.location.href = "/"
				}

			}

			// if the path being passed in is /loginSend, do this
			else if (path === '/loginSend'){

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
					carParkAddSuccess();
					console.log(json)
				}
			}

			else if (path === '/Car-Parks/remove'){
				// if the server does not return a response then we call badLogin() function within wp.js
				 if (rt==='badData') {
					badPark();
				}
				else {
					removalSuccess();
				}
			}

			else if (path === '/User-Management/remove'){
				// if the server does not return a response then we call badLogin() function within wp.js
				if (rt==='noMatch') {
					badUser();
				}
				else if (rt=== 'ok') {
					removalSuccessUser();
				}
				if (rt === 'found user'){
					userBooked();
				}
			}

			else if (path === '/user-management/message'){
				// if the server does not return a response then we call badLogin() function within wp.js
				if (rt==='noMatch') {
					badUser();
				}
				else if (rt=== 'ok') {
					messageSuccess('Message successfully sent to user!');
				}
				else if (rt === 'no message'){
					messageFail('Cannot send a message with no body!')
				}
			}


			else if (path === '/user-management/receive'){
				// if the server does not return a response then we call badLogin() function within wp.js
				if (rt==='noMatch') {
					messageFail('No message history with this user');
				}
				else {
					console.log('rt was: ' + rt);
					let changeEle = document.getElementById('changing').textContent = 'Previous Message Was:'
					document.getElementById('changing').style.color = 'red';
					let textArea = document.createElement("textarea");
					document.getElementById('changing').appendChild(textArea);
					textArea.textContent = rt;
				}
			}

			else if (path === '/User-management/userMessage'){

				if (rt === 'ok') {
					messageSuccess('Message successfully sent to admin!');
				}
			}

		}, error: function(){
			console.log('error')
			alert("Error connecting to the server")
		}
	})
}

function postMessageToAdmin(path, data, user)
{
	console.log(path)

	$.ajax ({
		url: path,
		data: JSON.stringify({
			data: data,
			user: user
		}),
		method: 'POST',
		contentType: 'application/json',
		success: function (rt) {

			if (path === '/User-management/userMessage'){
				if (rt === 'ok') {
					messageSuccess('Message successfully sent to admin!');
				}
				if (rt === 'no message'){
					messageFail('Cannot send a message with no body!');
				}
			}

			else if (path === '/user-management/userReceive'){

				if (rt==='noMatch') {
					messageFail('No message history with this user');
				}
				else {
					console.log('rt was: ' + rt);
					let changeEle = document.getElementById('changing').textContent = 'Previous Message Was:'
					document.getElementById('changing').style.color = 'red';
					let textArea = document.createElement("textarea");
					document.getElementById('changing').appendChild(textArea);
					textArea.textContent = rt;
				}
			}


		}, error: function(){
			console.log('error')
			alert("Error connecting to the server")
		}
	})
}

function saveCarPark()
{
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

