import React, { Component } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import './Census_Small_Multiples.css';
import data from '../../data/un_energy_census.json';

export default class Census_Small_Multiples extends Component {

    render() {
      return (
        <section id="un_energy">
          <center>
          <div className="test-box">
            <p className="small-multiple-grid-title">USA UN-Census Commodity Production</p>
            <div class="grid-row">
              <div class="grid-column">
                <div class="grid-box">
                  <p className="small-multiple-title">Nuclear Production</p>
                 <center>
                  <AreaChart
                      width={300}
                      height={180}
                      data={data}
                      margin={{
                          top: 10, right: 30, left: 30, bottom: 0,
                      }}
                  >
                      <CartesianGrid strokeDasharray="5 5" />
                      <XAxis dataKey="Year" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotoneX" dataKey="Electricity - total nuclear production" stroke="#14C43F" fill="#16D830" />
                  </AreaChart>
                 </center> 
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
                      <CartesianGrid strokeDasharray="5 5" />
                      <XAxis dataKey="Year" />
                      <YAxis />
                      <Tooltip />
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
                      <CartesianGrid strokeDasharray="5 5" />
                      <XAxis dataKey="Year" />
                      <YAxis />
                      <Tooltip />
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
                      <CartesianGrid strokeDasharray="5 5" />
                      <XAxis dataKey="Year" />
                      <YAxis />
                      <Tooltip />
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
                      <CartesianGrid strokeDasharray="5 5" />
                      <XAxis dataKey="Year" />
                      <YAxis />
                      <Tooltip />
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
                      <CartesianGrid strokeDasharray="5 5" />
                      <XAxis dataKey="Year" />
                      <YAxis />
                      <Tooltip />
                      <Area type="monotoneX" dataKey="Liquefied petroleum gas (LPG) - Production" stroke="#14C43F" fill="#16D830" />
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