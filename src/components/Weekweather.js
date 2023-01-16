import React, { useEffect, useState } from 'react'
import '../css/week.css'
import sunny from '../images/sun.png'
import Rainy from '../images/rain.png'
import cloudy from '../images/clouds.png'
import thunder from '../images/thunder.png'
import extra from '../images/cloud-drizzle.svg'
export default function Weekweather() {
  // eslint-disable-next-line
  const [alldata, setalldata] = useState()
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
    <div className="container">
      <h2 className='m-1 text-white text-center display-4'>8 Days Forecast</h2>
      <div className="maindiv my-2">
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
                <div key={Math.random() * 100} className="innerdiv">
                  <h3 id="day" className='my-2'>{day}</h3>
                  <div className='icon-container'>
                    <img alt='weather-description' src={image}></img>
                    <p className='small-text text-white' id="data">{weatherdata.weather[0].main}</p>
                  </div>
                  <div className='MaxMinContainer'>
                    <h6 >+{weatherdata.temp.max}°</h6>
                    <p className='small-text text-white'>+{weatherdata.temp.min}°</p>
                  </div>
                </div>
              </>
            )
          })}
      </div>
    </div >
  )
}
