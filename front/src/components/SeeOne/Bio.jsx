import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Bio() {
    const linkStyle = {
        textDecoration: "none",
        color: "black",
    };
    const params = useParams();
    const navigate = useNavigate();
    console.log(params)
    //const noteId = window.location.search.split("?id=").join("");
    const [bio, setBio] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/bio/${params.id}`).then((res) => {
            setBio(res.data);
            console.log(res.data, "Ici la bio'");
        });

    }, []);
    const deleteBio = (bioId) => {
        axios
            .delete(`http://localhost:4000/api/bio/${bioId}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                alert(err.message + " - Erreur lors de la suppression de la bio");
            });
    }

    return (
        <>
            <div>
                <h1 id={bio._id}>{bio.name}</h1>
                <p id={bio._id}>{bio.content}</p>
            </div>
            <div>
                <button>
                    <Link style={linkStyle} to={`/modify-bio/${bio._id}`}>Modifier</Link>
                </button>
                <button onClick={() => deleteBio(bio._id)}>Supprimer</button>
            </div>
        </>
    )
}

export default Bio