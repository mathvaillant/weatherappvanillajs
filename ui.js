class UI {
  constructor() {
    this.city = document.querySelector('#w-city')
    this.description = document.querySelector('#w-desc-short')
    this.description = document.querySelector('#w-desc')
    this.icon = document.querySelector('#w-icon')
    this.humidity = document.querySelector('#w-humidity')
    this.feelsLike = document.querySelector('#w-feels-like')
    this.wind = document.querySelector('#w-wind')
  }
  // Show alert
  showAlert(message, style) {
    console.log(message)
  }

  // Display city weather
  displayWeather(weather) {
    console.log(weather)
    // Set icon url
    const iconAttr = `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`

    this.city.innerHTML = `${weather.name}, ${weather.sys.country} <img src="https://www.countryflags.io/${weather.sys.country}/shiny/32.png">`
    this.description.textContent = weather.weather[0].description
    this.icon.setAttribute('src', iconAttr)
    this.humidity.textContent = `Relative humidity: ${weather.main.humidity}%`
    this.feelsLike.textContent = `Feels Like: ${weather.main.feels_like} C°`
    this.wind.textContent = `Wind Speed: ${weather.wind.speed} km/h`

    // Close Modal jQuery
    $('#locModal').modal('hide')
  }
}
