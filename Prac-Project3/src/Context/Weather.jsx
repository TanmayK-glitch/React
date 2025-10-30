import { createContext, useContext, useState } from "react";

const weatherContext = createContext(null);

export const useWeather = () => {
    return useContext(weatherContext);
};

export const WeatherProvider = (props) => {
    return <weatherContext.Provider>
        {props.children}
    </weatherContext.Provider>
}