import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { DivInfos, Title, Content, DivButtons, Button, Image } from "../../utils/styles/SeeOne"
import { MainTitle } from "../../utils/styles/AdminPanel"

function Portfolio() {
    const linkStyle = {
        textDecoration: "none",
        color: "black",
    };
    const params = useParams();
    const navigate = useNavigate();
    console.log(params)
    //const noteId = window.location.search.split("?id=").join("");
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/portfolio/${params.id}`).then((res) => {
            setPortfolio(res.data);
            console.log(res.data, "Ici le portfolio'");
        });

    }, []);
    const deletePortfolio = (portfolioId) => {
        axios
            .delete(`http://localhost:4000/api/portfolio/${portfolioId}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                alert(err.message + " - Erreur lors de la suppression du portfolio");
            });
    }

    return (
        <>
            <MainTitle>Voici le post que vous avez séléctionné</MainTitle>
            <DivInfos>
                <Title id={portfolio._id}>{portfolio.title}</Title>
                <Content id={portfolio._id}>{portfolio.content}</Content>
                <Image src={portfolio.imageUrl}></Image>
            </DivInfos>
            <DivButtons>
                <Button>
                    <Link style={linkStyle} to={`/modify-portfolio/${portfolio._id}`}>Modifier</Link>
                </Button>
                <Button onClick={() => deletePortfolio(portfolio._id)}>Supprimer</Button>
            </DivButtons>
        </>
    )
}

export default Portfolio