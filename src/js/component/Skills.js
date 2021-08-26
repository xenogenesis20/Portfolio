import React from "react";
import PropTypes from "prop-types";
import "../../styles/index.scss";
import ImgParticles from "./ImgParticles";
import { Col, Row, ListGroup } from "react-bootstrap";

const Skills = props => {
	return (
		<section className="height100vh mbottom">
			<Row className="padding-margin">
				<Col className="padding-margin">
					<h1 id="skills">Skills</h1>
				</Col>
			</Row>
			<Row className="padding-margin">
				<Col className="padding-margin">
					<p>
						I am a enthusiastic and solution-driven full stack web developer with a background in the
						medical field who is always motivated and efficient when building projects.
					</p>
				</Col>
				<Row className="text-center justify-content-center">
					<Col xs={12} lg={true} className="padding-margin">
						<h2>Front end </h2>

						<p>Reactjs</p>
						<p>CSS</p>
						<p>Javascript</p>
						<p>HTML</p>
						<p>Bootstrap</p>
					</Col>
					<Col xs={12} lg={true} className="padding-margin">
						<h2>Back end</h2>
						<p>Python</p>
						<p>Flask</p>
						<p>SQLAlchemy</p>
						<p> Data-Modeling</p>
						<p>Data-structues</p>
					</Col>
					<Col xs={12} lg={true} className="padding-margin">
						<h2>Other skills</h2>
						<p>GIT</p>
						<p>AGILE/SCRUM</p>
						<p>Communication</p>
						<p>Problem-solving</p>
						<p>Adaptibility</p>
					</Col>
				</Row>
			</Row>
			<Row>{/* <ImgParticles /> */}</Row>
		</section>
	);
};

Skills.propTypes = {};

export default Skills;
