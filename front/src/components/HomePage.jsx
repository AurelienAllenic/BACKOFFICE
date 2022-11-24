import React from 'react'
import { Section2, Section3, Section4, Section5 } from '../utils/styles/Homepage'
import Nav from './Nav'
import Accueil from './Sections/Accueil'
import Bio from "./Sections/Bio"
import Experience from './Sections/Experience'
import Portfolio from './Sections/Portfolio'
import Contact from "./Sections/Contact"


function HomePage() {
    return (
        <>
            <Nav />
            <Accueil id="accueil" />
            <Bio id='bio' />
            <Experience id="experience" />
            <Portfolio id="portfolio" />
            <Contact id='contact' />
        </>
    )
}

export default HomePage