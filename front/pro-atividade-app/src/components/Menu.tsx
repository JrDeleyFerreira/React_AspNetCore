import React from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'

const Menu = () => {

	const getActiveRout = useLocation().pathname ? 'Active' : '';

	// Componente React em - https://react-bootstrap.github.io/
	return (
		<Navbar bg='light' expand="lg" className="bg-body-tertiary" variant='light'>
			<Container>
				<Navbar.Brand as={NavLink} to='/'>Full-Stack React/C#</Navbar.Brand>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="me-auto">
						<Nav.Link
							className={getActiveRout}
							as={NavLink}
							to='/cliente'>Clientes</Nav.Link>
						<Nav.Link
							className={getActiveRout}
							as={NavLink}
							to='/atividade'>Atividdes</Nav.Link>
					</Nav>
					<Nav>
						<NavDropdown align="end" title="Dropdown" id="basic-nav-dropdown">
							<NavDropdown.Item href="#action/3.1">Perfil</NavDropdown.Item>
							<NavDropdown.Item href="#action/3.3">Configuração</NavDropdown.Item>
							<NavDropdown.Divider />
							<NavDropdown.Item href="#action/3.4">Sair</NavDropdown.Item>
						</NavDropdown>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	);
}

export default Menu;