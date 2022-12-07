import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainTitle, Button, SecondTitle, Ul, Li, SpanArrow } from "../utils/styles/SeeAll"
import { AiOutlineArrowRight } from "react-icons/ai"

function SeeAllAccueil() {
    const [AccueilElements, setAccueilElements] = useState([]);
    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/accueil")
            .then((res) => {
                setAccueilElements(res.data);
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const navigate = useNavigate();
    const goCreate = () => {
        navigate('/create-accueil')
    }
    return (
        <>
            <MainTitle>Accueil</MainTitle>
            <Button onClick={goCreate}><SpanArrow><AiOutlineArrowRight /></SpanArrow>Créer une nouvelle partie de l'accueil</Button>
            <SecondTitle>Ou modifiez/supprimez des parties de l'acceuil déja existantes</SecondTitle>
            <Ul id="seeAll">
                {
                    AccueilElements.map((accueil) => (
                        <Li key={accueil._id} id={accueil._id}><Link style={linkStyle} to={`/seeOne-accueil/${accueil._id}`}>{accueil.title}</Link></Li>
                    )
                    )}
            </Ul>
        </>
    )
}

export default SeeAllAccueil