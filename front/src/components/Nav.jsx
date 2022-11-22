import React from 'react'
import { Nav, NavElement } from "../utils/styles/Nav"

function Navbar() {
    return (
        <>
            <Nav>
                <NavElement href="#accueil">Accueil</NavElement>
                <NavElement href="#bio">Bio</NavElement>
                <NavElement href="#experience">Expérience</NavElement>
                <NavElement href="#portfolio">Portfolio</NavElement>
                <NavElement href="#contact">Contact</NavElement>
            </Nav>
        </>
    )
}

export default Navbar