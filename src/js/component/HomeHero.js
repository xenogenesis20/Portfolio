import React from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";

import { Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import ParticlesBG from "./Particles";

export const HomeHero = props => {
	return (
		<section className="height100vh hero-section">
			<ParticlesBG />
			<Row>
				<Col className=" ">
					<h5>Hello, My Name Is Maikel;</h5>
				</Col>
				<Row>
					<h1>{`<Full Stack Web Developer/>`}</h1>
				</Row>
				<Row>
					<Col>
						<Button variant="outline-secondary">Contact : Xenogenesis20@outlook.com</Button>
					</Col>
				</Row>
			</Row>
		</section>
	);
};

HomeHero.propTypes = {};
