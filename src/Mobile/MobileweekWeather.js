import React, { useEffect, useState } from 'react'
import '../css/week.css'
import sunny from '../images/sun.png'
import Rainy from '../images/rain.png'
import cloudy from '../images/clouds.png'
import thunder from '../images/thunder.png'
import extra from '../images/cloud-drizzle.svg'

export default function MobileweekWeather({ showFulldetails }) {
    //eslint-disable-next-line
    const [alldata, setalldata] = useState()
    //eslint-disable-next-line
    const [weekdata, setweekdata] = useState([])
    function fetchalldata() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                //let api = "25efbc6c2c5e3b1d865a771ca82fd158"
                fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=metric&appid=25efbc6c2c5e3b1d865a771ca82fd158`).then((response) => response.json()).then((data) => {
                    setalldata(data)
                    setweekdata(data.daily)
                })
            }
            )
        } else {
            console.log("do something else")
        }
    }
    useEffect(() => {
        fetchalldata()
    }, [])
    return (
        <div className={showFulldetails ? 'MobileFullWeatherForecast' : "MobileWeekForecast my-2"}>
            {
                weekdata.map((weatherdata, index) => {
                    let image
                    let day
                    if (index === 0) {
                        day = "Sun"
                    }
                    else if (index === 1) {
                        day = "Mon"
                    }
                    else if (index === 2) {
                        day = "Tue"
                    }
                    else if (index === 3) {
                        day = "Wed"
                    }
                    else if (index === 4) {
                        day = "Thu"
                    }
                    else if (index === 5) {
                        day = "Fri"
                    }
                    else if (index === 6) {
                        day = "Sat"
                    }
                    else {
                        day = "Mon"
                    }
                    if (weatherdata.weather[0].main === "Rain") {
                        image = Rainy
                    }
                    else if (weatherdata.weather[0].main === "Clear") {
                        image = sunny
                    }
                    else if (weatherdata.weather[0].main === "Clouds") {
                        image = cloudy
                    }
                    else if (weatherdata.weather[0].main === "Haze") {
                        image = extra
                    }
                    else {
                        image = thunder
                    }
                    return (
                        <>
                            {
                                showFulldetails ? <div className='Mobile-DetailweekWeather my-1'>
                                    <h4 className='text-secondary'>{day}</h4>
                                    <div className='d-flex gap-1 justify-content-between align-items-center' style={{ width: '90px' }}>
                                        <img src={image} width={30} alt="" />
                                        <h6 className='text-secondary'>{weatherdata.weather[0].main}</h6>
                                    </div>
                                    <div className='d-flex gap-1 justify-content-between align-items-center'>
                                        <h6 className='align-self-start'>+{weatherdata.temp.max}°</h6>
                                        <p className='small-text text-secondary align-self-end'>+{weatherdata.temp.min}°</p>
                                    </div>
                                </div> : <div className='Mobile-SmallweekWeather'>
                                    <h4>{weatherdata.temp.max}°</h4>
                                    <img alt='weatherdescription' width={40} src={image}></img>
                                    <h4 className='text-secondary'>{day}</h4>
                                </div>
                            }
                        </>
                    )
                })}
        </div>
    )
}
