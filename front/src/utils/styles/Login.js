import styled, { keyframes } from "styled-components";
import login from "../../assets/login.jpg";

export const SuperContainer = styled.div`
  box-sizing: border-box;
  font-family: "Raleway", sans-serif;
  color: #eee;
  height: 100vh;
  width: 100%;
  overflow: hidden;
  margin: 0;
  text-align: center;
`;
export const MainImageLogin = styled.div`
  background: url(${login}) no-repeat center/cover;
  height: 100vh;
  width: 100%;
`;

export const ContainerInfos = styled.div`
  display: flex;
  left: 0%;
  flex-direction: column;
  text-align: center;
  padding: 20px;
  color: #33212d;
  opacity: 0.7;
  position: relative;
  background-color: #eee;
`;
export const Form = styled.form`
  position: absolute;
  left: 30%;
  bottom: 20%;
  display: flex;
  flex-direction: column;
  background-color: #eee;
  opacity: 0.5;
  text-align: center;
`;
export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 30%;
`;
export const Input = styled.input`
  width: 80%;
  background-color: transparent;
  border: none;
  padding: 2rem;
  margin: 2rem;
  font-size: 18px;
  cursor: pointer;
  &::placeholder {
    font-size: 35px;
  }
`;
