import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SeeAllBio() {
    const [BioElements, setBioElements] = useState([]);
    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/bio")
            .then((res) => {
                setBioElements(res.data);
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const navigate = useNavigate();
    const goCreate = () => {
        navigate('/create-bio')
    }
    return (
        <>
            <h1>Bio</h1>
            <button onClick={goCreate}>Créer une nouvelle partie de la bio</button>
            <h2>Ou modifiez/supprimez des parties de la bio déja existantes</h2>
            <ul id="seeAllBio">
                {
                    BioElements.map((bio) => (
                        <li key={bio._id} id={bio._id}><Link style={linkStyle} to={`/seeOne-bio/${bio._id}`}>{bio.title}</Link></li>
                    )
                    )}
            </ul>
        </>
    )
}

export default SeeAllBio