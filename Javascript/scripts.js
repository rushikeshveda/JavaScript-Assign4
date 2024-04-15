async function fetchWeather() {
    const apiKey = '9432693024b242efb33204214241504';
    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=New York`;

    try {
        const response = await fetch(apiUrl);
        const data = await response.json();

        const weatherInfo = document.getElementById('weather-info');
        const conditionCode = data.current.condition.code;
        const imageUrl = `https:${data.current.condition.icon}`;

        weatherInfo.innerHTML = `
            <div class="flex items-center">
                <img src="${imageUrl}" alt="Weather Icon" class="w-10 h-10 mr-2">
                <span>${data.current.condition.text}</span>
            </div>
            <div>Temperature: ${data.current.temp_c}°C</div>
            <div>Humidity: ${data.current.humidity}%</div>
            <div>Wind Speed: ${data.current.wind_kph} km/h</div>
            <div>Feels Like: ${data.current.feelslike_c}°C</div>
        `;
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

window.onload = fetchWeather;