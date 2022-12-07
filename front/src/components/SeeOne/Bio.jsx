import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { DivInfos, Title, Content, DivButtons, Button, Image } from "../../utils/styles/SeeOne"
import { MainTitle } from "../../utils/styles/AdminPanel"
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
            <MainTitle>Voici le post que vous avez séléctionné</MainTitle>
            <DivInfos>
                <Title id={bio._id}>{bio.title}</Title>
                <Content id={bio._id}>{bio.content}</Content>
                <Image src={bio.imageUrl}></Image>
            </DivInfos>
            <DivButtons>
                <Button>
                    <Link style={linkStyle} to={`/modify-bio/${bio._id}`}>Modifier</Link>
                </Button>
                <Button onClick={() => deleteBio(bio._id)}>Supprimer</Button>
            </DivButtons>
        </>
    )
}

export default Bio