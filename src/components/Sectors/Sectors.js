import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import data from '../../data/energy_sector.json';

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
      <section id="about">
        <center>
        <div className="test-box">
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
          top: 10, right: 30, left: 0, bottom: 0,
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
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Area type="monotoneX" dataKey={this.state.value} stroke="#14C43F" fillOpacity={1} fill="url(#colorPv)" />
      </AreaChart>
      </div>
        </center>
      </section>
    );
  }
}