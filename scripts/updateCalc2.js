// function to be called onClick
function getInfo() {
    let username = document.querySelector('#username').value;
    let password = document.querySelector('#password').value;
    let jsonfile = document.querySelector('#jsonfile').value;
    let idFile = document.querySelector('#idfile').value;
    let SubscriberId = "7b4c94dc-b43e-4a2d-833a-58a6456148a2";
    let ConsumerID = "1807430a-9b0c-4a10-8ad8-341616d058fa";

    // Base URL for the API
    let baseUrl = `https://admin.chi.v6.pressero.com/api/Calculators`;

    // Retrieve the authentication token
    fetch('https://adminc.pro-matters.com/api/V2/Authentication', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
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
            console.log(authData);
            // Check if authentication was successful
            if (authData.Token) {
                console.log(authData.Token);

                // Read the JSON file for the main data
                fetch(jsonfile, {
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': '*'
                    }
                })
                    .then(response => response.json())
                    .then(data => {
                        // Read the JSON file for the IDs
                        fetch(idFile, {
                            headers: {
                                'Content-Type': 'application/json',
                                'Access-Control-Allow-Origin': '*'
                            }
                        })
                            .then(response => response.json())
                            .then(idData => {
                                // Handle the response data
                                console.log(idData);
                                // Define the delay between each request (in milliseconds)
                                const delay = 2000; // 2sec

                                // Function to send the PUT requests with a delay
                                const sendPutRequests = (dataArray, idArray, index) => {
                                    if (index >= dataArray.length) {
                                        // All requests have been sent
                                        console.log('All requests have been sent.');
                                        let done = document.querySelector('#done');
                                        done.innerHTML = 'Engine upload complete';
                                        done.style.color = "#d22a30";
                                        done.style.backgroundColor = "lightgrey";
                                        done.style.fontSize = "2em";
                                        done.style.marginRight = "auto";
                                        done.style.marginLeft = "auto";
                                        return;
                                    }

                                    const obj = dataArray[index];
                                    const json = JSON.stringify(obj);
                                    const id = idArray[index]; // Get the corresponding ID

                                    // Construct the URL with the ID
                                    const url = `${baseUrl}/${id}`;

                                    fetch(url, {
                                        method: 'PUT', // Change to PUT
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

                                            let done = document.querySelector('#done');
                                            let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
                                            done.innerHTML = 'Calculators Uploading...';
                                            done.style.color = randomColor;
                                            done.style.backgroundColor = "white";

                                            // Increment the index and send the next request after the delay
                                            setTimeout(() => {
                                                sendPutRequests(dataArray, idArray, index + 1);
                                            }, delay);
                                        })
                                        .catch(error => {
                                            // Handle any errors that occurred during the PUT request
                                            console.error('Error:', error);

                                            // Increment the index and send the next request after the delay
                                            setTimeout(() => {
                                                sendPutRequests(dataArray, idArray, index + 1);
                                            }, delay);
                                        });
                                };

                                // Start sending the PUT requests
                                sendPutRequests(data, idData, 0);
                            })
                            .catch(error => {

                                // Handle any errors that occurred while reading the JSON file
                                console.error('Error:', error);
                            });
                    }).catch(error => {

                        // Handle authentication failure
                        console.error('Authentication failed:', authData.error);
                    }
                    )
            }
        })
}

