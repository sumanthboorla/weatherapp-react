import React from 'react'
import '../css/Current.css'
export default function CityWeather({ imageicon, Temperature, Description, Month, Windspeed, Humidity, feelslike, day }) {
    return (
        <div className="container my-2 p-3">
            <div className="flexx">
                <div className='ImageContainer'>
                    <div className='main-info'>
                        <img src={imageicon} alt="icon"></img>
                        <div className='info-text my-2 mt-3'>
                            <div className='d-flex gap-3 justify-content-between align-items-center'>
                                <h2>{Temperature}°C</h2>
                                <h4 className='text-secondary'>{Description}</h4>
                            </div>
                            <div style={{ display: "flex" }}>
                                <h6 style={{ fontWeight: "100" }}> {day} &nbsp; </h6> / <h6 style={{ fontWeight: "200" }}> &nbsp; {Month} </h6>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="rowflexx">
                    <div>
                        <h4>Windspeed : {Windspeed}km/h</h4>
                    </div>
                    <div>
                        <h4>Humidity : {Humidity}%</h4>
                    </div>
                    <div>
                        <h4>Feels like : {feelslike}°C</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
