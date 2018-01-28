import React from 'react';
import ReactDOM from 'react-dom';
import 'bulma/css/bulma.css';
import './App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const PROMOTIONS =  [
    { index: 0,
      url: 'http://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg',
      title: 'Welcome',
      description: 'Our goal is to bring quality in all of our services and to met our customers needs.'},
    { index: 1,
      url: 'http://eniedesign.com/assets/main-bg.jpg',
      title: 'Promotion Title 2',
      description: 'This is the second description'},
    { index: 2,
      url: 'https://wallpaper.wiki/wp-content/uploads/2017/06/Free-Backgrounds-Leopard-HD-Wallpaper-High-Resolution.jpg',
      title: 'Promotion Title 3',
      description: 'This is the third description'},
  ];

  const BUTTONS = [
    { 
      name: 'new',
      iconName: 'fa-plus',
      buttonText: 'New Installs',
    },
    { 
      name: 'repair',
      iconName: 'fa-cog',
      buttonText: 'Repair & Replacements',
    },
    { 
      name: 'heating',
      iconName: 'fa-thermometer-three-quarters',
      buttonText: 'Floor Heating',
      
    },
    { 
      name: 'gallery',
      iconName: 'fa-picture-o',
      buttonText: 'Gallery',
      
    },
    
  ];

  const INFORMATION = {
    new: {
      primary: {
        title: 'New Installs',
        image: 'http://nationalsupply.net/Site/graphics/tools/tools.jpg'
      },
      secondary: {
        title: 'Secondary install title',
        description: 'this is the description for this info section.'
      },
      main: {
        title: 'Main install section',
        description: 'This is the description for the main info section which contains a relatively long text.'
      }
    },
    repair: {
      primary: {
        title: 'Repairs',
        image: './img/repair.jpg'
      },
      secondary: {
        title: 'Secondary repair title',
        description: 'this is the description for this info section.'
      },
      main: {
        title: 'Main repair section',
        description: 'This is the description for the main info section which contains a relatively long text. for repairs'
      }
    },
    heating: {
      primary: {
        title: 'Floor Heating',
        image: './img/heating.jpeg'
      },
      secondary: {
        title: 'Secondary heating title',
        description: 'this is the description for this info section.'
      },
      main: {
        title: 'Main heating section',
        description: 'This is the description for the main info section which contains a relatively long text. for repairs'
      }
    },
    gallery: {
      primary: {
        title: 'Gallery',
        image: './img/cooling.jpeg'
      },
      secondary: {
        title: 'Secondary cooling title',
        description: 'this is the description for this info section.'
      },
      main: {
        title: 'Main cooling section',
        description: 'This is the description for the main info section which contains a relatively long text. for repairs'
      }
    },
  }

  

ReactDOM.render(<App promotions={PROMOTIONS} buttons={BUTTONS} info={INFORMATION}/>, document.getElementById('root'));
registerServiceWorker();
