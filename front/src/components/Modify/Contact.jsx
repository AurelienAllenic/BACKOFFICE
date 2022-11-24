import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

function ModifyContact() {
    const params = useParams();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const [contact, setContact] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:4000/api/contact/${params.id}`).then((res) => {
            setContact(res.data);
            console.log(res.data);
        });
    }, []);

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("imageUrl", data.imageUrl[0])
        formData.append("title", data.title)
        formData.append("content", data.content)
        axios
            .put(`http://localhost:4000/api/contact/${params.id}`, formData)
            .then((res) => {
                navigate("/");
            })
            .catch((err) => {
                console.error(err.response.data);
                alert(err.message + " - Erreur lors de la modification du contact");
            });
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    name="titre"
                    placeholder={contact.title}
                    {...register("title", { required: true })}
                />
                <textarea
                    placeholder={contact.content}
                    rows="8"
                    {...register("content", { required: true })}
                />
                <label htmlFor="imageUrl">Image</label>
                <input id="imageUrl" type="file" name="image" placeholder='image' {...register('imageUrl', { required: false })} />
                <input type="submit" placeholder='valider' />
            </form>
        </>
    );
};


export default ModifyContact