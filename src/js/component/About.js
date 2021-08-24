import React from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";
import { Col, Row } from "react-bootstrap";

const About = props => {
	return (
		<section className="height100vh">
			<Row>
				<Col>
					<h1>About</h1>
				</Col>
			</Row>
			<Row className="overflow-auto">
				<Col>
					<p>
						Hey there! <br />I am glad you made it this far. Let me tell you a little bit about myself. My
						name is Maikel Martinez , I was born in Cuba and my family decided to make the trip to the
						United States in 1994. Via boat mind you, I&apos;ve been told the trip was crazy! I have been
						working as a medical assistant for the past 7 years in a pediatric neurology office and I have
						enjoyed it but I have found my passion in coding. I began with the basics and then moved onto
						more advanced topics which you might have read about above in the skills section. I enjoy taking
						on difficult problems and finding efficient scalable solutions. There is always something new to
						learn in the world of web development and I dip my toes into every pool information I find.
					</p>
				</Col>
			</Row>
		</section>
	);
};

About.propTypes = {};

export default About;
