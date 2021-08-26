import React from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";
import dkflex from "../../img/dkflex.gif";
import mariowalking from "../../img/mariowalking.gif";
import sonicrunning from "../../img/sonicrunning.gif";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export const HomeHero = props => {
	return (
		<section className="height100vh hero-section">
			<Row>
				<Col className="typewriter ">
					<h1>Hello, My Name Is Maikel;</h1>
				</Col>
				<Row>
					<h2>Full Stack Web Developer;</h2>
					<h6>Pizza Lover;</h6>
				</Row>
			</Row>
		</section>
	);
};

HomeHero.propTypes = {};
