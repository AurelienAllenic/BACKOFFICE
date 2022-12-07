import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { DivInfos, Title, Content, DivButtons, Button, Image } from "../../utils/styles/SeeOne"
import { MainTitle } from "../../utils/styles/AdminPanel"

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
            <MainTitle>Voici le post que vous avez séléctionné</MainTitle>
            <DivInfos>
                <Title id={experience._id}>{experience.title}</Title>
                <Content id={experience._id}>{experience.content}</Content>
                <Image src={experience.imageUrl}></Image>
            </DivInfos>
            <DivButtons>
                <Button>
                    <Link style={linkStyle} to={`/modify-experience/${experience._id}`}>Modifier</Link>
                </Button>
                <Button onClick={() => deleteExperience(experience._id)}>Supprimer</Button>
            </DivButtons>
        </>
    )
}

export default Experience