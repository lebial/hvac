import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Slider extends Component{

    constructor(props){
        super(props);
        this.state = {
          currentIndex: 0,  
          fadeClass: 'faded',
        }
    }
    componentDidMount(){
      setInterval(this.changeSlide,5000);
    }
    changeSlide = () => {
      let current = this.state.currentIndex;
      current === this.props.promotions.length - 1 ? current = 0 : current++;
      this.setState({
        currentIndex: current,
        fadeClass: '',
      });
      setTimeout(() => this.setState({fadeClass: 'faded'}), 1000);
      
    }


    render(){
      
      let  url = this.props.promotions[this.state.currentIndex].url;
      let title = this.props.promotions[this.state.currentIndex].title;
      let description = this.props.promotions[this.state.currentIndex].description;
      let fade = this.state.fadeClass;


        return(
          <section className="hero is-large has-image" style={{backgroundImage: "url("+url+")"}}>
            <div className="overlay has-shadow">
            <div className="container">
                <div className="hero-head">
                  <nav className="navbar top-space">
                      <div className="navbar-brand">
                        <a className="no-hover is-hidden-mobile" id="custom-brand-normal">
                          <img src="http://eniedesign.com/assets/hce-logo.png" alt="Logo"/>
                        </a>
                        <a className="no-hover is-hidden-desktop" id="custom-brand-mobile">
                          <img src="http://eniedesign.com/assets/hce-logo.png" alt="Logo"/>
                        </a>
                      </div>
                      <div className="navbar-menu">
                        <div className="navbar-end">
                          <span className="navbar-item">
                            <a className="button is-danger is-outlined">
                              <div className="icon">
                                <i className="fa fa-envelope" aria-hidden="true"></i>
                              </div>
                              <span>Get a Quote!</span>
                            </a>
                          </span>
                        </div>
                      </div>
                  </nav>
                </div>
                <div className="hero-body">
                  <div className="container has-text-centered">
                  
                    <p className={`title ${fade}`}>
                      {title}
                    </p>
                    <p className={`subtitle ${fade}`}>
                      {description}
                    </p>
                  
                  </div>
                </div>
               </div>
             </div>
            </section>
        );
    }
}

Slider.propTypes = {
  promotions: PropTypes.array.isRequired,
}