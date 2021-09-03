import React from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";

import { Col, Row, Button, Overlay, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import ParticlesBG from "./Particles";

export const HomeHero = props => {
	const renderTooltip = props => (
		<Tooltip id="button-tooltip" {...props}>
			Click To Copy!
		</Tooltip>
	);

	return (
		<section className="height100vh hero-section">
			<ParticlesBG />
			<Row className="d-flex justify-content-around">
				<Col className=" ">
					<h5>Hi, {"I'm Maikel"}</h5>
				</Col>
				<Row>
					<h1 className="text-shadows">{`<Full Stack Web Developer/>`}</h1>
				</Row>
				<Row>
					<Col className=" d-flex justify-content-around p-3 ">
						<OverlayTrigger placement="bottom" delay={{ show: 250, hide: 400 }} overlay={renderTooltip}>
							<Button
								onClick={() => navigator.clipboard.writeText("Xenogenesis20@outlook.com")}
								variant="outline-secondary">
								Contact : Maikelwebdev@gmail.com
							</Button>
						</OverlayTrigger>
					</Col>
				</Row>
			</Row>
		</section>
	);
};

HomeHero.propTypes = {};
