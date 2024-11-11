import React from "react";
import { Card } from "react-bootstrap";

const WeatherBox = ({ weather }) => {
  const temperatureC =
    weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) : "";
  const temperatureF =
    weather && weather.main
      ? (((weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)
      : "";

  return (
    <Card className="weather-card">
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Card.Title className="locationname mb-3">{weather?.name || '날씨를 가져오는데 실패했습니다.'}</Card.Title>
        <Card.Text className=" h1 mb-3 tempcolor ">
          {`${temperatureC} °C / ${temperatureF} °F`}
        </Card.Text>
        <Card.Text className="text-uppercase h2 weatherdes">
          {weather && weather.weather[0]?.description}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default WeatherBox;
