import React, { Component } from 'react';
import Slider from './js/Slider';
import './App.css';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider />
        <section className="section">
        <div className="container">
            <div className="columns  info-buttons">
              <div className="column">
                <div className="box has-text-centered">
                  <div className="icon is-large">
                  <i className="fa fa-2x fa-plus-square" aria-hidden="true"></i>
                  </div>
                  <br/>
                  <p> New Installs </p>
                </div>
              </div>
              <div className="column">
                <div className="box has-text-centered">
                  <div className="icon is-large">
                    <i className="fa fa-2x fa-cog" aria-hidden="true"></i>
                  </div>
                  <p> Repair & Replacement </p>
                </div>
              </div>
              <div className="column">
                <div className="box has-text-centered">
                  <div className="icon is-large">
                    <i className="fa fa-2x fa-thermometer-three-quarters" aria-hidden="true"></i>
                  </div>
                  <p> Floor Heating </p>
                </div>
              </div>
              <div className="column">
                <div className="box has-text-centered">
                  <div className="icon is-large">
                    <i className="fa fa-2x fa-snowflake-o" aria-hidden="true"></i>
                  </div>
                  <p> Air Conditioning </p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="column ">
                <div className="card">
                  <div className="card-content">
                  </div>
                </div>
            </div>
          </div>

          </section>
      </div>
    );
  }
}

export default App;
