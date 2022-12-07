import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainTitle, Button, SecondTitle, Ul, Li, SpanArrow } from "../utils/styles/SeeAll"
import { AiOutlineArrowRight } from "react-icons/ai"

function SeeAllExperience() {
    const [ExperienceElements, setExperienceElements] = useState([]);
    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };

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
    const navigate = useNavigate();
    const goCreate = () => {
        navigate('/create-experience')
    }
    return (
        <>
            <MainTitle>Experience</MainTitle>
            <Button onClick={goCreate}><SpanArrow><AiOutlineArrowRight /></SpanArrow>Créer une nouvelle partie de l'experience</Button>
            <SecondTitle>Ou modifiez/supprimez des parties de l'experience déja existantes</SecondTitle>
            <Ul id="seeAllExperience">
                {
                    ExperienceElements.map((experience) => (
                        <Li key={experience._id} id={experience._id}><Link style={linkStyle} to={`/seeOne-experience/${experience._id}`}>{experience.title}</Link></Li>
                    )
                    )}
            </Ul>
        </>
    )
}

export default SeeAllExperience