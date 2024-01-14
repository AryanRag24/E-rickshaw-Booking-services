fetch('taxi_data.json')
        .then(response => response.json())
        .then(data => {
            // Process the JSON data
            console.log(data);

            // Example: Display the content in the HTML body
            document.body.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
        })
        .catch(error => console.error('Error fetching the JSON file:', error));