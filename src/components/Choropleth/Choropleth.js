import React, { Component } from 'react';
import * as d3 from "d3";
import usa from '../../data/usa_energy.json';
import usaGeo from "./gz_2010_us_040_00_20m.json";

function getConsumption(state) {
    let stateObject = usa.filter(currentElement => currentElement.State === state)[0];
    let stateAmount = stateObject.TotalC2014;
    return stateAmount;
}


class Choropleth extends Component{

    componentDidMount() {
        this.drawChart();
        window.scrollTo(0, 0);
    }
    
    drawChart() {

        const margin = {top: 0, right: 0, bottom: 0, left: 0};
        const visWidth = 600 - margin.left - margin.right;
        const visHeight = 400 - margin.top - margin.bottom;

        const lightgray = '#dcdcdc';

        const maxEnergy = d3.max(usa, d => d["TotalC2014"])

        const color = d3.scaleSequential()
            .domain([0,maxEnergy])
            .interpolator(d3.interpolateGreens)
            .unknown(lightgray)

        const svg = d3.select("#d3-cont")
            .append("svg")
            .attr('width', visWidth + margin.left + margin.right)
            .attr('height', visHeight + margin.top + margin.bottom);

        const g = svg.append('g')
            .attr('transform', `translate(${margin.left}, ${margin.top})`);
  
        // draw map
  
        const projection =  d3.geoAlbersUsa()
            .fitSize([visWidth, visHeight], usaGeo);

        const path = d3.geoPath().projection(projection);

        g.selectAll('.border')
            .data(usaGeo.features.filter(d => d.properties.NAME !== 'Puerto Rico'))
            .join('path')
                .attr('class', 'border')
                .attr('d', path)
                .attr('fill', d => color(getConsumption(d.properties.NAME)))
                .attr('stroke', 'white')
    }
    
    render(){
        return(
            <div className="d3-container">
                <h3>Choropleth Map 2014 Total Energy Consumption</h3>
                <p>In this implementation, we create a D3 Choropleth Map of the United States where we use sequential color intensity to encode the total amount of energy consumed in 2014.</p>
                <stateData />
                <div id="d3-cont"></div>
            </div>
        );
    }
}
export default Choropleth;