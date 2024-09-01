import React, { useEffect, useState } from "react";
import "./../headerStyle.css";
import SearchBar from "./Search-Bar";
import ShowArea from "./Show-Area";
import { API_KEY } from "./api-key";
const WeatherApp = () => {
    const [submit, setSubmit] = useState(false);
    const [search, setSearch] = useState("algeria");
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const apiKey = API_KEY;
    const url = `https://api.tomorrow.io/v4/weather/forecast?location=${search}&apikey=${apiKey}`;
    const options = {
        method: "GET",
        headers: { accept: "application/json" },
    };

    const fetchWeatherData = async () => {
        setIsLoading(true);
        try {
            const res = await fetch(url, { ...options });
            const result = await res.json();
            // if(result)
            setData(result);
            console.log(result);
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    };
    const handleSearch = () => {
        setSubmit(true);
    };
    useEffect(() => {
        fetchWeatherData();
        setSubmit(false);
    }, [submit]);

    return (
        <div className="weather-app">
            <h1 className="title">Weather App</h1>

            <div className="app-box min-h-screen flex items-center justify-start gap-y-2 flex-col">
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    handleSearch={handleSearch}
                />
                <ShowArea
                    data={data}
                    search={search} />
            </div>
        </div>
    );
};

export default WeatherApp;
