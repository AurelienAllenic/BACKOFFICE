import React from 'react'
import { MainTitle, Ul, Li, A } from "../utils/styles/AdminPanel"

function AdminPanel() {
    return (
        <>
            <MainTitle>Choisissez les éléments que vous souhaitez créer ou modifier pour votre site</MainTitle>
            <Ul>
                <Li>Section Accueil <A href='/seeAll-accueil'>Voir</A></Li>
                <Li>Section Bio <A href='/seeAll-bio'>Voir</A></Li>
                <Li>Section Expérience <A href='/seeAll-experience'>Voir</A></Li>
                <Li>Section Portfolio <A href='/seeAll-portfolio'>Voir</A></Li>
                <Li>Section Contact <A href='/seeAll-contact'>Voir</A></Li>
            </Ul>
        </>
    )
}

export default AdminPanel