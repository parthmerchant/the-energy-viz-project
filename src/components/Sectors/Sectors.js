import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, Label } from 'recharts';
import data from '../../data/energy_sector.json';
import './Sectors.css';

export default class Sectors extends Component { 

  constructor(props) {
    super(props);
    this.state = {value: 'Primary Energy Consumed by the Residential Sector'};

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <div className="sector-container">
        <center>
        <div className="text-container">
        <p className="sector-text">The following visualization is an interactive AreaChart from the Recharts API with a select box to choose which sector to visualize over the time period 1949-2019. The advantage of using an interactive visualization with the select dropdown in this case is to be able to flexibly observe different charts to see changes in energy consumption for a particular sector over a time series.</p>
        </div>
        </center>
        <center>
        <div className="viz-box">
          <p className="small-multiple-grid-title">USA Energy Sectors (1949-2019)</p>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="Primary Energy Consumed by the Industrial Sector">Primary Energy Consumed by the Industrial Sector</option>
            <option value="Primary Energy Consumed by the Residential Sector">Primary Energy Consumed by the Residential Sector</option>
            <option value="Primary Energy Consumed by the Commercial Sector">Primary Energy Consumed by the Commercial Sector</option>
            <option value="Primary Energy Consumed by the Transportation Sector">Primary Energy Consumed by the Transportation Sector</option>
            <option value="Primary Energy Consumed by the Electric Power Sector">Primary Energy Consumed by the Electric Power Sector</option>
            <option value="Primary Energy Consumption Total">Primary Energy Consumption Total</option>
          </select>
      <AreaChart
        width={800}
        height={450}
        data={data}
        margin={{
          top: 10, right: 30, left: 20, bottom: 20,
        }}
      >
        <defs>
          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="Year">
          <Label value="Year" offset={-10} position="insideBottom" />
        </XAxis>
        <YAxis label={{ value: 'Trillion BTU', angle: -90, offset: 5, position: 'left' }}/>
        <Tooltip />
        <Area type="monotoneX" dataKey={this.state.value} stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
      </div>
        </center>
      </div>
    );
  }
}