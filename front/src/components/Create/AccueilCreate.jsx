import { useNavigate } from "react-router-dom";
import axios from "axios"
import { useForm } from "react-hook-form";
import { AiOutlineCheck } from 'react-icons/ai'
import React, { useRef } from 'react'

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
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="title" placeholder='Titre' {...register('title', { required: true })} />
                    <textarea placeholder='content' rows="8" {...register('content', { required: true })} />
                    <label htmlFor="imageUrl">Image</label>
                    <input id="imageUrl" type="file" name="imageUrl" placeholder='image' {...register('imageUrl', { required: false })} />
                    <input type="submit" placeholder='valider' />
                </form>
            </div>
        </>
    )
}
export default Edit;
