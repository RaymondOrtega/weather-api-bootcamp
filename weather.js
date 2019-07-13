var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0');
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
document.getElementById('date').innerHTML = today
// sets date to today's date

document.querySelector("button").addEventListener("click", function() {
  const inputValue = document.querySelector("input").value
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&APPID=efde7c3602e51e82abca166b2b3c6a2c`)
    .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
    .then(response => {

      let fahrenheit = (response.main.temp - 273.15) * 9 / 5 + 32 // converts K to Farenheit
      document.getElementById('weather').innerHTML = "Weather: " + response.weather[0].description
      document.getElementById('temp').innerHTML = "Temperature: " + Math.ceil(fahrenheit) + "F"
      document.getElementById('humidity').innerHTML = "Humidity: " + response.main.humidity + "%"
    })
    .catch(err => {
      console.log(`error ${err}`)
      alert("sorry, there are no results for your search")
    });

});
