import axios from 'axios';
import config from '../../config';


const API_KEY = config.MY_KEY;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const URL = `${ROOT_URL}&q=${city},us`; //Restricted to US for now, implement dynamic country code later
  let request = axios.get(URL);

  return {
    type: FETCH_WEATHER,
    payload: request
  };
}