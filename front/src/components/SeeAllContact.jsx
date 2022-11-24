import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

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
            <h1>Contact</h1>
            <button onClick={goCreate}>Créer une nouvelle partie du contact</button>
            <h2>Ou modifiez/supprimez des parties du contact déja existantes</h2>
            <ul id="seeAllContact">
                {
                    ContactElements.map((contact) => (
                        <li key={contact._id} id={contact._id}><Link style={linkStyle} to={`/seeOne-contact/${contact._id}`}>{contact.title}</Link></li>
                    )
                    )}
            </ul>
        </>
    )
}

export default SeeAllContact