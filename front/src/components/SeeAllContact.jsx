import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainTitle, Button, SecondTitle, Ul, Li, SpanArrow } from "../utils/styles/SeeAll"
import { AiOutlineArrowRight } from "react-icons/ai"

function SeeAllContact() {
    const [ContactElements, setContactElements] = useState([]);
    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/contact")
            .then((res) => {
                setContactElements(res.data);
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const navigate = useNavigate();
    const goCreate = () => {
        navigate('/create-contact')
    }
    return (
        <>
            <MainTitle>Contact</MainTitle>
            <Button onClick={goCreate}><SpanArrow><AiOutlineArrowRight /></SpanArrow>Créer une nouvelle partie du contact</Button>
            <SecondTitle>Ou modifiez/supprimez des parties du contact déja existantes</SecondTitle>
            <Ul id="seeAllContact">
                {
                    ContactElements.map((contact) => (
                        <Li key={contact._id} id={contact._id}><Link style={linkStyle} to={`/seeOne-contact/${contact._id}`}>{contact.title}</Link></Li>
                    )
                    )}
            </Ul>
        </>
    )
}

export default SeeAllContact