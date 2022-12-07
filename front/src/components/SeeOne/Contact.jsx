import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { DivInfos, Title, Content, DivButtons, Button, Image } from "../../utils/styles/SeeOne"
import { MainTitle } from "../../utils/styles/AdminPanel"

function Contact() {
    const linkStyle = {
        textDecoration: "none",
        color: "black",
    };
    const params = useParams();
    const navigate = useNavigate();
    console.log(params)
    //const noteId = window.location.search.split("?id=").join("");
    const [contact, setContact] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/contact/${params.id}`).then((res) => {
            setContact(res.data);
            console.log(res.data, "Ici le contact'");
        });

    }, []);
    const deleteContact = (contactId) => {
        axios
            .delete(`http://localhost:4000/api/contact/${contactId}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                alert(err.message + " - Erreur lors de la suppression du contact");
            });
    }

    return (
        <>
            <MainTitle>Voici le post que vous avez séléctionné</MainTitle>
            <DivInfos>
                <Title id={contact._id}>{contact.title}</Title>
                <Content id={contact._id}>{contact.content}</Content>
                <Image src={contact.imageUrl}></Image>
            </DivInfos>
            <DivButtons>
                <Button>
                    <Link style={linkStyle} to={`/modify-contact/${contact._id}`}>Modifier</Link>
                </Button>
                <Button onClick={() => deleteContact(contact._id)}>Supprimer</Button>
            </DivButtons>
        </>
    )
}

export default Contact