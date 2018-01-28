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
                                    <img src="https://bulma.io/images/placeholders/640x480.png"/>
                                </figure>
                            </div>
                            <div className="tile is-child box" style={{background: 'gainsboro'}}>
                                <p className="title">Two</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.</p>
                            </div>
                        </div>
                        <div className="tile is-parent">
                            <div className="tile is-child box" style={{background: 'whitesmoke'}}>
                                <p className="title">Three</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut. Morbi maximus, leo sit amet vehicula eleifend, nunc dui porta orci, quis semper odio felis ut quam.</p>
                                <p>Suspendisse varius ligula in molestie lacinia. Maecenas varius eget ligula a sagittis. Pellentesque interdum, nisl nec interdum maximus, augue diam porttitor lorem, et sollicitudin felis neque sit amet erat. Maecenas imperdiet felis nisi, fringilla luctus felis hendrerit sit amet. Aenean vitae gravida diam, finibus dignissim turpis. Sed eget varius ligula, at volutpat tortor.</p>
                                <p>Integer sollicitudin, tortor a mattis commodo, velit urna rhoncus erat, vitae congue lectus dolor consequat libero. Donec leo ligula, maximus et pellentesque sed, gravida a metus. Cras ullamcorper a nunc ac porta. Aliquam ut aliquet lacus, quis faucibus libero. Quisque non semper leo.</p>
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