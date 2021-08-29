import React, { useState, useEffect } from "react";
import "../../styles/index.scss";

//Components
import { HomeHero } from "../component/HomeHero";
import Skills from "../component/Skills";
import Projects from "../component/Projects";
import About from "../component/About";
import Contact from "../component/Contact";
import ParticlesBG from "../component/Particles";
//Bootstrap imports
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { HeroCanvas } from "../component/HeroCanvas";

export const Home = () => {
	const [width, setWidth] = useState(window.innerWidth);
	const breakpoint = 992;

	useEffect(
		() => {
			console.log(window.innerWidth);
			const handleWindowResize = () => setWidth(window.innerWidth);
			window.addEventListener("resize", handleWindowResize);
			return () => window.removeEventListener("resize", handleWindowResize);
		},
		[width]
	);

	return (
		<Container fluid>
			{/* <ParticlesBG /> */}
			<Row className="h-100">
				<h3>Hi, My Name is Maikel,</h3>
				<Col>{width < breakpoint ? <HomeHero /> : <HeroCanvas />}</Col>
			</Row>
			<Row>
				<Col>
					<Skills />
				</Col>
			</Row>
			<Row className="m-6">
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
};
