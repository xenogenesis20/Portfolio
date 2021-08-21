import React from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";
import { Col, Row, ListGroup } from "react-bootstrap";

const Skills = props => {
	return (
		<section className="height100vh">
			<Row className="p-3 m-3">
				<Col className="p-3 m-3">
					<h1>Skills</h1>
				</Col>
			</Row>
			<Row className="p-3 m-3">
				<Col className="p-3 m-3">
					<p>
						I am a Enthusiastic and solution-driven full stack web developer with a background in the
						medical field who is always motivated and efficient when building projects.
					</p>
				</Col>
				<Row className="text-center justify-content-center">
					<Col className="p-3 m-3">
						<h4>Front end</h4>
						<p>Reactjs</p>
						<p>CSS</p>
						<p>Javascript</p>
						<p>CSS</p>
						<p>Bootstrap</p>
					</Col>
					<Col className="p-3 m-3">
						<h4>Back end</h4>
						<p>Python</p>
						<p>Flask</p>
						<p>SQLAlchemy</p>
						<p> Data-Modeling</p>
						<p>Data-structues</p>
					</Col>
					<Col className="p-3 m-3">
						<h4>Other</h4>
						<p>GIT</p>
						<p>AGILE/SCRUM</p>
						<p>Communication</p>
						<p>Problem-solving</p>
						<p>Adaptibility</p>
					</Col>
				</Row>
			</Row>
			{/* HTML5/CSS3,Bootstrap,Javascript,Node.js,Python,Flask,API's,React.js, Flux, SCRUM, SQL, SQLAlchemy, MySQL,User Stories, Data-Structures, Data-Modeling,REST, MVC, Event oriented programing, The DOM. */}
		</section>
	);
};

Skills.propTypes = {};

export default Skills;
