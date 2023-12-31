import axios from 'axios';

// API key for OpenWeatherMap
const APIKey = '227c18c04734a077388738019aae8744';

// Function to get current weather data
export const getWeatherData = async () => {
    try {
        // Make an HTTP GET request to the OpenWeatherMap API for current weather data
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?lat=40.7831&lon=-73.9712&appid=${APIKey}`
        );
        // Log a message indicating that the API call was made
        console.log('API Called');
        // Return the retrieved weather data
        return data;
    } catch (error) {
        // Log any errors that occur during the API call
        console.log(error);
    }
};

// Function to get weather forecast data
export const getWeatherForeCast = async () => {
    try {
        // Make an HTTP GET request to the OpenWeatherMap API for weather forecast data
        const { data } = await axios.get(
            `https://api.openweathermap.org/data/2.5/forecast?lat=40.7831&lon=-73.9712&appid=${APIKey}`
        );
        // Return the retrieved forecast data
        return data;
    } catch (error) {
        // Log any errors that occur during the API call
        console.log(error);
    }
};
