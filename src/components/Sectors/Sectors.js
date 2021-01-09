import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Label } from 'recharts';
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
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis dataKey="Year" />
        <YAxis />
        <Tooltip />
        <Area type="monotoneX" dataKey={this.state.value} stroke="#14C43F" fill="#16D830" />
      </AreaChart>
      </div>
        </center>
      </section>
    );
  }
}