const baseURL = "https://api.weatherapi.com/v1/current.json?key=cb7ad45651f5451cb2134153253010";

export const getWeatherData = async (city) => {
    const response = await fetch(`${baseURL}&${city}&aqi=yes`);
    return await response.json();
};