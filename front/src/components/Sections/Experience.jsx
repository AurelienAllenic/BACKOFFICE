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
    const [ExperienceElements, setExperienceElements] = useState([]);

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



    return (
        <>
            <section id="experience">
                <ImageAccueil><H1>Experience</H1>
                    <Ul id="seeAllExperience">
                        {
                            ExperienceElements.map((experience) => (
                                <Li key={experience._id} id={experience._id}><SpanTitle>{experience.title}</SpanTitle><br /><SpanSubTitle>{experience.content}</SpanSubTitle><AccueilImage src={experience.imageUrl} id={experience._id} alt="experience"></AccueilImage></Li>
                            )
                            )}
                    </Ul>
                </ImageAccueil>
            </section>
        </>
    );
}

export default Accueil;
