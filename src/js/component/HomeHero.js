import React from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";

export const HomeHero = props => {
	return (
		<section className="blue">
			<h1>
				Hello, <span />
			</h1>
			<h1>
				My Name is <span />
			</h1>
			<h1>
				Maikel <span />
			</h1>
		</section>
	);
};

HomeHero.propTypes = {};
