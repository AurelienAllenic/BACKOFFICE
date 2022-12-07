import styled from "styled-components";

export const MainTitle = styled.h1`
    text-align: center;
    font-style: italic;
    font-weight: 500;
`
export const Ul = styled.ul`
list-style: none;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
font-size: 25px;
padding-top: 200px;
border-bottom: 2px solid black;
`
export const Li = styled.li`
padding: 15px;
`
export const A = styled.a`
text-decoration: none;
color: #eee;
padding-left: 30px;
&:hover{
    color: black;
    font-weight: 600;
}
`