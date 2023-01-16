import React, { useState, useEffect } from 'react'
import '../css/Current.css'
import sunny from '../images/sun.png'
import Rainy from '../images/rain.png'
import cloudy from '../images/clouds.png'
import thunder from '../images/thunder.png'
import extra from '../images/cloud-drizzle.svg'
import CityWeather from './CityWeather'
import Alert from './Alert'
export default function CurrentWeather() {
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
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                //let api = "25efbc6c2c5e3b1d865a771ca82fd158"
                fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=25efbc6c2c5e3b1d865a771ca82fd158`).then((response) => { return response.json() }).then((data) => {
                    var temperature = data.main
                    let wind = data.wind;
                    let Weather = data.weather
                    setTemperature(temperature.temp)
                    setDescription(Weather[0].main)
                    setwindspeed(wind.speed)
                    setHumidity(temperature.humidity)
                    setfeelslike(temperature.feels_like)
                    let day = new Date();
                    let today = day.getDay()
                    let month = day.getMonth()
                    setday(today)
                    if (today === 0) {
                        setday("Sun")
                    } else if (today === 1) {
                        setday("Mon")
                    }
                    else if (today === 2) {
                        setday("Tue")
                    }
                    else if (today === 3) {
                        setday("Wed")
                    }
                    else if (today === 4) {
                        setday("Thu")
                    }
                    else if (today === 5) {
                        setday("Fri")
                    }
                    else if (today === 6) {
                        setday("Sat")
                    }
                    else {
                        setday("funday")
                    }
                    if (month === 0) {
                        setmonth("Jan")
                    } else if (month === 1) {
                        setmonth("Feb")
                    }
                    else if (month === 2) {
                        setmonth("Mar")
                    }
                    else if (month === 3) {
                        setmonth("Apr")
                    }
                    else if (month === 4) {
                        setmonth("May")
                    }
                    else if (month === 5) {
                        setmonth("Jun")
                    }
                    else if (month === 6) {
                        setmonth("July")
                    }
                    else if (month === 7) {
                        setmonth("Aug")
                    }
                    else if (month === 8) {
                        setmonth("Sep")
                    }
                    else if (month === 9) {
                        setmonth("Oct")
                    } else if (month === 10) {
                        setmonth("Nov")
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
                    setalertMsg('Please allow browser to access your location')
                } else if (err.code === 2) {
                    setalert(true)
                    setalertMsg('Unable to find your location')
                } else {
                    setalert(true)
                    setalertMsg('something went wrong please refresh the page')
                }
            })
        } else if (!navigator.geolocation) {
            console.log("do something else")
        }
    }
    useEffect(() => {
        getData()
        // eslint-disable-next-line
    }, [])
    return (
        <>

            {alert && <Alert alertMsg={alertMsg} alertCls='info' />}
            <CityWeather imageicon={imageicon} Temperature={Temperature} Description={Description} Month={Month} Windspeed={Windspeed} Humidity={Humidity} feelslike={feelslike} day={day} />
        </>

    )
}
