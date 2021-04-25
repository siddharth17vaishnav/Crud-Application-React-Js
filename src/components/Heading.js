import React from 'react'
import {Link} from 'react-router-dom'
import {
    Navbar,
    
    NavItem,
    NavbarBrand,
    Container
} from 'reactstrap'

export const Heading = () => {
    return (
        <Navbar color="dark" dark>
            <Container>
                <NavbarBrand href="/">My Team</NavbarBrand>
                <NavItem>
                    <Link to="/add" className="btn btn-primary">Add User</Link>
                </NavItem>
            </Container>
        </Navbar>
    )
}

export default Heading