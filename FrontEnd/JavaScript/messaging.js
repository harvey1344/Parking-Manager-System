/*
function messageUser()
{
    let userToMessage = document.getElementById('msg').elements[0].value;
    let message = document.getElementById('msg').elements[1].value;

    if(userToMessage === '' || message === '')
    {
        badUser();
    }
    console.log('userToMessage: ' + userToMessage);
    console.log('message: ' + message);

    const path ='/User-Management/message';

        $.ajax ({
            url: path,
            body: JSON.stringify({
                user: userToMessage,
                message: message
                }),
            method: 'POST',
            contentType: 'application/json',
            success: function (rt) {
                console.log('returned: ' + rt)
                // if the path being passed in is /formsend, do this
                if (path === '/User-Management/message') {
                    // if the server returns a response (exists) then accountExists function will be called in wp.js
                    if (rt === 'exists') {
                        accountExists();
                    }
                    // if noData was returned (from app.js) then call method that displays a warning on screen
                    else if (rt === 'noData') {
                        noData();
                    }

                    else {

                    }
                }
            }
        })
}


*/


