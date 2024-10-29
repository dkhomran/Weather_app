import axios from "axios";
import {apiKey} from "../constants";


const forecostEndpoint = params => `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}&aqi=no&alerts=no`


const locationsEndpoint = params => `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;


const apiCall = async (endpoint) => {
    console.log("Requesting URL:", endpoint); // Add this line for debugging
    const options = {
        method: 'GET',
        url: endpoint
    }
    try {
        const response = await axios.request(options);
        return response.data;
    } catch (e) {
        console.log("Error:", e);
        return null;
    }
}

export const fetchWeatherForecast = params => {
    return apiCall(forecostEndpoint(params))
}

export const fetchLocations  = params => {
    return apiCall(locationsEndpoint(params))
}