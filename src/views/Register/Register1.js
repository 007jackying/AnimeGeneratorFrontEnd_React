import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Listing } from '../../components/AnimeList';
import { Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { Link } from 'react-router-dom';
import './Register.css';
import axios from "axios";
const Register = props => {
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = async data => {
        console.log("onsubmit: ", data);
        if(data){
            const response = await axios.post(`user/register`,{data});
            console.log("responded data: ", response.data);
        }
       
    };

    console.log(errors);

    return (
        <div className="RegisterForm">
            <h3>Register</h3>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>First name</Form.Label>
                    <Form.Control type="text" placeholder="First name" name="firstName" ref={register({ required: true, maxLength: 80 })} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Last name</Form.Label>
                    <Form.Control type="text" placeholder="Last name" name="lastName" ref={register({ required: true, maxLength: 100 })} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email" name="email" ref={register({ required: true, pattern: /^\S+@\S+$/i })} />
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="Username" name="username" ref={register({ required: true, maxLength: 80 })} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name="password" ref={register({ required: true, maxLength: 80 })} />
                </Form.Group>
                <p style={{ color: "black" }} className="forgot-password text-center">
                    Already registered < Link to="/Login" style={{ color: "black" }}>sign in?</Link>
                </p>
                <Form.Control type="submit" />
            </Form>
        </div>
    );
};

export default Register;