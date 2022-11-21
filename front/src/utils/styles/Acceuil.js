import styled from "styled-components";
import img from "../../assets/accueil.jpg";

export const ImageAccueil = styled.div`
background: url(${img}) no-repeat center/cover;
height: auto;
width: 100%;
color: black;
margin: 0px;
`
export const H1 = styled.h1`
display: flex;
justify-content : center;
align-items: center;
font-size: 35px;
padding: 35px;
margin: 0px;
color: white;
`
export const Ul = styled.ul`
display: grid;
grid-template-columns: repeat(3, 5fr);
grid-gap: 10px;
grid-auto-rows: minmax(100px, auto);
background-color: transparent;
list-style-type: none;
padding: 20px;
margin : 0px;
`
export const Li = styled.li`
padding: 50px;
background-color: #eee;
opacity: 0.7;
`
export const SpanTitle = styled.span`
display: flex;
justify-content : center;
align-items: center;
font-size: 30px;
font-weight:600;
`
export const SpanSubTitle = styled.span`
font-size: 25px;
`
