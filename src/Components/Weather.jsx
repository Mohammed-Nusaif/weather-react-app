import React, { useState } from "react";
import "./Style.css";
import { CiSearch } from "react-icons/ci";
import cloud from './Assets/cloud.png';
import clear from './Assets/clear.png';
import snow from './Assets/snow.png';
import rain from './Assets/rain.png';
import drizzle from "./Assets/drizzle.png";
import humidity from "./Assets/humidity.png";
import wind from "./Assets/wind.png";


function Weather() {

    let api_key = '8c4917308d7ebbe7fe6eca868ec90b4a';
    const [w_icon, setw_icon] = useState('cloud')

    const search = async () => {
        const element = document.getElementsByClassName("search-input");
        if (element[0].value ===''){
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}`

        let responce = await fetch(url);
        let data = await responce.json();
        const humidity = document.getElementsByClassName("humidity")
        const wind =document.getElementsByClassName("wind-speed")
        const temprature = document.getElementsByClassName("weather-temp")
        const location = document.getElementsByClassName("weather-loc")

        humidity[0].innerHTML = data.main.humidity+"%";
        wind[0].innerHTML = Math.floor(data.wind.speed)+"km/hr"; 
        temprature[0].innerHTML = Math.floor(data.main.temp)+"°C";
        location[0].innerHTML = data.name;

        if( data.weather[0].icon === "01d" || data.weather[0].icon ==="01n"){
            setw_icon(clear);
        }
        else if( data.weather[0].icon === "02d" || data.weather[0].icon ==="02n"){
            setw_icon(cloud);
        }
        else if( data.weather[0].icon === "04d" || data.weather[0].icon ==="04n"){
            setw_icon(drizzle);
        }
        else if( data.weather[0].icon === "09d" || data.weather[0].icon ==="09n"){
            setw_icon(rain);
        }
        else if( data.weather[0].icon === "10d" || data.weather[0].icon ==="10n"){
            setw_icon(rain);
        }
        else if( data.weather[0].icon === "13d" || data.weather[0].icon ==="13n"){
            setw_icon(snow);
        }
        else{
            setw_icon(clear);
        }
    }





  return (
    <div>
      <div className="Container">
        <div className="wrapper">
          <div className="content">
            <div className="Top">
                <input type="text" placeholder="city" className="search-input" />
              <span className="search-icon" onClick={search}> 
                <CiSearch />
              </span>
            </div>
            <div className="middle">
              <img src={w_icon} alt="" />
              <div className="weather-temp">24</div>
              <div className="weather-loc">London</div>
            </div>

            <div className="bottom">
              <div className="left">
                <img src={humidity} alt="" />
                <div className="data">
                  <div className="humidity">64%</div>
                  <div>Humidity</div>
                </div>
              </div>

              <div className="right">
                <img src={wind} alt="" />
                <div className="data">
                  <div className="wind-speed">18 km/hr</div>
                  <div>wind speed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
