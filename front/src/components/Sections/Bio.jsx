import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { ImageAccueil, Ul, Li, SpanTitle, SpanSubTitle, AccueilImage, H1 } from "../../utils/styles/Acceuil";

const Accueil = () => {

    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };
    const [BioElements, setBioElements] = useState([]);

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



    return (
        <>
            <section id="bio">
                <ImageAccueil><H1>Bio</H1>
                    <Ul id="seeAllBio">
                        {
                            BioElements.map((bio) => (
                                <Li key={bio._id} id={bio._id}><SpanTitle>{bio.title}</SpanTitle><br /><SpanSubTitle>{bio.content}</SpanSubTitle><AccueilImage src={bio.imageUrl} id={bio._id} alt="bio"></AccueilImage></Li>
                            )
                            )}
                    </Ul>
                </ImageAccueil>
            </section>
        </>
    );
}

export default Accueil;
