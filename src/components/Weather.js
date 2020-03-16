import React from "react";
import App from "../App";

const Weather = props => (

    <div className="infoWeath">
        {props.city &&
            <div style={{width: "324px", height: "238px", position: "absolute", left: "15px", marginTop: "-25px", marginTop: "10px"}}>
                <p style={{textAlign: "center"}}><img src={`http://openweathermap.org/img/w/${props.icon}.png`}/>{props.city}, {props.country}</p>
                <p style={{marginLeft: "85px"}}>Temperature: {props.temp}°C</p>
                <p style={{marginLeft: "85px"}}>Weather: {props.weather}</p>
            </div> 
        }
        <p className="error">{props.error}</p>
    </div>

)

export default Weather;