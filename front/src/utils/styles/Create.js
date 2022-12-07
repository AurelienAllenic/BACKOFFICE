import styled from "styled-components";

export const Form = styled.form`
display: flex;
flex-direction: column;
width: 100%;
height: 80vh;
justify-content: center;
align-items: center;
`
export const Input = styled.input`
padding: 10px;
margin-bottom: 10px;
background-color: transparent;
border: none;
font-size: 30px;
color: #eee;
border-bottom: 1px solid black;
&::placeholder{
    color: #eee;
    font-size: 30px;
    padding: 10px;
}
&:focus{
    outline: none;
}
`
export const Textarea = styled.textarea`
height: 300px;
width: 500px;
background-color: transparent;
border: none;
font-size: 30px;
color: #eee;
border-bottom: 1px solid black;
&::placeholder{
    color: #eee;
    font-size: 30px;
    padding: 10px;
}
&:focus{
    outline: none;
}
`

export const Label = styled.label`
display: none;
`
export const Validate = styled.input`
font-size: 30px;
border: none;
padding: 10px;
border-radius: 10px 10px 10px 10px;
&:hover{
background-color: transparent;
cursor: pointer;
font-weight: 600;
}
`