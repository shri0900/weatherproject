function getWeather() {
    var city = document.getElementById("city").value;
  
    // Make an HTTP request to the MuleSoft flow
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://weathermaster.us-e2.cloudhub.io/getweather");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify({
      city: city
    }));
  
    // Handle the response from the MuleSoft flow
    xhr.onload = function() {
      if (xhr.status === 200) {
        var weatherData = JSON.parse(xhr.responseText);
  
        // Display the weather data on the page
        document.getElementById("weather").innerHTML = "Minimum Temprature: " + weatherData.Minimum_Temprature + "°C";
        document.getElementById("weather").innerHTML += "<br>Maximum Temprature: " + weatherData.Maximum_Temprature + "°C";
      } else {
        alert("Error getting weather data");
      }
    };
  }
  