import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'



function Header() {
    return (
        <div className="nav-bar">
            <Navbar bg="light" fixed="top" className='nav-bars' >
                <Navbar.Brand href="#home">Mr. Olsen</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link className='menu' href="#home">Home</Nav.Link>
                    <Nav.Link href="#features">Schedule</Nav.Link>
                    <Nav.Link href="#pricing">Homework Policy</Nav.Link>
                    <Nav.Link href="#pricing">Helpful Websites</Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}

export default Header;
