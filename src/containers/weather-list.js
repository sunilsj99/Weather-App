import React, {Component} from 'react';
import {connect} from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google-map';


 class WeatherList extends Component {

    renderWeather(cityData){

        const names  = cityData.city.name;
        const temps = cityData.list.map(weather => weather.main.temp);
        const pressures = cityData.list.map(press => press.main.pressure);
        const humiditys = cityData.list.map(humid => humid.main.humidity);
        const { lon, lat } = cityData.city.coord;

        return (
            <tr  key={names}>
                <td><GoogleMap lon={lon} lat={lat}/></td>
                <td>    <Chart data={temps} color='orange' />   </td>
                <td>  <Chart data={pressures} color='blue' /> </td>
                <td> <Chart data={humiditys} color='green' /> </td>
            </tr>
        );
    }
    

    render(){
        return (
            <table className='table table-hover'>
                <thead className='thead-inverse'>
                    <tr>
                    <th>CITY</th>
                    <th>TEMPERATURE (Kelvin)</th>
                    <th>PRESSURE (hPa)</th>
                    <th>HUMIDITY (%)</th>
                    </tr>
                </thead>
                <tbody>
                {this.props.weather.map(this.renderWeather)}
                </tbody>
            </table>
        );
    }
}

function mapStateToProps({weather}){
    return {weather};
}

export default connect(mapStateToProps)(WeatherList);