import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Image } from "react-bootstrap";
// import "../styles/projectcard.css";

const ProjectCard = ({ title, image, description }) => {
	return (
		<Container className="project-detail-container mt-4">
			<Row
				className="title-box d-flex justify-content-center align-content-center text-uppercase mb-2"
				style={{ fontSize: "1.5em" }}>
				{title}
			</Row>
			<Row className="image-box d-flex justify-content-center align-content-center mb-2">
				<Image className="card-image" src={image} alt={`${title} image`} fluid />
			</Row>
			<Row
				className={
					description.length > 130
						? "description-box-long d-flex justify-content-center"
						: "description-box d-flex justify-content-center"
				}>
				{description}
			</Row>
		</Container>
	);
};

ProjectCard.propTypes = {
	title: PropTypes.string,
	image: PropTypes.string,
	description: PropTypes.string
};

export default ProjectCard;
