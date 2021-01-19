import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip } from 'recharts';
import './Census_Small_Multiples.css';
import data from '../../data/un_energy_census.json';

const yearLabel = (label) => {
  let output = "Year: "+label;
  return output;
};

const nuclearGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Electricity - total nuclear production"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const NuclearToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="intro">{nuclearGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

const heatGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Heat - Net production"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const HeatToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="intro">{heatGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

const gasGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Gas Oil/ Diesel Oil - Production"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const GasToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="intro">{gasGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

const geoGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Electricity - total geothermal production"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const GeoToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="intro">{geoGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

const hydroGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Electricity - total hydro production"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const HydroToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="intro">{hydroGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

const petroGetAmount = (label) => {
  let i = 0;
  for (i=0; i<data.length; i++){
    if (data[i]["Year"] === label ){
        let variable = data[i]["Liquefied petroleum gas (LPG) - Production"];
        let output = "Consumption: " + variable + " Trillion BTU";
        return output;
    }
  }
};

const PetroToolTip = ({ active, payload, label }) => {
  if (active) {
    return (
      <div className="custom-tooltip">
        <p className="label">{yearLabel(label)}</p>
        <p className="intro">{petroGetAmount(label)}</p>
      </div>
    );
  }

  return null;
};

export default class Census_Small_Multiples extends Component {

    render() {
      return (
        <div className="un_energy">
          <center>
          <div className="test-box">
            <p className="small-multiple-grid-title">USA UN-Census Commodity Production</p>
            <p className="viz-text">In this visualization, we also implement small multiples however we do not use the same Y-Axis scale for all the line charts because doing so would take away from the information we can hope to observe for each small multiple line chart. We also use the same interactive tooltip from the previous small multiple component, as it allows us to see the exact amount of energy consumed.</p>
            <div class="grid-row">
              <div class="grid-column">
                <div class="grid-box">
                  <p className="small-multiple-title">Nuclear Production</p>
                  <AreaChart
                      width={300}
                      height={180}
                      data={data}
                      margin={{
                          top: 10, right: 30, left: 30, bottom: 0,
                      }}
                  >
                      <XAxis dataKey="Year" />
                      <YAxis domain={[0,1000000]} />
                      <Tooltip content={NuclearToolTip}/>
                      <Area type="monotoneX" dataKey="Electricity - total nuclear production" stroke="#14C43F" fill="#16D830" />
                  </AreaChart>
                </div>
              </div>
              <div class="grid-column">
              <div class="grid-box">
                  <p className="small-multiple-title">Heat Production</p>
                  <AreaChart
                      width={300}
                      height={180}
                      data={data}
                      margin={{
                          top: 10, right: 30, left: 30, bottom: 0,
                      }}
                  >
                      <XAxis dataKey="Year" />
                      <YAxis domain={[0,500000]} />
                      <Tooltip content={HeatToolTip}/>
                      <Area type="monotoneX" dataKey="Heat - Net production" stroke="#14C43F" fill="#16D830" />
                  </AreaChart>
                </div>
              </div>
              <div class="grid-column">
              <div class="grid-box">
                  <p className="small-multiple-title">Gas/Diesel Oil Production</p>
                  <AreaChart
                      width={300}
                      height={180}
                      data={data}
                      margin={{
                          top: 10, right: 30, left: 30, bottom: 0,
                      }}
                  >
                      <XAxis dataKey="Year" />
                      <YAxis domain={[0,300000]} />
                      <Tooltip content={GasToolTip}/>
                      <Area type="monotoneX" dataKey="Gas Oil/ Diesel Oil - Production" stroke="#14C43F" fill="#16D830" />
                  </AreaChart>
                </div>
              </div>
            </div>
            <div class="grid-row">
              <div class="grid-column">
              <div class="grid-box">
                  <p className="small-multiple-title">Geothermal Production</p>
                  <AreaChart
                      width={300}
                      height={180}
                      data={data}
                      margin={{
                          top: 10, right: 30, left: 30, bottom: 0,
                      }}
                  >
                      <XAxis dataKey="Year" />
                      <YAxis domain={[0,20000]} />
                      <Tooltip content={GeoToolTip}/>
                      <Area type="monotoneX" dataKey="Electricity - total geothermal production" stroke="#14C43F" fill="#16D830" />
                  </AreaChart>
                </div>
              </div>
              <div class="grid-column">
              <div class="grid-box">
                  <p className="small-multiple-title">Hydro Production</p>
                  <AreaChart
                      width={300}
                      height={180}
                      data={data}
                      margin={{
                          top: 10, right: 30, left: 30, bottom: 0,
                      }}
                  >
                      <XAxis dataKey="Year" />
                      <YAxis domain={[0,500000]} />
                      <Tooltip content={HydroToolTip}/>
                      <Area type="monotoneX" dataKey="Electricity - total hydro production" stroke="#14C43F" fill="#16D830" />
                  </AreaChart>
                </div>
              </div>
              <div class="grid-column">
              <div class="grid-box">
                  <p className="small-multiple-title">Liquid Petroleum Gas Production</p>
                  <AreaChart
                      width={300}
                      height={180}
                      data={data}
                      margin={{
                          top: 10, right: 30, left: 30, bottom: 0,
                      }}
                  >
                      <XAxis dataKey="Year" />
                      <YAxis domain={[0,60000]} />
                      <Tooltip content={PetroToolTip}/>
                      <Area type="monotoneX" dataKey="Liquefied petroleum gas (LPG) - Production" stroke="#14C43F" fill="#16D830" />
                  </AreaChart>
                </div>
              </div>
            </div>
          </div>
          </center>
        </div>
      );
    }
  }