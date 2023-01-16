import React, { useState } from 'react'
import '../css/About.css'
export default function About() {
    const [greet, setgreet] = useState()
    function submitevent(e) {
        e.preventDefault()
        let name = document.getElementById("inputAddress2").value
        if (document.getElementById("inputState").value === 5) {
            setgreet(`Thank You So much for your response ${name}`)
        }
        else if (document.getElementById("inputState").value === 1) {
            //console.log(`ok I will improve my skills Thank you so much for your feedback ${name}`)
            setgreet(`ok I will improve my skills Thank you so much for your feedback ${name}`)
        }
        else {
            setgreet(`Thank You for your response ${name}`)
        }
    }
    return (
        <>
            <div class="container my-5 mb-5 ">
                <h5>Hi This is Kartik welcome 😃 to weather web app your feedback will help me to improve My web
                    developement journey </h5>
            </div>
            <div className="container" style={{ height: "300px" }}>
                <form action='' style={{ display: "flex", flexDirection: "column", height: "300px", justifyContent: "space-around" }} id="feedback" onSubmit={submitevent} className="row g-3">
                    <input style={{ height: "40px" }} placeholder="enter your email" type="email" className="form-control" id="inputEmail4" />
                    <input style={{ height: "40px" }} type="text" className="form-control" id="inputAddress2" placeholder="Enter your Name" />
                    <select style={{ height: "40px" }} id="inputState" className="form-select">
                        <option selected>Rate your user experience</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                    <button id="id" type="submit" className="btn btn-large btn-primary">Submit</button>
                </form>
            </div>
            <div style={{ width: "90%", margin: "auto", color: "white" }}>
                <h5>
                    {greet}
                </h5>
            </div>
        </>
    )
}

