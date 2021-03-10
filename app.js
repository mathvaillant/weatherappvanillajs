// Get class events
const weather = new Weather()
const ui = new UI()

// Add save changes event
document.querySelector('#w-change-btn').addEventListener('click', getCity)

// getCity event
function getCity(e) {
  const cityName = document.querySelector('#city').value

  if (cityName !== '') {
    weather.getWeather(cityName).then((data) => {
      if (data.cod === '404') {
        ui.showAlert(data.message, 'alert-danger')
      } else {
        ui.displayWeather(data)
      }
    })
  } else {
    alert('enter a city name')
  }

  e.preventDefault()
}
