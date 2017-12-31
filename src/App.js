import React, { Component } from 'react';
import Slider from './js/Slider';
import InfoSection from './js/InfoSection/InfoSection';
import PropTypes from 'prop-types';
import './App.css';

 class App extends Component {
  render() {
    return (
      <div className="App">
        <Slider promotions={this.props.promotions}/>
        <InfoSection buttons={this.props.buttons} />
      </div>
    );
  }
}

App.propTypes = {
  promotions: PropTypes.array.isRequired,
  buttons: PropTypes.array.isRequired,
};

export default App;
