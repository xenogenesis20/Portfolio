import React from "react";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import { Container, Nav, NavDropdown } from "react-bootstrap";
import "..//../styles/index.scss";

export const NavBar = () => {
	return (
		<Navbar sticky="top" bg="dark" variant="dark" expand="lg">
			<Container>
				<Navbar.Brand href="#home">Maikel Martinez</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/skills">
							Skills
						</Nav.Link>

						<Nav.Link as={Link} to="/projects">
							Projects
						</Nav.Link>

						<Nav.Link as={Link} to="/about">
							About
						</Nav.Link>
						<Nav.Link as={Link} to="/contact">
							Contact
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
};
