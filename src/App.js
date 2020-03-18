import React from "react";
import Info from "./components/info";
import Form from "./components/form";
import Weather from "./components/Weather";

const API_KEY = "7e55941a255e043f703f40e894f63c21";

class App extends React.Component {

  state = {

    temp: undefined,
    city: undefined,
    country: undefined,
    weather: undefined,
    icon: undefined,
    error: undefined

  }

  gettingWeather = async (e) => {

    e.preventDefault();
    var city = e.target.elements.city.value;

    if(city){
      const api_url = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      const data = await api_url.json();
      console.log(data);

      if(data.cod === "404")  {
        this.setState({
          temp: '',
          city: '',
          country: '',
          weather: '',
          icon: '',
          error: "Enter correct name of the city..."
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

      // if(this.state.weather === "Clouds") {
      //   let wrapper = document.getElementById("wrapper");
      //   if(wrapper)
      //   {
      //     wrapper.style.backgroundImage='url(' + require('./gif/cloudy-weather.gif') + ')';
      //     wrapper.style.backgroundSize="cover";
      //     wrapper.style.backgroundRepeat="no-repeat";
      //   }        
      // } else if(this.state.weather === "Rain") {
      //     let wrapper = document.getElementById("wrapper");
      //     if(wrapper)
      //     {
      //       wrapper.style.backgroundImage='url(' + require('./gif/rainy-weather.gif') + ')';
      //       wrapper.style.backgroundSize="cover";
      //       wrapper.style.backgroundRepeat="no-repeat";
      //     }
      // } else if(this.state.weather === "Thunderstorm") {
      //     let wrapper = document.getElementById("wrapper");
      //     if(wrapper)
      //     {
      //       wrapper.style.backgroundImage='url(' + require('./gif/thunderstorm-weather.gif') + ')';
      //       wrapper.style.backgroundSize="cover";
      //       wrapper.style.backgroundRepeat="no-repeat";
      //     }
      // } else if(this.state.weather === "Drizzle") {
      //     let wrapper = document.getElementById("wrapper");
      //     if(wrapper)
      //     {
      //       wrapper.style.backgroundImage='url(' + require('./gif/drizzle-weather.gif') + ')';
      //       wrapper.style.backgroundSize="cover";
      //       wrapper.style.backgroundRepeat="no-repeat";
      //     }
      // } else if(this.state.weather === "Snow") {
      //     let wrapper = document.getElementById("wrapper");
      //     if(wrapper)
      //     {
      //       wrapper.style.backgroundImage='url(' + require('./gif/snow-weather.gif') + ')';
      //       wrapper.style.backgroundSize="cover";
      //       wrapper.style.backgroundRepeat="no-repeat";
      //     }
      // } else if(this.state.weather === "Clear") {
      //     let wrapper = document.getElementById("wrapper");
      //     if(wrapper)
      //     {
      //       wrapper.style.backgroundImage='url(' + require('./gif/clear-weather.gif') + ')';
      //       wrapper.style.backgroundSize="cover";
      //       wrapper.style.backgroundRepeat="no-repeat";
      //     }
      // }

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
        error: "Enter the name of the city..."
      });

    }

  }

  render(){

    return(

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
                  error={this.state.error}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    );

  }

}

export default App;