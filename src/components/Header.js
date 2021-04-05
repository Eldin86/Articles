import React from 'react'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Container } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import Image from './Image'
import { listNews } from '../actions/newsActions'

import Logo from '../assets/logo-min.png'

const Header = () => {
    const dispatch = useDispatch()
    const navbarLogoHandler = () => {
        dispatch(listNews())
    }

    return (
        <header>
            <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
                <Container>
                    <LinkContainer to="/">
                        <Navbar.Brand><Image onClick={navbarLogoHandler}  src={Logo} name="Logo" /></Navbar.Brand>
                    </LinkContainer>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header
