import React from 'react'
import { Link, useNavigate } from "react-router-dom";

function SeeAll() {
    const navigate = useNavigate();
    const goCreate = () => {
        navigate('/create-accueil')
    }
    return (
        <>
            <h1>Page du SeeAll</h1>
            <button onClick={goCreate}>Créer une nouvelle partie de l'accueil</button>
        </>
    )
}

export default SeeAll