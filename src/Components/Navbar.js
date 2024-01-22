
import React, { useState } from 'react';
import { Nav, Button, Form, Navbar, Container } from 'react-bootstrap';


const NavBar = ({ filterBySearch }) => {
    const [state, setstate] = useState('')

    const onSearch = () => {
        filterBySearch(state)
    }
    return (
        <Navbar bg="dark" expand="lg" variant='dark'>
            <Container>
                <Navbar.Brand href="#">مطعم جديد</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                            type="text"
                            placeholder="Search"
                            className="me-2"
                            onChange={(e) => setstate(e.target.value)}
                            value={state}
                        />
                        <Button onClick={() => onSearch()} variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}





export default NavBar;
