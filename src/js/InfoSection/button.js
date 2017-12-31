import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
    const {name, handleClick, active, iconName, buttonText} = props;
    return (       
    <div className="column">        
        <div className={`box has-text-centered ${active}`} onClick={handleClick.bind(this, name)}>
            <div className="icon is-large">
                <i className={`fa fa-2x ${iconName}`} aria-hidden="true"></i>
            </div>
            <br/>
            <p> {buttonText} </p>            
        </div>       
    </div>
    );
}
Button.propTypes = {
    iconName: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
    handleClick: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    active: PropTypes.string.isRequired,
}

export default Button;