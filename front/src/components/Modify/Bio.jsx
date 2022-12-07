import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form, Input, Textarea, Label, Validate } from "../../utils/styles/Create"
import { MainTitle } from "../../utils/styles/AdminPanel"

function ModifyBio() {
    const params = useParams();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [bio, setBio] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/api/bio/${params.id}`).then((res) => {
            setBio(res.data);
            console.log(res.data);
        });
    }, []);

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("imageUrl", data.imageUrl[0])
        formData.append("title", data.title)
        formData.append("content", data.content)
        axios
            .put(`http://localhost:4000/api/bio/${params.id}`, formData)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                console.error(err.response.data);
                alert(err.message + " - Erreur lors de la modification de la bio");
            });
    };

    return (
        <>
            <MainTitle>Modifier une partie de la section Bio</MainTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Input
                    type="text"
                    name="title"
                    placeholder={bio.title}
                    {...register("title", { required: true })}
                />
                <Textarea
                    placeholder={bio.content}
                    rows="8"
                    {...register("content", { required: true })}
                />
                <Label htmlFor="imageUrl">Image</Label>
                <Input id="imageUrl" type="file" name="imageUrl" placeholder='image' {...register('imageUrl', { required: false })} />
                <Validate type="submit" placeholder='valider' />
            </Form>
        </>
    );
};


export default ModifyBio