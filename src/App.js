import React, {useEffect, useState} from 'react';
import Weather from './Components/Weather';
import Info from './Components/Info'; 
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';
import './App.css';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const App = () => {


  
  const API_KEY = "7e55941a255e043f703f40e894f63c21";
  
  const [cityname, setCityname] = useState('');
  const [country, setCountry] = useState([]);
  const [temp, setTemp] = useState([]);
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState([]);
  const [search, setSearch] = useState('');
  const classes = useStyles();
  const [error, setError] = useState(false);



  useEffect( () => {
    getWeather();

  }, [cityname]);

  const getWeather = async () => {
    let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=${API_KEY}&units=metric`);
    const data = await responce.json();
    // console.log(data);
    
    if(cityname){


      if(data.cod === "404")  {
        setCityname('');
        setCountry('');
        setTemp('');
        setWeather('');
        setIcon('');
        setError(true);
        return;
          
      }

      setCityname(data.name);
      setCountry(data.sys.country);
      setTemp(Math.round(data.main.temp));
      setWeather(data.weather["0"].main);
      setIcon(data.weather["0"].icon);

    } else {
      setCityname(undefined);
      setCountry(undefined);
      setTemp(undefined);
      setWeather(undefined);
      setIcon(undefined);
    }
  }

  const updateSearch = e => {
    setSearch(e.target.value);
  }

  const getSearch = e => {
    if(search === ''){
      setError(true);
    }else{
      e.preventDefault();
      setCityname(search);
    }
    
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setError(false);
  };

  return (
<<<<<<< HEAD

    <div className="App pt-5">
      <div className="Main col-6 m-auto d-flex">
        <img src={require('./img/polygon2.jpg')} alt="Weather App Image" className="img col-6"/>
        <form action="" className="col-6 pt-3">
          <input type="text" placeholder="City" />
          <button className="btn-primary">Get Weather</button>
        </form>
        {/* <div className="image"><Info /></div>
=======
    <div className="container-fluid App">
      <div className=" Main">
        <div className="  image">
          <Info />
        </div>
>>>>>>> c5cc73287ad289fc50a25d3c59ae1db509ed0c21
        <form action="" onSubmit={getSearch} className="getweather-form">
          <input
            type="text"
            className="form-control mr-2 mb-4"
            placeholder="eg. London"
            value={search}
            onChange={updateSearch}
          />
          <ion-icon onClick={getSearch} class="trashIcon" name="search">
            {" "}
          </ion-icon>
        </form>
<<<<<<< HEAD
        <div className="text-center">Text-center</div>
        <Weather 
=======
        <Weather
>>>>>>> c5cc73287ad289fc50a25d3c59ae1db509ed0c21
          city={cityname}
          country={country}
          temp={temp}
          weather={weather}
          icon={icon}
        /> */}
      </div>

      <Snackbar open={error} autoHideDuration={2000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="error">
          City Not Found!
        </Alert>
      </Snackbar>
      {/* Not Responsible note for Mobile */}

      <div class="mt-5">
        <p class="text-dark info-header">
          This Web App is not Compatible with Mobile devices
        </p>
        <p class="text-secondary info-body">
          Please use your personal computer{" "}
        </p>
        <ion-icon class="warningIcon" name="warning"></ion-icon>
      </div>

      {/* End */}

      {/* Bir az Comment */}
    </div>
  );

}

export default App;