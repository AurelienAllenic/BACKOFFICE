import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SeeAllExperience() {
    const [ExperienceElements, setExperienceElements] = useState([]);
    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/experience")
            .then((res) => {
                setExperienceElements(res.data);
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const navigate = useNavigate();
    const goCreate = () => {
        navigate('/create-experience')
    }
    return (
        <>
            <h1>Experience</h1>
            <button onClick={goCreate}>Créer une nouvelle partie de l'experience</button>
            <h2>Ou modifiez/supprimez des parties de l'experience déja existantes</h2>
            <ul id="seeAllExperience">
                {
                    ExperienceElements.map((experience) => (
                        <li key={experience._id} id={experience._id}><Link style={linkStyle} to={`/seeOne-experience/${experience._id}`}>{experience.title}</Link></li>
                    )
                    )}
            </ul>
        </>
    )
}

export default SeeAllExperience