import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
          <Sparklines height={120} width={180} data={tempArr}>
            <SparklinesLine color="#ecca1b" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={pressureArr}>
            <SparklinesLine color="#28a3d8" />
          </Sparklines>
        </td>
        <td>
          <Sparklines height={120} width={180} data={humidityArr}>
            <SparklinesLine color="#2080ed" />
          </Sparklines>
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
