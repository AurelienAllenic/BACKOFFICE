import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Experience() {
    const linkStyle = {
        textDecoration: "none",
        color: "black",
    };
    const params = useParams();
    const navigate = useNavigate();
    console.log(params)
    //const noteId = window.location.search.split("?id=").join("");
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/experience/${params.id}`).then((res) => {
            setExperience(res.data);
            console.log(res.data, "Ici l'experience");
        });

    }, []);
    const deleteExperience = (experienceId) => {
        axios
            .delete(`http://localhost:4000/api/experience/${experienceId}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                alert(err.message + " - Erreur lors de la suppression de l'experience");
            });
    }

    return (
        <>
            <div>
                <h1 id={experience._id}>{experience.title}</h1>
                <p id={experience._id}>{experience.content}</p>
            </div>
            <div>
                <button>
                    <Link style={linkStyle} to={`/modify-experience/${experience._id}`}>Modifier</Link>
                </button>
                <button onClick={() => deleteExperience(experience._id)}>Supprimer</button>
            </div>
        </>
    )
}

export default Experience