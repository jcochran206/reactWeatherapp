import axios from 'axios';

const API_KEY = '03e15524a809381a5969db25b6a5579f';
const Root_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export  function fetchWeather(city) {
const url = `${Root_URL}&q=${city},us`;
const request = axios.get(url);

  return(
    type: 'FETCH_WEATHER',
    payload: request
  );
}
