import React from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";
import { Col, Row, ListGroup } from "react-bootstrap";

const Skills = props => {
	return (
		<section className="height100vh">
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
					<Col className="padding-margin">
						<h4>
							Front <br />
							end{" "}
						</h4>

						<p>Reactjs</p>
						<p>CSS</p>
						<p>Javascript</p>
						<p>HTML</p>
						<p>Bootstrap</p>
					</Col>
					<Col className="padding-margin">
						<h4>
							Back <br />
							end
						</h4>
						<p>Python</p>
						<p>Flask</p>
						<p>SQLAlchemy</p>
						<p> Data-Modeling</p>
						<p>Data-structues</p>
					</Col>
					<Col className="padding-margin">
						<h4>
							Other <br /> skills
						</h4>
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
