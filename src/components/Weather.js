/* eslint-disable jsx-a11y/alt-text */
import React from 'react';

const Weather = props => {

        return(

            <div>
                {props.city &&
                    <div style={{marginLeft: "50%", color: "white", textAlign: "center"}}>
                        <img src={`http://openweathermap.org/img/w/${props.icon}.png`}/>
                        <h4 className="text-dark" style={{marginTop: "auto"}}>{props.city}, {props.country}</h4>
                        <h5 className="text-secondary">Temperature: {props.temp}°C</h5>
                        <h5 className="text-secondary">Weather: {props.weather}</h5>
                    </div>
                }
            </div>

        );

};  

export default Weather;