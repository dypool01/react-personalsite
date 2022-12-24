import React from "react";
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <Navbar expand='md' variant='dark' bg='dark' className='p-3'>
            <Navbar.Brand href='/'>Dylan Poole</Navbar.Brand>

            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav>
                    {/* LINKS GO IN HERE */}
                <Link to='/Resume' className='nav-link'>Resume</Link>
                <Link to='/Contact' className='nav-link'>Contact</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}