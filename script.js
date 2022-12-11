const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '486f22a170msh216059ab1ea90ebp130b21jsn8cca64b996a1',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWeather = (city) => {
	cityName.innerHTML = city
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
	.then(response => response.json())
	.then(response => {

			console.log(response)

			
			temp.innerHTML = response.temp
			temp1.innerHTML = response.temp
			feels_like.innerHTML = response.feels_like
			min_temp.innerHTML = response.min_temp
			humidity.innerHTML = response.humidity
			humidity1.innerHTML = response.humidity
			max_temp.innerHTML = response.max_temp
			wind_speed.innerHTML = response.wind_speed
			wind_speed1.innerHTML = response.wind_speed
			wind_degrees.innerHTML = response.wind_degrees
			sunrise.innerHTML = response.sunrise
			sunset.innerHTML = response.sunset
		})
		.catch(err => console.error(err));
}

submit.addEventListener("click", (e) =>{
	e.preventDefault()
	getWeather(city.value)
})
getWeather("Pune")