import React, { Component } from 'react';
import Button from './button';

class InfoSection extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            activeButton: 0,
        }
        this.activateButton = this.activateButton.bind(this);
    }

    activateButton(){
        let prevtButton = this.state.activeButton;
        
    }
    render(){
        return(
            <section className="section">
                <div className="container">
                    <div className="columns  info-buttons">
                       <Button iconName="fa-plus-square" buttonText="New Installs" />
                       <Button iconName="fa-cog" buttonText="Repair & Replacements" />
                       <Button iconName="fa-thermometer-three-quarters" buttonText="Floor Heating" />
                       <Button iconName="fa-snowflake-o" buttonText="Air Conditioning" />        
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

export default InfoSection;
