import React from 'react'
import { weartherImg, weatherCode } from './weather-code';

const ShowArea = ({data,search}) => {
    const date =new Date();

    const ronudNumber=(num)=>{
        return Math.round(num)
    }
   
  return (
    <div className="show-area border flex flex-col bg-white rounded-md p-4 w-full max-w-xs">
    <div className="font-bold text-xl capitalize">{search}</div>
    <div className="text-sm text-gray-500">{date.toDateString()}</div>
    <div className="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
        {/* <svg className="w-32 h-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg> */}
        <img src={weartherImg[data.timelines.daily[date.getDay()].values.weatherCodeMax]} alt={data.timelines.daily[date.getDay()].values.weatherCodeMax} srcSet="" />
    </div>
    <div className="flex flex-row items-center justify-center mt-6">
        <div className="font-medium text-6xl">{ronudNumber(data.timelines.daily[date.getDay()].values.temperatureAvg)}°</div>
        <div className="flex flex-col items-center ml-6">
            <div>{weatherCode[data.timelines.daily[date.getDay()].values.weatherCodeMax]}</div>
            <div className="mt-1">
                <span className="text-sm"><i className="far fa-long-arrow-up"></i></span>
                <span className="text-sm font-light text-gray-500">{ronudNumber(data.timelines.daily[date.getDay()].values.temperatureMax)}°C</span>
            </div>
            <div>
                <span className="text-sm"><i className="far fa-long-arrow-down"></i></span>
                <span className="text-sm font-light text-gray-500">{ronudNumber(data.timelines.daily[date.getDay()].values.temperatureMin)}°C</span>
            </div>
        </div>
    </div>
    <div className="flex flex-row justify-between mt-6">
        <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Wind</div>
            <div className="text-sm text-gray-500">{ronudNumber(data.timelines.daily[date.getDay()].values.windSpeedAvg)
}k/h</div>
        </div>
        <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Humidity</div>
            <div className="text-sm text-gray-500">{ronudNumber(data.timelines.daily[date.getDay()].values.humidityAvg)}%</div>
        </div>
        <div className="flex flex-col items-center">
            <div className="font-medium text-sm">Visibility</div>
            <div className="text-sm text-gray-500">{ronudNumber(data.timelines.daily[date.getDay()].values.visibilityAvg)}km</div>
        </div>
    </div>
</div>
  )
}

export default ShowArea