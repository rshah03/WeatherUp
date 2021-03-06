import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';
import GoogleMap from '../components/GoogleMap';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const tempArr = _.map(cityData.list.map(weather => weather.main.temp), (temp) => temp - 273.15);
    const pressureArr = cityData.list.map(weather => weather.main.pressure);
    const humidityArr = cityData.list.map(weather => weather.main.humidity);
    const { lat, lon } = cityData.city.coord;

    return (
      <tr key={name}>
        <td><GoogleMap lat={lat} lon={lon} /></td>
        <td><Chart dataIn={tempArr} color="#ec3c1b" units="°C" /></td>
        <td><Chart dataIn={pressureArr} color="#42dd97" units=" hPa" /></td>
        <td><Chart dataIn={humidityArr} color="#c883e5" units="%" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapeStateToProps({ weather }) {
  return { weather }; //return { weather: state.weather };
}

export default connect(mapeStateToProps)(WeatherList);
