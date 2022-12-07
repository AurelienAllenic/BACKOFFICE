import styled from "styled-components";

export const MainTitle = styled.h1`
text-align: center;
font-size: 45px;
`
export const Button = styled.button`
font-size: 25px;
position: absolute;
left: 39%;
top: 20%;
background-color: Transparent;
background-repeat:no-repeat;
border: none;
cursor:pointer;
overflow: hidden;
outline:none;
&:hover{
    color: #eee;
}
`
export const SecondTitle = styled.h2`
text-align: center;
padding-top: 200px;
font-style: italic;
font-size: 25px;
`
export const Ul = styled.ul`
position: absolute;
left: 40%;
list-style: none;
font-size: 20px;
font-weight: 500;
`
export const Li = styled.li`
border: 1px solid black;
background-color:#eee;
border-radius: 10px 10px 10px 10px;
padding: 15px;
margin: 10px;
&:hover{
    background-color: transparent;
    cursor: pointer;
}
`
export const SpanArrow = styled.span`
margin: 10px;
`