import React from "react";
import PropTypes from "prop-types";
import Particles from "react-particles-js";
import mariowalking from "../../img/mariowalking.gif";

const ImgParticles = props => {
	return (
		<Particles
			id="particles2"
			params={{
				particles: {
					number: {
						value: 8,
						density: {
							enable: true,
							value_area: 800
						}
					},
					line_linked: {
						enable: false
					},
					move: {
						speed: 1,
						out_mode: "out"
					},
					shape: {
						type: ["image"],
						image: [
							{
								src: mariowalking,
								height: 20,
								width: 23
							}
						]
					},
					color: {
						value: "#CCC"
					},
					size: {
						value: 30,
						random: false,
						anim: {
							enable: true,
							speed: 4,
							size_min: 10,
							sync: false
						}
					}
				},
				retina_detect: false
			}}
		/>
	);
};

ImgParticles.propTypes = {};

export default ImgParticles;
