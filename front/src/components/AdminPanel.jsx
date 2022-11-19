import React from 'react'

function AdminPanel() {
    return (
        <>
            <h1>Choisissez les éléments que vous souhaitez créer ou modifier pour votre site</h1>
            <ul>
                <li>Section Accueil <a href='/seeAll'>Voir</a></li>
                <li>Section Bio <a href='/seeAll'>Voir</a></li>
                <li>Section Expérience <a href='/seeAll'>Voir</a></li>
                <li>Section Portfolio <a href='/seeAll'>Voir</a></li>
                <li>Section Contact <a href='/seeAll'>Voir</a></li>
            </ul>
        </>
    )
}

export default AdminPanel