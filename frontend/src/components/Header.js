import React from 'react'
import {Container, Navbar, Nav} from 'react-bootstrap'
import {LinkContainer} from 'react-router-bootstrap'

function Header() {
  return (
    <header>
    <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
      <Container>
        
        <LinkContainer to='/'>
        <Navbar.Brand >Thapa Store</Navbar.Brand>
        </LinkContainer>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <LinkContainer to='/cart'>
            <Nav.Link><i class="fa-solid fa-cart-shopping"></i>Cart</Nav.Link>
          </LinkContainer>

          <LinkContainer to='/login'>
            <Nav.Link href="/login"><i class="fa-solid fa-user"></i>Login</Nav.Link>
          </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </header>
  )
}

export default Header