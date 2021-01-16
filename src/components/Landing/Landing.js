import React from 'react';
import viz from './viz.png';
import './Landing.css';
import github_icon from './github.png';

const Landing = () => {
    return (
        <div className="landing-container">
            <div className="row">
                <div className="column-one">
                    <h2>The Energy Viz Project</h2>
                    <br></br>
                    <img src={viz} alt='Intro-img' height="300" width="300"/>
                </div>
                <div className="column-two">
                    <b>Abstract</b>
                    <p>In the 21st century, energy consumption is at an all-time high, with individuals constantly using multiple electronic devices as well as living in homes filled with electronics. As people run their technological devices all day year long, energy is being used at a rate higher than it has been in previous years. In order to reduce energy consumption, as citizens, we must understand in what sector we’re consuming energy and how much we are using. Understanding energy usage on a micro and macro-level is essential to gaining insights on how we utilize energy and how we can potentially reduce our carbon footprint. Being able to understand how different states and countries consume energy is the goal of this project. Using existing visualization and user experience libraries and tools, we will be able to interactively and flexibly gain an understanding of how energy consumption has increased over the past century.</p>
                    <hr></hr>
                    <p>Designed and developed by Parth Merchant / The Energy Viz Project / NJIT Information Systems / Associate Professor Aritra Dasgupta</p>
                    <a href="https://github.com/parthmerchant/the-energy-viz-project" className="github-button"><img src={github_icon} alt="github-icon" height="40" width="auto" /></a>
                </div>
                </div>
            <br></br>
            <hr></hr>
        </div>
    );
  };
  
  export default Landing;