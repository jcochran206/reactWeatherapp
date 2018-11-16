const API_KEY = 'get api key for this app';
const Root_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export  function fetchWeather(city) {
const url = `${Root_URL}&q=${city},us`;
const request = axios.get(url);

  return(
    type: 'FETCH_WEATHER'
    payload: request
  );
}
