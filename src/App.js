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
    <div className="container-fluid App">
      <div className=" Main">
        <div className="  image">
          <Info />
        </div>
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
        <Weather
          city={cityname}
          country={country}
          temp={temp}
          weather={weather}
          icon={icon}
        />
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
    </div>
  );

}

export default App;