import React, { Component } from 'react';
import { ScatterChart, Scatter, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import data from '../../data/usa_energy.json';

var filter_function = require("underscore");

var region_1 = filter_function.where(data, {Region: 1});
var region_2 = filter_function.where(data, {Region: 2});
var region_3 = filter_function.where(data, {Region: 3});
var region_4 = filter_function.where(data, {Region: 4});

export default class Energy_Economy_Scatterplot extends Component {
  
  constructor(props) {
    super(props);
    this.state = {value: 'TotalC2014'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }
 
  render() {
    return (
      <section id="usa_economy">
          <center>
        <div className="test-box">
          <p className="small-multiple-grid-title">2014 USA Energy Consumption vs GDP</p>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="TotalC2014">2014 Total Energy Consumption</option>
            <option value="CoalC2014">2014 Total Coal Consumption</option>
            <option value="ElecC2014">2014 Total Electricity Consumption</option>
            <option value="FossFuelC2014">2014 Fossil Fuel Consumption</option>
            <option value="GeoC2014">2014 Geothermal Consumption</option>
            <option value="HydroC2014">2014 Hydro Consumption</option>
            <option value="NatGasC2014">2014 Natural Gas Consumption</option>
            <option value="LPGC2014">2014 Liquid Petroleum Gas Consumption</option>
          </select>
          <ScatterChart
            width={800}
            height={450}
            margin={{ top: 20, right: 20, bottom: 20, left: 20,}}
          >
            <CartesianGrid />
            <XAxis type="number" dataKey={this.state.value} name={this.state.value}/>
            <YAxis type="number" dataKey="GDP2014" name="GDP2014"/>
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Legend />
            <Scatter name="Northeast Region" data={region_1} fill="#FF3E15" />
            <Scatter name="Midwest Region" data={region_2} fill="#27B275" />
            <Scatter name="Southern Region" data={region_3} fill="#FFAD15" />
            <Scatter name="Western Region" data={region_4} fill="#15AAFF" />
          </ScatterChart>
        </div>
        </center>
      </section>
    );
  }
}