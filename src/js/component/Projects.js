import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";
import PROJECTS from "../../assets/githubprojects";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./projectCard";
import CardItem from "./itemCard";
import CardItemAccordion from "./CardAcc";
import { Debug } from "./Debug";
// import "../styles/projects.css";

const Projects = props => {
	const [project, setProject] = useState({
		title: "A note about this section",
		image: "https://res.cloudinary.com/bafian/image/upload/c_scale,h_250/hello_world_mhiqdg.png",
		description: "Here you can find projects that I have worked on. Some of them are exercises from 4GeeksAcademy"
	});

	const [filter, setFilter] = useState("github");
	const [colsize, setColsize] = useState(4);
	const [width, setWidth] = useState(window.innerWidth);
	const [placeHolder, setPlaceHolder] = useState([]);
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

	useEffect(() => {
		if (PROJECTS.length % 3 !== 0) {
			let len = PROJECTS.length;
			const placeHolderArr = [];
			let i = 0;
			while (len % 3 !== 0) {
				placeHolderArr.push(i);
				i++;
				len++;
			}
			setPlaceHolder(placeHolderArr);
		}
	}, []);

	function displayProject(project) {
		setProject({
			title: project.title,
			image: project.image,
			description: project.description
		});
	}

	function filterArr(prop) {
		setFilter(prop);
		setColsize(12);
	}

	function resetArr(prop) {
		setFilter(prop);
		setColsize(4);
	}

	return (
		<section className="height100vh">
			<h1>Projects</h1>
			<Row className="project-container">
				<Col xl={8} lg={8} md={12} sm={12} xs={12} className="projects-list">
					<div className="filter d-flex w-100 justify-content-between mb-2 mt-3">
						<span className="filter-link mr-1 ml-3" onMouseOver={() => resetArr("github")}>
							All
						</span>
						<span className="filter-link mr-1" onMouseOver={() => filterArr("favorite")}>
							Favorites
						</span>
						<span className="filter-link mr-1" onMouseOver={() => filterArr("backend")}>
							Backend
						</span>
						<span className="filter-link mr-2" onMouseOver={() => filterArr("snipet")}>
							Smaller
						</span>
					</div>
					{/* </Row> */}
					<Row className="projects mt-4 d-flex justify-content-center" id="style13">
						{PROJECTS.filter(p => p[`${filter}`]).map(
							(project, index) =>
								width < breakpoint ? (
									<Debug
										colsize={colsize}
										project={project}
										index={index}
										className="accordion-card"
										key={index}
									/>
								) : (
									<CardItem
										colsize={colsize}
										project={project}
										displayProject={displayProject}
										index={index}
										key={index}
									/>
								)
						)}
						{placeHolder.map(e => (
							<Col key={e} xl={colsize} lg={12} md={12} sm={12} xs={12} />
						))}
					</Row>
				</Col>
				<Col
					className={
						width < breakpoint ? "d-none" : "project-detail d-flex justify-content-around flex-column"
					}>
					<ProjectCard title={project.title} image={project.image} description={project.description} />
				</Col>
			</Row>
		</section>
	);
};

Projects.propTypes = {
	colsize: PropTypes.number,
	project: PropTypes.object,
	displayProject: PropTypes.func,
	index: PropTypes.number
};

export default Projects;
