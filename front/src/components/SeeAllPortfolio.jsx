import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SeeAllPortfolio() {
    const [PortfolioElements, setPortfolioElements] = useState([]);
    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };

    useEffect(() => {
        axios
            .get("http://localhost:4000/api/portfolio")
            .then((res) => {
                setPortfolioElements(res.data);
                console.log(res.data)

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);
    const navigate = useNavigate();
    const goCreate = () => {
        navigate('/create-portfolio')
    }
    return (
        <>
            <h1>Portfolio</h1>
            <button onClick={goCreate}>Créer une nouvelle partie du portfolio</button>
            <h2>Ou modifiez/supprimez des parties du portfolio déja existantes</h2>
            <ul id="seeAllPortfolio">
                {
                    PortfolioElements.map((portfolio) => (
                        <li key={portfolio._id} id={portfolio._id}><Link style={linkStyle} to={`/seeOne-portfolio/${portfolio._id}`}>{portfolio.title}</Link></li>
                    )
                    )}
            </ul>
        </>
    )
}

export default SeeAllPortfolio