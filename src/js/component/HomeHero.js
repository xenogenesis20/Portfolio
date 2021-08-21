import React from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";

export const HomeHero = props => {
	return (
		<section className="typewriter height100vh">
			<h1>
				Hello,
				<br />
				My Name Is
				<br />
				Maikel;
			</h1>
		</section>
	);
};

HomeHero.propTypes = {};
