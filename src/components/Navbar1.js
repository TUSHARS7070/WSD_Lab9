import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Navbar1() {
  return (
    <>
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Online Book Store</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    Home
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
  )
}

export default Navbar1
