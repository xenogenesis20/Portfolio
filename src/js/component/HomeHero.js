import React from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";
import dkflex from "../../img/dkflex.gif";
import mariowalking from "../../img/mariowalking.gif";
import sonicrunning from "../../img/sonicrunning.gif";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ParticlesBG from "./Particles";

export const HomeHero = props => {
	return (
		<section className="height100vh hero-section">
			<Row>
				<Col className=" ">
					<h5>Hello, My Name Is Maikel;</h5>
				</Col>
				<Row>
					<ParticlesBG />

					<h2>{`<Full Stack Web Developer/>`}</h2>
				</Row>
			</Row>
		</section>
	);
};

HomeHero.propTypes = {};
