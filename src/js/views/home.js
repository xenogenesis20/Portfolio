import React from "react";
import "../../styles/index.scss";

//Components
import { HomeHero } from "../component/HomeHero";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import About from "../component/About";
import Contact from "../component/Contact";

//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export const Home = () => (
	<Container fluid>
		<Row>
			<Col>
				<HomeHero />
			</Col>
		</Row>
		<Row>
			<Col>
				<Skills />
			</Col>
		</Row>
		<Row>
			<Col>
				<Projects />
			</Col>
		</Row>

		<Row>
			<Col>
				<About />
			</Col>
		</Row>

		<Row>
			<Col>
				<Contact />
			</Col>
		</Row>
	</Container>
);
