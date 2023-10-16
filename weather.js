function getWeather() {
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    fetch('http://localhost:8081/getweather', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ city: city }),
        
    })
    .then(response => console.log(response.body))
    .then(data => {
        document.getElementById('minTemp').innerText = `${data["Minimum Temprature"]} °C`;
        document.getElementById('maxTemp').innerText = `${data["Maximum Temprature"]} °C`;
    })
    .catch(error => {
        alert('Error fetching weather. Please try again.');
        console.error('Error:', error);
    });
}
