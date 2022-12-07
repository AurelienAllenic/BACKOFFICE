import { Component } from "react";
import styled from "styled-components";

export const DivInfos = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`
export const Title = styled.h1`
font-size: 45px;
`
export const Content = styled.p`
font-size: 35px;
`
export const DivButtons = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding-top: 50px;
gap: 100px;
`
export const Button = styled.button`
font-size: 30px;
border: none;
padding: 10px;
border-radius: 10px 10px 10px 10px;
background-color: transparent;
border-bottom: 1px solid black;
&:hover{
    background-color: #eee;
    cursor: pointer;
}
`
export const Image = styled.img`
height: 30vh;
width: 20%;
border-radius: 10px 10px 10px 10px;
`