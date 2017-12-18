import React, { Component } from 'react';

export default class Slider extends Component{

    constructor(props){
        super(props);
        this.state = {
          currentIndex: 0,
          slides: [
            { index: 0,
              url: 'http://paulryan.com.au/wp-content/uploads/2015/01/high-resolution-wallpapers-25.jpg',
              title: 'Promotion 1 title',
              description: 'This is the first description'},
            { index: 1,
              url: 'http://eniedesign.com/assets/main-bg.jpg',
              title: 'Promotion Title 2',
              description: 'This is the second description'},
            { index: 2,
              url: 'https://wallpaper.wiki/wp-content/uploads/2017/06/Free-Backgrounds-Leopard-HD-Wallpaper-High-Resolution.jpg',
              title: 'Promotion Title 2',
              description: 'This is the second description'},
          ],

        }
          changeSlide(){
            let current = this.state.currentIndex;
            current === 2 ? current = 0 : current++;
            this.setState({
              currentIndex: current
            });
        }
    }

    render(){


      var  url = this.state.slides[this.state.currentIndex].url;

        return(
          <section className="hero is-large has-image" style={{backgroundImage: "url("+url+")"}} onClick={() => this.changeSlide}>
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
                    <p className="title">
                      Promotion title
                    </p>
                    <p className="subtitle">
                      Promotion Description.
                      it can be long text
                    </p>
                  </div>
                </div>
               </div>
             </div>
            </section>
        );
    }
}
