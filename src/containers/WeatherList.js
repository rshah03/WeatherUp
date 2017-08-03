import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/Chart';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const tempArr = cityData.list.map(temp => temp.main.temp);
    const pressureArr = cityData.list.map(pressure => pressure.main.pressure);
    const humidityArr = cityData.list.map(humidity => humidity.main.humidity);

    return (
      <tr key={name}>
        <td>
          {name}
        </td>
        <td>
          <Chart dataIn={tempArr} />
        </td>
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
