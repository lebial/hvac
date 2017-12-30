import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    return (
    <div className="column">        
        <div className="box has-text-centered">
            <div className="icon is-large">
                <i className={`fa fa-2x ${props.iconName}`} aria-hidden="true"></i>
            </div>
            <br/>
            <p> {props.buttonText} </p>            
        </div>       
    </div>
    );
}
Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    activateButton: PropTypes.func.isRequired,
}

export default Button;