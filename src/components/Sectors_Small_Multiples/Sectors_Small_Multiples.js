import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import './Sectors_Small_Multiples.css';
import data from '../../data/energy_sector.json';

const yearLabel = (label) => {
  let output = "Year: "+label;
  return output;
};

const residentialGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Primary Energy Consumed by the Residential Sector"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const ResidentialToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="intro">{residentialGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

const commercialGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Primary Energy Consumed by the Commercial Sector"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const CommercialToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="intro">{commercialGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

const industrialGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Primary Energy Consumed by the Industrial Sector"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const IndustrialToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="intro">{industrialGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

const transportationGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Primary Energy Consumed by the Transportation Sector"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const TransportationToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="intro">{transportationGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

const EPGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Primary Energy Consumed by the Electric Power Sector"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const EPToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="intro">{EPGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

const totalGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Primary Energy Consumption Total"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const TotalToolTip = ({ active, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="amount">{totalGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

export default class Sectors_Small_Multiples extends Component {

  render() {
    return (
      <section id="sm_energy">
        <center>
        <div className="test-box">
          <p className="small-multiple-grid-title">USA Energy Sectors (1949-2019)</p>
          <p className="viz-text">In this visualization we implement small multiple line charts to show different sectors in relation to each other on a similar Y-Axis range. Each small multiple line chart has an interactive tooltip. All charts are on the same scale except for Total Consumption, which serves to show us how all sectors contribute to the total consumption.</p>
          <div className="grid-row">
            <div className="grid-column">
              <div className="grid-box">
                <p className="small-multiple-title">Residential Sector</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <XAxis dataKey="Year" />
                    <YAxis domain={[0, 42500]} />
                    <Tooltip content={ResidentialToolTip}/>
                    <Area type="monotoneX" dataKey="Primary Energy Consumed by the Residential Sector" stroke="#14C43F" fill="#16D830" />
                </AreaChart>
              </div>
            </div>
            <div className="grid-column">
            <div className="grid-box">
                <p className="small-multiple-title">Commercial Sector</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <XAxis dataKey="Year" />
                    <YAxis domain={[0, 42500]} />
                    <Tooltip content={CommercialToolTip}/>
                    <Area type="monotoneX" dataKey="Primary Energy Consumed by the Commercial Sector" stroke="#14C43F" fill="#16D830" />
                </AreaChart>
              </div>
            </div>
            <div className="grid-column">
            <div className="grid-box">
            <p className="small-multiple-title">Industrial Sector</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <XAxis dataKey="Year" />
                    <YAxis domain={[0, 42500]} />
                    <Tooltip content={IndustrialToolTip}/>
                    <Area type="monotoneX" dataKey="Primary Energy Consumed by the Industrial Sector" stroke="#14C43F" fill="#16D830" />
                </AreaChart>
              </div>
            </div>
          </div>
          <div className="grid-row">
            <div className="grid-column">
            <div className="grid-box">
                <p className="small-multiple-title">Transportation Sector</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <XAxis dataKey="Year" />
                    <YAxis domain={[0, 42500]} />
                    <Tooltip content={TransportationToolTip}/>
                    <Area type="monotoneX" dataKey="Primary Energy Consumed by the Transportation Sector" stroke="#14C43F" fill="#16D830" />
                </AreaChart>
              </div>
            </div>
            <div className="grid-column">
            <div className="grid-box">
                <p className="small-multiple-title">Electric Power Sector</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <XAxis dataKey="Year" />
                    <YAxis domain={[0, 42500]} />
                    <Tooltip content={EPToolTip}/>
                    <Area type="monotoneX" dataKey="Primary Energy Consumed by the Electric Power Sector" stroke="#14C43F" fill="#16D830" />
                </AreaChart>
              </div>
            </div>
            <div className="grid-column">
            <div className="grid-box">
                <p className="small-multiple-title">Total</p>
                <AreaChart
                    width={300}
                    height={180}
                    data={data}
                    margin={{
                        top: 10, right: 30, left: 30, bottom: 0,
                    }}
                >
                    <XAxis dataKey="Year" />
                    <YAxis domain={[0, 120000]} />
                    <Tooltip content={TotalToolTip}/>
                    <Area type="monotoneX" dataKey="Primary Energy Consumption Total" stroke="#14C43F" fill="#16D830" />
                </AreaChart>
              </div>
            </div>
          </div>
        </div>
        </center>
      </section>
    );
  }
}