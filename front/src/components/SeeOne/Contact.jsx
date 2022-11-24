import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Contact() {
    const linkStyle = {
        textDecoration: "none",
        color: "black",
    };
    const params = useParams();
    const navigate = useNavigate();
    console.log(params)
    //const noteId = window.location.search.split("?id=").join("");
    const [contact, setContact] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/contact/${params.id}`).then((res) => {
            setContact(res.data);
            console.log(res.data, "Ici le contact'");
        });

    }, []);
    const deleteContact = (contactId) => {
        axios
            .delete(`http://localhost:4000/api/contact/${contactId}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                alert(err.message + " - Erreur lors de la suppression du contact");
            });
    }

    return (
        <>
            <div>
                <h1 id={contact._id}>{contact.title}</h1>
                <p id={contact._id}>{contact.content}</p>
            </div>
            <div>
                <button>
                    <Link style={linkStyle} to={`/modify-contact/${contact._id}`}>Modifier</Link>
                </button>
                <button onClick={() => deleteContact(contact._id)}>Supprimer</button>
            </div>
        </>
    )
}

export default Contact