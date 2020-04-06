import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

import {Snackbar} from '@material/react-snackbar';

const API_KEY = "7e55941a255e043f703f40e894f63c21";

class App extends React.Component {
  
  state = {

    temp: undefined,
    city: undefined,
    country: undefined,
    weather: undefined,
    icon: undefined,
    error: false,

  }

  gettingWeather = async (e) => {

    e.preventDefault();
    var city = e.target.elements.city.value;

    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      // console.log(data);

      if(data.cod === "404")  {
        this.setState({
          temp: '',
          city: '',
          country: '',
          weather: '',
          icon: '',
          error: true
        });
        return;
      }


      this.setState({
        temp: data.main.temp,
        city: data.name,
        country: data.sys.country,
        weather: data.weather["0"].main,
        icon: data.weather["0"].icon,
        error: undefined
      });

      let wrapper = document.getElementById("wrapper");
      switch(this.state.weather){

        case "Clouds":
          if(wrapper){
            wrapper.style.backgroundImage='url(' + require('./gif/cloudy-weather.gif') + ')';
            wrapper.style.backgroundSize="cover";
            wrapper.style.backgroundRepeat="no-repeat";
          }
          break;
        case "Rain":
          if(wrapper){
            wrapper.style.backgroundImage='url(' + require('./gif/rainy-weather.gif') + ')';
            wrapper.style.backgroundSize="cover";
            wrapper.style.backgroundRepeat="no-repeat";
          }
          break;
        case "Thunderstorm":
          if(wrapper){
            wrapper.style.backgroundImage='url(' + require('./gif/thunderstorm-weather.gif') + ')';
            wrapper.style.backgroundSize="cover";
            wrapper.style.backgroundRepeat="no-repeat";
          }
          break;
        case "Drizzle":
          if(wrapper){
            wrapper.style.backgroundImage='url(' + require('./gif/drizzle-weather.gif') + ')';
            wrapper.style.backgroundSize="cover";
            wrapper.style.backgroundRepeat="no-repeat";
          }
          break;
        case "Snow":
          if(wrapper){
            wrapper.style.backgroundImage='url(' + require('./gif/snow-weather.gif') + ')';
            wrapper.style.backgroundSize="cover";
            wrapper.style.backgroundRepeat="no-repeat";
          }
          break;
        case "Clear":
          if(wrapper){
            wrapper.style.backgroundImage='url(' + require('./gif/clear-weather.gif') + ')';
            wrapper.style.backgroundSize="cover";
            wrapper.style.backgroundRepeat="no-repeat";
          }
          break;
      }

    }
    else {

      this.setState({
        temp: undefined,
        city: undefined,
        country: undefined,
        weather: undefined,
        icon: undefined,
        error: true
      });

      setTimeout(() => {
        this.setState({error: false});
      }, 4000);
    }

  }

  render(){

    return(

      <div>
        <div className="wrapper" id="wrapper">
          <div className="container">
            <div className="main">
              <div className="row">
                <div className="col-sm-5 info">
                  <Info />
                </div>
                <div className="col-sm-7 form">
                  <Form weatherMethod={this.gettingWeather} />
                  <Weather 
                    temp={Math.round(this.state.temp)}
                    city={this.state.city}
                    country={this.state.country}
                    weather={this.state.weather}
                    icon={this.state.icon}
                    // error={this.state.error}
                  />
                  <div>
                    <Snackbar 
                      message="City Not Found!"
                      open={this.state.error}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }

}

export default App;