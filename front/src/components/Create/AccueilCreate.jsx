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
        formData.append("image", data.imageUrl[0])
        formData.append("name", data.name)
        formData.append("description", data.description)
        axios.post('http://localhost:4000/api/accueil', formData)
            .then(res => {
                navigate('/')
            }).catch(err => {
                alert(err.message + ' - Erreur lors de la création de la note')
            });
    }

    return (
        <>
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input type="text" name="name" placeholder='Titre' {...register('name', { required: true })} />
                    <textarea placeholder='Description' rows="8" {...register('description', { required: true })} />
                    <label htmlFor="imageUrl">Image</label>
                    <input id="imageUrl" type="file" name="imageUrl" placeholder='image' {...register('imageUrl', { required: true })} />
                    <input type="submit" placeholder='valider' />
                </form>
            </div>
        </>
    )
}
/*
<input type="file" style={{ "display": "none" }} ref={fileInput} />
            <button onClick={selectFile}>Image</button>*/
export default Edit;
