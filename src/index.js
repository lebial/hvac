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

  

ReactDOM.render(<App promotions={PROMOTIONS} />, document.getElementById('root'));
registerServiceWorker();
