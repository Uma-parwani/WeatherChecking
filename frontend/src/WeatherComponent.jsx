import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { TiWeatherPartlySunny } from 'react-icons/ti';
import { Card } from 'react-bootstrap';

const WeatherComponent = ({ latitude, longitude }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true&current_weather_code=true&daily_weather_code=true&temperature_2m_max=true&temperature_2m_min=true&sunrise=true&sunset=true&timezone=auto&past_days=3`
        );
        setWeatherData(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error.message);
      }
    };

    fetchData();
  }, [latitude, longitude]);

  if (!weatherData) {
    return <div>Loading...</div>;
  }

  return (
    <Card>
      <Card.Body>
        {/* <Card.Title>{weatherData.city.name}</Card.Title> */}
        <Card.Subtitle className="mb-2 text-muted">{weatherData.current_weather.weathercode}</Card.Subtitle>
        <Card.Text>Current Temperature: {weatherData.current_weather.temperature_2m}°C</Card.Text>
        <TiWeatherPartlySunny size={50} />
      </Card.Body>
    </Card>
  );
};

export default WeatherComponent;





















// import React,{useState,useeffect}from 'react';
// import axios from 'axios';
// import{WiDaysunny,WiCloudy,WiRain,WiSnow,WiThunderStrom} from 'react-icons/wi'

// const WeatherComponent =({city,apikey})=>{
//     const [weatherData,setWeatherData]=useState(null);
//     const[error,setError]=useState(null);
    
//     useeffect(()=>{
//         const fetchData=async({city,apikey})=>{
//             try{
//                 const response = await axios.get(
//                     `https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m&daily=weathercode,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&past_days=3`
//                 );
//                 setWeatherData(response.data);
//             }catch(error){
//                 setError('Error fetching weather data')
//             }
//         };
//         fetchData();
    
        
//     },[city,apikey]);
//     const renderWeatherIcon=(watherCondition)=>{
//         switch(weatherCondition){
//             case :
//              <WiDaysunny/>
//             break;
//             case :

           
//         }
//     }
//  export default WeatherComponent;
