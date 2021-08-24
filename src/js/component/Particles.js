import Particles from "react-particles-js";

import React from "react";
import PropTypes from "prop-types";

const ParticlesBG = props => {
	return (
		<Particles
			params={{
				particles: {
					number: {
						value: 50
					},
					size: {
						value: 3
					}
				},
				interactivity: {
					events: {
						onhover: {
							enable: true,
							mode: "repulse"
						}
					}
				}
			}}
		/>
	);
};

ParticlesBG.propTypes = {};

export default ParticlesBG;
