import React, { useState } from 'react'
import './../headerStyle.css'
import SearchBar from './Search-Bar'
import ShowArea from './Show-Area'
const WeatherApp = () => {
    const [search, setSearch] = useState("");
    const handleSearch = () => {

    }
    return (
        <div className='weather-app'>
            <h1 className='title'>Weather App</h1>

            <div className="app-box min-h-screen flex items-center justify-start gap-y-2 flex-col">
                <SearchBar
                    search={search}
                    setSearch={setSearch}
                    handleSearch={handleSearch}
                />
                <ShowArea />
            </div>
        </div>
    )
}

export default WeatherApp