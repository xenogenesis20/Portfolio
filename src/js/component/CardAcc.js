import React from "react";
import PropTypes from "prop-types";
import { Col, Card, Accordion } from "react-bootstrap";
import ProjectCard from "./projectCard";
// import "../styles/itemCard.css";

const CardItemAccordion = ({ colsize, project, index }) => {
	return (
		<Col xl={colsize} lg={12} md={12} sm={12} xs={12}>
			<Accordion className="border-0 bg-transparent">
				<Card key={index} className="m-0 project-box bg-transparent p-0 border-0">
					<Card.Header className="m-0 p-0 border-0 bg-transparent accordion-card">
						<Accordion.Toggle
							as={Card}
							variant="link"
							eventKey={index === 0 ? "0" : index}
							className="m-0 p-0 border-0 bg-transparent">
							<div className="d-flex justify-content-between">
								<span className="project-title">
									{project.title}
									{project.favorite ? <i className="fas fa-star pl-1" /> : null}
								</span>
								<span className="project-links text-right">
									{project.demo ? (
										<Card.Link className="demo" target="_blank" href={project.demo}>
											<span className="demo-text">Demo</span>
										</Card.Link>
									) : null}

									<Card.Link className="icon-link" target="_blank" href={project.github}>
										<i className="fab fa-github" />
									</Card.Link>
								</span>
							</div>
							<div className="d-flex justify-content-between">
								<span className="stack font-italic align-self-center">{project.stack}</span>
								<span className="project-links text-right align-self-center">
									<span className="project-date">{project.date}</span>
								</span>
							</div>
						</Accordion.Toggle>
					</Card.Header>
					<Accordion.Collapse eventKey={index === 0 ? "0" : index}>
						<Card.Body>
							<ProjectCard
								title={project.title}
								image={project.image}
								description={project.description}
							/>
						</Card.Body>
					</Accordion.Collapse>
				</Card>
			</Accordion>
		</Col>
	);
};

CardItemAccordion.propTypes = {
	colsize: PropTypes.number,
	project: PropTypes.object,
	displayProject: PropTypes.func,
	index: PropTypes.number,
	className: PropTypes.string
};

export default CardItemAccordion;
