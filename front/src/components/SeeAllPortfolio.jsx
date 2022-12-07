import { Link, useNavigate } from "react-router-dom";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { MainTitle, Button, SecondTitle, Ul, Li, SpanArrow } from "../utils/styles/SeeAll"
import { AiOutlineArrowRight } from "react-icons/ai"

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
            <MainTitle>Portfolio</MainTitle>
            <Button onClick={goCreate}><SpanArrow><AiOutlineArrowRight /></SpanArrow>Créer une nouvelle partie du portfolio</Button>
            <SecondTitle>Ou modifiez/supprimez des parties du portfolio déja existantes</SecondTitle>
            <Ul id="seeAllPortfolio">
                {
                    PortfolioElements.map((portfolio) => (
                        <Li key={portfolio._id} id={portfolio._id}><Link style={linkStyle} to={`/seeOne-portfolio/${portfolio._id}`}>{portfolio.title}</Link></Li>
                    )
                    )}
            </Ul>
        </>
    )
}

export default SeeAllPortfolio