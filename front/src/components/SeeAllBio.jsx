import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainTitle, Button, SecondTitle, Ul, Li, SpanArrow } from "../utils/styles/SeeAll"
import { AiOutlineArrowRight } from "react-icons/ai"

function SeeAllBio() {
    const [BioElements, setBioElements] = useState([]);
    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };

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
    const navigate = useNavigate();
    const goCreate = () => {
        navigate('/create-bio')
    }
    return (
        <>
            <MainTitle>Bio</MainTitle>
            <Button onClick={goCreate}><SpanArrow><AiOutlineArrowRight /></SpanArrow>Créer une nouvelle partie de la bio</Button>
            <SecondTitle>Ou modifiez/supprimez des parties de la bio déja existantes</SecondTitle>
            <Ul id="seeAllBio">
                {
                    BioElements.map((bio) => (
                        <Li key={bio._id} id={bio._id}><Link style={linkStyle} to={`/seeOne-bio/${bio._id}`}>{bio.title}</Link></Li>
                    )
                    )}
            </Ul>
        </>
    )
}

export default SeeAllBio