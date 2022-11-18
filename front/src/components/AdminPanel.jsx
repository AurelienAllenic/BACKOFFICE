import React from 'react'

function AdminPanel() {
    return (
        <>
            <h1>Choisissez les éléments que vous souhaitez créer ou modifier pour votre site</h1>
            <ul>
                <li>Section <a href="/accueil">Accueil</a></li>
                <li>Section <a href="/bio">Bio</a></li>
                <li>Section <a href="/experience">Experience</a></li>
                <li>Section <a href="/portfolio">Portfolio</a></li>
                <li>Section <a href="/contact">Contact</a></li>
            </ul>
        </>
    )
}

export default AdminPanel