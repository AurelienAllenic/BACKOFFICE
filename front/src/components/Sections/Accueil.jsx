import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Li } from "../../utils/styles/Acceuil";

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
            <ul id="seeAll">
                {
                    AccueilElements.map((accueil) => (
                        <Li key={accueil._id} id={accueil._id}>{accueil.title}<br />{accueil.content}</Li>
                    )
                    )}
            </ul>
        </>
    );
}

export default Accueil;
