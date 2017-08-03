import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const tempArr = cityData.list.map(weather => weather.main.temp);
    const pressureArr = cityData.list.map(weather => weather.main.pressure);
    const humidityArr = cityData.list.map(weather => weather.main.humidity);

    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td><Chart dataIn={tempArr} color="#ec3c1b" /></td>
        <td><Chart dataIn={pressureArr} color="#42dd97" /></td>
        <td><Chart dataIn={humidityArr} color="#c883e5" /></td>
      </tr>
    );
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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
