import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Portfolio() {
    const linkStyle = {
        textDecoration: "none",
        color: "black",
    };
    const params = useParams();
    const navigate = useNavigate();
    console.log(params)
    //const noteId = window.location.search.split("?id=").join("");
    const [portfolio, setPortfolio] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:4000/api/portfolio/${params.id}`).then((res) => {
            setPortfolio(res.data);
            console.log(res.data, "Ici le portfolio'");
        });

    }, []);
    const deletePortfolio = (portfolioId) => {
        axios
            .delete(`http://localhost:4000/api/portfolio/${portfolioId}`)
            .then((res) => {
                navigate('/')
            })
            .catch((err) => {
                alert(err.message + " - Erreur lors de la suppression du portfolio");
            });
    }

    return (
        <>
            <div>
                <h1 id={portfolio._id}>{portfolio.title}</h1>
                <p id={portfolio._id}>{portfolio.content}</p>
            </div>
            <div>
                <button>
                    <Link style={linkStyle} to={`/modify-portfolio/${portfolio._id}`}>Modifier</Link>
                </button>
                <button onClick={() => deletePortfolio(portfolio._id)}>Supprimer</button>
            </div>
        </>
    )
}

export default Portfolio