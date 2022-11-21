import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SeeAllAccueil() {
    const [AccueilElements, setAccueilElements] = useState([]);
    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/accueil")
            .then((res) => {
                setAccueilElements(res.data);
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const navigate = useNavigate();
    const goCreate = () => {
        navigate('/create-accueil')
    }
    return (
        <>
            <h1>Accueil</h1>
            <button onClick={goCreate}>Créer une nouvelle partie de l'accueil</button>
            <h2>Ou modifiez/supprimez des parties de l'acceuil déja existantes</h2>
            <ul id="seeAll">
                {
                    AccueilElements.map((accueil) => (
                        <li key={accueil._id} id={accueil._id}><Link style={linkStyle} to={`/seeOne-accueil/${accueil._id}`}>{accueil.title}</Link></li>
                    )
                    )}
            </ul>
        </>
    )
}

export default SeeAllAccueil