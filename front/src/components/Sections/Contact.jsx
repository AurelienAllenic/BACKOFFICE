import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Ul, Li, SpanTitle, SpanSubTitle, AccueilImage, H1 } from "../../utils/styles/Acceuil";

const Contact = () => {

    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };
    const [ContactElements, setContactElements] = useState([]);

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



    return (
        <>
            <section id="contact">
                <H1>Contact</H1>
                <Ul id="seeAllContact">
                    {
                        ContactElements.map((contact) => (
                            <Li key={contact._id} id={contact._id}><SpanTitle>{contact.title}</SpanTitle><br /><SpanSubTitle>{contact.content}</SpanSubTitle><AccueilImage src={contact.imageUrl} id={contact._id} alt="contact"></AccueilImage></Li>
                        )
                        )}
                </Ul>
            </section>
        </>
    );
}

export default Contact;
