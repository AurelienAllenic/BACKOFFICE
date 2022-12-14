import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Ul, Li, SpanTitle, SpanSubTitle, AccueilImage, H1 } from "../../utils/styles/Acceuil";

const Accueil = () => {

    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };
    const [AccueilElements, setAccueilElements] = useState([]);

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



    return (
        <>
            <section id="accueil">
                <H1>Accueil</H1>
                <Ul id="seeAll">
                    {
                        AccueilElements.map((accueil) => (
                            <Li key={accueil._id} id={accueil._id}><SpanTitle>{accueil.title}</SpanTitle><br /><SpanSubTitle>{accueil.content}</SpanSubTitle><AccueilImage src={accueil.imageUrl} id={accueil._id} alt="accueil"></AccueilImage></Li>
                        )
                        )}
                </Ul>
            </section>
        </>
    );
}

export default Accueil;
