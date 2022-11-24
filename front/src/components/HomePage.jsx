import React from 'react'
import { Section2, Section3, Section4, Section5 } from '../utils/styles/Homepage'
import Nav from './Nav'
import Accueil from './Sections/Accueil'
import Bio from "./Sections/Bio"
import Experience from './Sections/Experience'


function HomePage() {
    return (
        <>
            <Nav />
            <Accueil id="accueil" />
            <Bio id='bio' />
            <Experience id="experience" />
            <Section4 id='portfolio'>portfolio</Section4>
            <Section5 id='contact'>contact</Section5>
        </>
    )
}

export default HomePage