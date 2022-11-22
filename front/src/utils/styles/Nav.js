import styled, { keyframes } from "styled-components";

export const Nav = styled.nav`
background-color: #eee;
opacity: 0.7;
height: 100px;
position : absolute;
width: 100%;
`
export const NavElement = styled.a`
margin: 130px;
font-size: 35px;
text-decoration: none;
color: black;
text-align: center;
&:hover{
    color: white;
}
`