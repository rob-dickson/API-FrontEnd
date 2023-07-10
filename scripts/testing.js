
// function to be called onClick
function getInfo() {
    let domain = document.querySelector('#domain').value
    let username = document.querySelector('#username').value
    let password = document.querySelector('#password').value
    let jsonfile = document.querySelector('#jsonfile').value
    let SubscriberId = "7b4c94dc-b43e-4a2d-833a-58a6456148a2"
    let ConsumerID = "1807430a-9b0c-4a10-8ad8-341616d058fa"

    let url = `https://admin.chi.v6.pressero.com/api/site/${domain}/Assets `

    // Retrieve the authentication token
    fetch('https://adminc.pro-matters.com/api/V2/Authentication', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            password: password,
            SubscriberId: SubscriberId,
            ConsumerID: ConsumerID
        })
    })
        .then(response => response.json())
        .then(authData => {
            //console.log(authData);

            // Check if authentication was successful
            if (authData.Token) {
                //console.log(authData.Token);

                // Read the JSON file
                fetch(jsonfile)
                    .then(response => response.json())
                    .then(data => {

                        // Define the delay between each request (in milliseconds)
                        const delay = 2000; // 2sec

                        // Function to send the POST requests with a delay
                        const sendPostRequests = (dataArray, index) => {
                            if (index >= dataArray.length) {
                                // All requests have been sent
                                console.log('All requests have been sent.');
                                return;
                            }

                            const obj = dataArray[index];
                            const json = JSON.stringify(obj);

                            fetch(url, {
                                method: 'POST',
                                headers: {
                                    'Content-Type': 'application/json',
                                    'Authorization': 'token ' + authData.Token
                                },
                                body: json
                            })
                                .then(response => response.json())
                                .then(responseData => {

                                    // Handle the response data
                                    console.log(responseData);

                                    // Increment the index and send the next request after the delay
                                    setTimeout(() => {
                                        sendPostRequests(dataArray, index + 1);
                                    }, delay);
                                })
                                .catch(error => {

                                    // Handle any errors that occurred during the POST request
                                    console.error('Error:', error);

                                    // Increment the index and send the next request after the delay
                                    setTimeout(() => {
                                        sendPostRequests(dataArray, index + 1);
                                    }, delay);
                                });
                        };

                        // Start sending the POST requests
                        sendPostRequests(data, 0);
                    })
                    .catch(error => {

                        // Handle any errors that occurred while reading the JSON file
                        console.error('Error:', error);
                    });
            } else {

                // Handle authentication failure
                console.error('Authentication failed:', authData.error);
            }
        })
        .catch(error => {

            // Handle any errors that occurred during the authentication process
            console.error('Error:', error);
        });

}
