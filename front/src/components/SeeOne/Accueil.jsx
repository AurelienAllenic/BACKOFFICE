import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Accueil() {
    const linkStyle = {
        textDecoration: "none",
        color: "black",
    };
    const params = useParams();
    const navigate = useNavigate();
    console.log(params)
    //const noteId = window.location.search.split("?id=").join("");
    const [accueil, setAccueil] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/accueil/${params.id}`).then((res) => {
            setAccueil(res.data);
            console.log(res.data, "Ici l'accueil'");
        });

    }, []);
    const deleteAccueil = (accueilId) => {
        axios
            .delete(`http://localhost:4000/api/accueil/${accueilId}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                alert(err.message + " - Erreur lors de la suppression de la note");
            });
    }

    return (
        <>
            <div>
                <h1 id={accueil._id}>{accueil.name}</h1>
                <p id={accueil._id}>{accueil.content}</p>
            </div>
            <div>
                <button>
                    <Link style={linkStyle} to={`/modify-accueil/${accueil._id}`}>Modifier</Link>
                </button>
                <button onClick={() => deleteAccueil(accueil._id)}>Supprimer</button>
            </div>
        </>
    )
}

export default Accueil