import React from 'react'
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios"
import { MainImageLogin, ContainerInfos, Form, FormContainer, Input } from '../utils/styles/Login';

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    axios.post('http://localhost:4000/api/user/login', data)
      .then(res => {
        // On enregistre le token dans le localStorage
        localStorage.token = res.data.token;
        localStorage.userId = res.data.userId;
        // On "enregistre" le token dans la conf. de Axios
        axios.defaults.headers.common.Authorization = `Bearer ${res.data.token}`;
        // On "navigate" (redirige) vers '/my-notes'
        navigate('/admin');
      }).catch(err => {
        alert(err.message + ' - Paire email / mot de passe incorrecte');
      })
  }

  return (
    <MainImageLogin>

      <ContainerInfos>
        <h1>BACKOFFICE</h1>
        <h2>Veuillez vous connecter afin d'accéder à votre espace de création</h2>
      </ContainerInfos><FormContainer>
        <Form onSubmit={handleSubmit(onSubmit)}>

          <div>

            <Input type="text"
              name="login"
              placeholder="login"
              rules={{ required: true }}
              {...register('login', { required: true })}></Input>
            <Input type="password"
              name="password"
              placeholder="mot de passe"
              rules={{ required: true }}
              {...register('password', { required: true })}></Input>
            <Input type="submit" name="valider" value="Valider"></Input>
          </div>

        </Form></FormContainer></MainImageLogin>
  )
}

export default Login;
