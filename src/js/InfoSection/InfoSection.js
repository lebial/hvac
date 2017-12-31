import React, { Component } from 'react';
import Button from './button';
import PropTypes from 'prop-types';

class InfoSection extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            activeButton: '',
        }
        this.activateButton = this.activateButton.bind(this);
    }

    activateButton(name){        
        this.setState({activeButton: name});
    }
    render(){
        let buttons = this.props.buttons;
        return(
            <section className="section">
                <div className="container">
                    <div className="columns  info-buttons">
                    {buttons.map(btn => {
                        return (
                            <Button 
                                iconName={btn.iconName} 
                                buttonText={btn.buttonText} 
                                handleClick={this.activateButton}
                                name={btn.name}
                                active={btn.name === this.state.activeButton ? 'active-button' : ''} 
                                // TODO/: mod button component to accept this logic.
                            />                            
                        )
                    })}     
                    </div>
                </div>
                <div className="info-container">
                    <div className="container">
                        <div className="column ">
                            <div className="card">
                                <div className="card-content">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
 
        );
    }
}

InfoSection.propTypes = {
    BUTTONS: PropTypes.array.isRequired,
}

export default InfoSection;
