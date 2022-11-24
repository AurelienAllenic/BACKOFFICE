import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

function ModifyExperience() {
    const params = useParams();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [experience, setExperience] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/api/experience/${params.id}`).then((res) => {
            setExperience(res.data);
            console.log(res.data);
        });
    }, []);

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("imageUrl", data.imageUrl[0])
        formData.append("title", data.title)
        formData.append("content", data.content)
        axios
            .put(`http://localhost:4000/api/experience/${params.id}`, formData)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                console.error(err.response.data);
                alert(err.message + " - Erreur lors de la modification de l'experience'");
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="title"
                    placeholder={experience.title}
                    {...register("title", { required: true })}
                />
                <textarea
                    placeholder={experience.content}
                    rows="8"
                    {...register("content", { required: true })}
                />
                <label htmlFor="imageUrl">Image</label>
                <input id="imageUrl" type="file" name="imageUrl" placeholder='image' {...register('imageUrl', { required: false })} />
                <input type="submit" placeholder='valider' />
            </form>
        </>
    );
};


export default ModifyExperience