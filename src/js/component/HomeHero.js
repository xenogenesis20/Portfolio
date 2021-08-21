import React from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";
import dkflex from "../../img/dkflex.gif";
import mariowalking from "../../img/mariowalking.gif";
import sonicrunning from "../../img/sonicrunning.gif";
import { Col, Row } from "react-bootstrap";

export const HomeHero = props => {
	return (
		<section className="height100vh hero-section">
			<div className="typewriter ">
				<h1>
					Hello,
					<br />
					My Name Is
					<br />
					Maikel;
				</h1>
			</div>
			<div className="character-selection">
				<Row>
					<Col>
						<h2 className="text-center">Pick a character!</h2>
					</Col>
				</Row>
				<Row>
					<Col className="d-flex justify-content-center">
						<div>
							<img className="sprite" src={dkflex} alt="Donkey Kong" />
						</div>
					</Col>
					<Col className="d-flex justify-content-center">
						<div>
							<img className="sprite" src={mariowalking} alt="Mario" />
						</div>
					</Col>
					<Col className="d-flex justify-content-center">
						<div>
							<img className="sprite" src={sonicrunning} alt="Mario" />
						</div>
					</Col>
				</Row>
			</div>
		</section>
	);
};

HomeHero.propTypes = {};
