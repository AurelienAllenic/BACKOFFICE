import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { DivInfos, Title, Content, DivButtons, Button, Image } from "../../utils/styles/SeeOne"
import { MainTitle } from "../../utils/styles/AdminPanel"

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
            <MainTitle>Voici le post que vous avez séléctionné</MainTitle>
            <DivInfos>
                <Title id={accueil._id}>{accueil.title}</Title>
                <Content id={accueil._id}>{accueil.content}</Content>
                <Image src={accueil.imageUrl}></Image>
            </DivInfos>
            <DivButtons>
                <Button>
                    <Link style={linkStyle} to={`/modify-accueil/${accueil._id}`}>Modifier</Link>
                </Button>
                <Button onClick={() => deleteAccueil(accueil._id)}>Supprimer</Button>
            </DivButtons>
        </>
    )
}

export default Accueil