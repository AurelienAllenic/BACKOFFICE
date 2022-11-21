import React from 'react'
import { Section2, Section3, Section4, Section5 } from '../utils/styles/Homepage'
import Accueil from './Sections/Accueil'

function HomePage() {
    return (
        <>
            <Accueil />
            <Section2 id='bio'>Bio</Section2>
            <Section3 id='experience'>experience</Section3>
            <Section4 id='portfolio'>portfolio</Section4>
            <Section5 id='contact'>contact</Section5>
        </>
    )
}

export default HomePage