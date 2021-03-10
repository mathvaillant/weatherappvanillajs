class Weather {
  constructor() {
    this.api_key = '246220425251edd8b6c0f1ed15f6fd39'
  }

  async getWeather(city) {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.api_key}`
    )

    const cityData = await response.json()

    return cityData
  }
}
