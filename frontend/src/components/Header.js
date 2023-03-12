import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'

function Header() {
  return (
    <header>
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Thapa Store</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/cart"><i class="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>
            <Nav.Link href="/login"><i class="fa-solid fa-user"></i>Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header