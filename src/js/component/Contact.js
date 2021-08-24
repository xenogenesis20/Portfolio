import React from "react";
import PropTypes from "prop-types";
import "..//../styles/index.scss";
import { Col, Row, Card } from "react-bootstrap";

const Contact = props => {
	return (
		<section className="height100vh">
			<Row>
				<Col>
					<h1 className="blinking">Let&apos;s talk</h1>
				</Col>
			</Row>
			<Row>
				<Col>
					<p>
						<strong>Congratulations!</strong> <br />
						You have made it to the most important area of my website.
					</p>
				</Col>
			</Row>
			<Row>
				<Col className="d-flex justify-content-center">
					<Card className="mb-2" style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Email</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Send one, its free :)</Card.Subtitle>
							<Card.Text>Xenogenesis20@outlook.com</Card.Text>
							<Card.Link href="#">Card Link</Card.Link>
						</Card.Body>
					</Card>
				</Col>
				<Col className="d-flex justify-content-center">
					<Card className="mb-2" style={{ width: "18rem" }}>
						<Card.Body>
							<Card.Title>Links</Card.Title>
							<Card.Subtitle className="mb-2 text-muted">Click one, you know you want to</Card.Subtitle>
							<Card.Text>Some Social Media links </Card.Text>
							<Card.Link className="icon-link" target="_blank" href="https://github.com/xenogenesis20">
								<i className="fab fa-github" />
							</Card.Link>
							<Card.Link
								className="icon-link"
								target="_blank"
								href="https://www.linkedin.com/in/maikel-martinez-445115205/">
								<i className="fab fa-linkedin-in" />
							</Card.Link>
							<Card.Link className="icon-link" target="_blank" href="https://twitter.com/FWD_Problems">
								<i className="fab fa-twitter" />
							</Card.Link>
						</Card.Body>
					</Card>
				</Col>
			</Row>
		</section>
	);
};

Contact.propTypes = {};

export default Contact;
