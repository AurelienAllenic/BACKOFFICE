import styled from "styled-components";

export const H1 = styled.h1`
display: flex;
justify-content : center;
align-items: center;
font-size: 45px;
padding-top: 150px;
margin: 0px;
color: white;
`
export const Ul = styled.ul`
display: grid;
grid-template-columns: repeat(1, 5fr);
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
export const AccueilImage = styled.img`
width: 100%;
height: 30vh;
padding-top: 25px;
display: flex;
justify-content : center;
align-items: center;
`