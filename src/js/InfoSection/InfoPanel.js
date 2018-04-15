import React from 'react';
import PropTypes from 'prop-types';

const InfoPanel = (props) => {
    return (
        <div className="info-container">
            <div className="container">
                <div className="column ">
                    <div className="tile is-ancestor">
                        <div className="tile is-4 is-vertical is-parent ">
                            <div className="tile is-child box  has-text-centered" style={{background: 'silver'}}>
                                <p className="title">{props.info.primary.title}</p>
                                <figure class="image is-128x128 ">
                                    <img src={props.info.primary.image}/>
                                </figure>
                            </div>
                            <div className="tile is-child box" style={{background: 'gainsboro'}}>
                                <p className="title">{props.info.secondary.title}</p>
                                <p>{props.info.secondary.description}</p>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box" style={{background: 'whitesmoke'}}>
                                <p className="title">{props.info.main.title}</p>

                                <p>{props.info.main.description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
InfoPanel.propTypes = {
    info: PropTypes.object.isRequired,
}
export default InfoPanel;
