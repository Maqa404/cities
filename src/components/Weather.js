import React from 'react';

const Weather = props => {

        return(

            <div>
                {props.city &&
                    <div style={{marginLeft: "50%", color: "white", textAlign: "center"}}>
                        <h2 style={{marginTop: "0px", marginBottom: "6%"}}><img src={`http://openweathermap.org/img/w/${props.icon}.png`}/><div style={{marginTop: "auto"}}>{props.city}, {props.country}</div></h2>
                        <div>Temperature: {props.temp}°C</div>
                        <div>Weather: {props.weather}</div>
                    </div>
                }
            </div>

        );

};

export default Weather;