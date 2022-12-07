import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useForm } from "react-hook-form";
import { AiOutlineCheck } from 'react-icons/ai'
import React, { useRef } from 'react'
import { Form, Input, Textarea, Label, Validate } from "../../utils/styles/Create"
import { MainTitle } from "../../utils/styles/AdminPanel"

const Edit = () => {
    const fileInput = useRef();
    const selectFile = () => {
        fileInput.current.click();
    }
    const navigate = useNavigate();
    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        const formData = new FormData();
        formData.append("imageUrl", data.imageUrl[0])
        formData.append("title", data.title)
        formData.append("content", data.content)
        axios.post('http://localhost:4000/api/accueil', formData)
            .then(res => {
                console.log(res.data)
                navigate('/')
            }).catch(err => {
                alert(err.message + ' - Erreur lors de la création de la note')
            });
    }

    return (
        <>
            <MainTitle>Créer une partie de l'accueil</MainTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input type="text" name="title" placeholder='Titre' {...register('title', { required: true })} />
                <Textarea placeholder='content' name="content" rows="8" {...register('content', { required: true })} />
                <Label htmlFor="imageUrl">Image</Label>
                <Input id="imageUrl" type="file" name="image" placeholder='image' {...register('imageUrl', { required: false })} />
                <Validate type="submit" placeholder='valider' />
            </Form>
        </>
    )
}
export default Edit;
