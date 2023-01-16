import React, { useState, useEffect } from 'react'
import '../css/city.css'
import sunny from '../images/sun.png'
import Rainy from '../images/rain.png'
import cloudy from '../images/clouds.png'
import thunder from '../images/thunder.png'
import extra from '../images/cloud-drizzle.svg'
import sunrise from '../images/sunset.png'
import sunset from '../images/sea.png'
import Nav from './Nav'
import CityWeather from './CityWeather'
export default function City() {
    const [cityDescription, setcityDescription] = useState("")
    const [cityWindspeed, setcitywindspeed] = useState("")
    const [cityHumidity, setcityHumidity] = useState("")
    const [cityfeelslike, setcityfeelslike] = useState("")
    const [cityimageicon, setcityimage] = useState("")
    const [cityday, setcityday] = useState("")
    const [cityMonth, setcitymonth] = useState("")
    const [city, setcity] = useState('bangalore')
    // eslint-disable-next-line
    const [maxtemp, setmaxtemp] = useState('')
    const [mintemp, setmintemp] = useState('')
    const [cityname, setcityname] = useState('')
    const [sunsettime, setsunsettime] = useState('')
    const [sunrisetime, setsunrisetime] = useState('')
    async function getcityweather() {
        let response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=25efbc6c2c5e3b1d865a771ca82fd158`)
        let data = await response.json()
        console.log(data)
        console.log(data.sys.sunset)
        console.log(data.sys.sunrise)
        let sunsetIst = unixtoIst(data.sys.sunset)
        setsunsettime(sunsetIst)
        let sunriseIst = unixtoIst(data.sys.sunrise)
        setsunrisetime(sunriseIst)
        let citytemperature = data.main
        let citywind = data.wind;
        let cityWeather = data.weather
        setcityname(data.name)
        setmaxtemp(citytemperature.temp_max)
        setmintemp(citytemperature.temp_min)
        setcityDescription(cityWeather[0].main)
        setcitywindspeed(citywind.speed)
        setcityHumidity(citytemperature.humidity)
        setcityfeelslike(citytemperature.feels_like)
        let day = new Date();
        let today = day.getDay()
        let month = day.getMonth()
        setcityday(today)
        if (today === 0) {
            setcityday("sun")
        } else if (today === 1) {
            setcityday("Mon")
        }
        else if (today === 2) {
            setcityday("Tue")
        }
        else if (today === 3) {
            setcityday("wed")
        }
        else if (today === 4) {
            setcityday("Thu")
        }
        else if (today === 5) {
            setcityday("fri")
        }
        else if (today === 6) {
            setcityday("sat")
        }
        else {
            setcityday("funday")
        }
        if (month === 0) {
            setcitymonth("Jan")
        } else if (month === 1) {
            setcitymonth("feb")
        }
        else if (month === 2) {
            setcitymonth("Mar")
        }
        else if (month === 3) {
            setcitymonth("apr")
        }
        else if (month === 4) {
            setcitymonth("may")
        }
        else if (month === 5) {
            setcitymonth("jun")
        }
        else if (month === 6) {
            setcitymonth("july")
        }
        else if (month === 7) {
            setcitymonth("aug")
        }
        else if (month === 8) {
            setcitymonth("sep")
        }
        else if (month === 9) {
            setcitymonth("oct")
        } else if (month === 10) {
            setcitymonth("nov")
        }
        else if (month === 11) {
            setcitymonth("Dec")
        }
        else {
            setcitymonth("funmonth")
        }
        if (cityDescription.includes("Rain")) {
            setcityimage(Rainy)
        } else if (cityDescription.includes("Clear")) {
            setcityimage(sunny)
        }
        else if (cityDescription.includes("Clouds")) {
            setcityimage(cloudy)
        }
        else if (cityDescription.includes("Haze")) {
            setcityimage(extra)
        }
        else {
            setcityimage(thunder)
        }
    }

    useEffect(() => {
        getcityweather()
        // eslint-disable-next-line
    }, [])

    function unixtoIst(unix_timestamp) {
        var date = new Date(unix_timestamp * 1000);
        var indiantime = date.toLocaleTimeString()
        console.log(indiantime)
        return indiantime
    }
    return (
        <>
            <Nav showForm={true} city={city} setcityValue={setcity} getWeatherdetail={getcityweather}></Nav>
            <h1 className='text-white text-center my-1 display-3'>{cityname}</h1>
            <CityWeather imageicon={cityimageicon} Windspeed={cityWindspeed} Humidity={cityHumidity} feelslike={cityfeelslike} day={cityday} Month={cityMonth} Description={cityDescription} Temperature={mintemp} />
            <div className="conatiner daydetails">
                <div className="imgcontainer">
                    <img alt='sunrise' src={sunrise}></img>
                    <div className='d-flex justify-content-between align-items-center'><h4>{sunrisetime}</h4>
                        <h5>Sunrise</h5></div>
                </div>
                <div className="imgcontainer">
                    <img alt='sunset' src={sunset}></img>
                    <div className='d-flex justify-content-between align-items-center my-2'>
                        <h4>{sunsettime}</h4>
                        <h5>Sunset</h5>
                    </div>
                </div>
            </div>
        </>
    )
}
