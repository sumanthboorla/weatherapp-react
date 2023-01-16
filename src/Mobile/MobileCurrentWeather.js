import React, { useState, useEffect } from 'react'
import './Mobile.css'
import sunny from '../images/sun.png'
import Rainy from '../images/rain.png'
import cloudy from '../images/clouds.png'
import thunder from '../images/thunder.png'
import extra from '../images/cloud-drizzle.svg'
import { BsWind } from "react-icons/bs";
import { WiHumidity } from "react-icons/wi";
import { FaTemperatureHigh } from "react-icons/fa";
import MobileweekWeather from './MobileweekWeather'
import { AiOutlineDown } from "react-icons/ai";
import { GoChevronRight } from "react-icons/go";
import Alert from '../components/Alert'
//
export default function MobileCurrentWeather() {
    const [showWeekForecast, setshowWeekForecast] = useState(false)
    const [Temperature, setTemperature] = useState("")
    const [Description, setDescription] = useState("")
    const [Windspeed, setwindspeed] = useState("")
    const [Humidity, setHumidity] = useState("")
    const [feelslike, setfeelslike] = useState("")
    const [imageicon, setimage] = useState("")
    const [day, setday] = useState("")
    const [Month, setmonth] = useState("")
    const [alert, setalert] = useState(false)
    const [alertMsg, setalertMsg] = useState('')
    function getData() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                //console.log(position);
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                //console.log(lat, lon)
                //let api = "25efbc6c2c5e3b1d865a771ca82fd158"
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=25efbc6c2c5e3b1d865a771ca82fd158`).then((response) => { return response.json() }).then((data) => {
                    //console.log(data)
                    var temperature = data.main
                    let wind = data.wind;
                    //console.log(wind)
                    let Weather = data.weather
                    //let heading=data.weather.main;
                    //console.log(wind,temperature, Weather);  
                    setTemperature(temperature.temp)
                    setDescription(Weather[0].main)
                    setwindspeed(wind.speed)
                    setHumidity(temperature.humidity)
                    setfeelslike(temperature.feels_like)
                    //console.log(Temperature,Description, Windspeed,Humidity,feelslike);
                    let day = new Date();
                    let today = day.getDay()
                    let month = day.getMonth()
                    setday(today)
                    if (today === 0) {
                        setday("sun")
                    } else if (today === 1) {
                        setday("Mon")
                    }
                    else if (today === 2) {
                        setday("Tue")
                    }
                    else if (today === 3) {
                        setday("wed")
                    }
                    else if (today === 4) {
                        setday("Thu")
                    }
                    else if (today === 5) {
                        setday("fri")
                    }
                    else if (today === 6) {
                        setday("sat")
                    }
                    else {
                        setday("funday")
                    }
                    if (month === 0) {
                        setmonth("Jan")
                    } else if (month === 1) {
                        setmonth("feb")
                    }
                    else if (month === 2) {
                        setmonth("Mar")
                    }
                    else if (month === 3) {
                        setmonth("apr")
                    }
                    else if (month === 4) {
                        setmonth("may")
                    }
                    else if (month === 5) {
                        setmonth("jun")
                    }
                    else if (month === 6) {
                        setmonth("july")
                    }
                    else if (month === 7) {
                        setmonth("aug")
                    }
                    else if (month === 8) {
                        setmonth("sep")
                    }
                    else if (month === 9) {
                        setmonth("oct")
                    } else if (month === 10) {
                        setmonth("nov")
                    }
                    else if (month === 11) {
                        setmonth("Dec")
                    }
                    else {
                        setday("funmonth")
                    }
                    if (Description.includes("Rain")) {
                        setimage(Rainy)
                    } else if (Description.includes("Clear")) {
                        setimage(sunny)
                    }
                    else if (Description.includes("Clouds")) {
                        setimage(cloudy)
                    }
                    else if (Description.includes("Haze")) {
                        setimage(extra)
                    }
                    else {
                        setimage(thunder)
                    }
                }
                )
            }, (err) => {
                if (err.code === 1) {
                    setalert(true)
                    setalertMsg('Please allow browser to access your location and refresh the page')
                } else if (err.code === 2) {
                    setalert(true)
                    setalertMsg('Unable to find your location')
                } else {
                    setalert(true)
                    setalertMsg('something went wrong please refresh the page')
                }
            })
        } else {
            //document.getElementById("temp").innerText="please allow browser to know your location";
            console.log("do something else")
        }
    }
    useEffect(() => {
        getData()
        //eslint-disable-next-line
    }, [])
    return (
        <div className="container my-2">
            {alert && <Alert alertMsg={alertMsg} alertCls='info' />}
            <div className="Moblile-flexx">
                <div className={`Mobile-ImageContainer ${showWeekForecast && 'justify-content-evenly gap-1'}`} style={{ alignItems: `${showWeekForecast ? 'unset' : "center"}` }}>
                    <div className={`Mobile-main-info ${showWeekForecast && 'd-flex justify-content-evenly align-items-center'}`}>
                        <img src={imageicon} className={showWeekForecast ? 'small-img' : "big-img"} alt="loading"></img>
                        <div className={`Mobile-info-text my-2 ${showWeekForecast && 'text-center'}`}>
                            <h2>{Temperature}°</h2>
                            <h4 className='display-4'>{Description}</h4>
                            <div className='d-flex px-2'>
                                <h6 style={{ fontWeight: "100" }}> {day} &nbsp; </h6> / <h6 style={{ fontWeight: "200" }}> &nbsp; {Month} </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="Mobile-rowflexx">
                    <div className='icon-info-div'>
                        <BsWind color='white' />
                        <h6>{Windspeed}km/h</h6>
                        <p className='small-text text-secondary'>Wind</p>
                    </div>
                    <div className='icon-info-div'>
                        <WiHumidity color='white' />
                        <h6>{Humidity}%</h6>
                        <p className="small-text text-secondary">Humidity</p>
                    </div>
                    <div className='icon-info-div'>
                        <FaTemperatureHigh color='white' />
                        <h6>{feelslike}°C</h6>
                        <p className="small-text text-secondary">Feels Like</p>
                    </div>
                </div>
            </div>
            <div className='container d-flex justify-content-between align-items-center text-white my-3'>
                <h5>Week Weather</h5>
                <p onClick={() => setshowWeekForecast((previous) => !previous)} className='btn small-text text-secondary'>7 days {showWeekForecast ? <AiOutlineDown color='white'></AiOutlineDown> : <GoChevronRight color='white' />} </p>
            </div>
            <MobileweekWeather showFulldetails={showWeekForecast} />
        </div>
    )
}
