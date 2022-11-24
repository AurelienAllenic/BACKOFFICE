import React from 'react'

function AdminPanel() {
    return (
        <>
            <h1>Choisissez les éléments que vous souhaitez créer ou modifier pour votre site</h1>
            <ul>
                <li>Section Accueil <a href='/seeAll-accueil'>Voir</a></li>
                <li>Section Bio <a href='/seeAll-bio'>Voir</a></li>
                <li>Section Expérience <a href='/seeAll-experience'>Voir</a></li>
                <li>Section Portfolio <a href='/seeAll-portfolio'>Voir</a></li>
                <li>Section Contact <a href='/seeAll'>Voir</a></li>
            </ul>
        </>
    )
}

export default AdminPanel