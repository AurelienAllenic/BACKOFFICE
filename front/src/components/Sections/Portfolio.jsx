import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Ul, Li, SpanTitle, SpanSubTitle, AccueilImage, H1 } from "../../utils/styles/Acceuil";

const Portfolio = () => {

    const linkStyle = {
        textDecoration: "none",
        color: "black",
        textUnderline: "none",
    };
    const [PortfolioElements, setPortfolioElements] = useState([]);

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



    return (
        <>
            <section id="portfolio">
                <H1>Portfolio</H1>
                <Ul id="seeAllPortfolio">
                    {
                        PortfolioElements.map((portfolio) => (
                            <Li key={portfolio._id} id={portfolio._id}><SpanTitle>{portfolio.title}</SpanTitle><br /><SpanSubTitle>{portfolio.content}</SpanSubTitle><AccueilImage src={portfolio.imageUrl} id={portfolio._id} alt="portfolio"></AccueilImage></Li>
                        )
                        )}
                </Ul>
            </section>
        </>
    );
}

export default Portfolio;
