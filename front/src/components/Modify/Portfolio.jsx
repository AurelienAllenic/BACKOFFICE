import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Form, Input, Textarea, Label, Validate } from "../../utils/styles/Create"
import { MainTitle } from "../../utils/styles/AdminPanel"

function ModifyPortfolio() {
    const params = useParams();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [portfolio, setPortfolio] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/api/portfolio/${params.id}`).then((res) => {
            setPortfolio(res.data);
            console.log(res.data);
        });
    }, []);

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("imageUrl", data.imageUrl[0])
        formData.append("title", data.title)
        formData.append("content", data.content)
        axios
            .put(`http://localhost:4000/api/portfolio/${params.id}`, formData)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                console.error(err.response.data);
                alert(err.message + " - Erreur lors de la modification du portfolio");
            });
    };

    return (
        <>
            <MainTitle>Modifier une partie de la section Portfolio</MainTitle>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <iIput
                    type="text"
                    name="titre"
                    placeholder={portfolio.title}
                    {...register("title", { required: true })}
                />
                <Textarea
                    placeholder={portfolio.content}
                    rows="8"
                    {...register("content", { required: true })}
                />
                <Label htmlFor="imageUrl">Image</Label>
                <Input id="imageUrl" type="file" name="image" placeholder='image' {...register('imageUrl', { required: false })} />
                <Validate type="submit" placeholder='valider' />
            </Form>
        </>
    );
};


export default ModifyPortfolio