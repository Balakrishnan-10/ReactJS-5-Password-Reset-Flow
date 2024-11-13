import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import "../Styles/SignUp.css"
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUp = () => {
    const [formData, setformData] = useState({
        username: "",
        email: "",
        password: ""
    });
    const navigate = useNavigate();

    const handleChange = async (e) => {
        const { name, value } = e.target;
        setformData({
            ...formData,
            [name]: value
        })
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await axios
            .post("https://nodejs-5-password-reset-flow.onrender.com/api/signup-user", formData)
            .then((res) => {
                toast.success(res.data.message);
                navigate("/signin");
            })
            .catch((error) => {
                console.log(error);
                toast.error(error);
            });
        setformData(" ");
    };
    return (
        <Container>
            <h1>Registeration Form</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>User Name</Form.Label>
                    <Form.Control type='text' name="username" value={formData.username}
                        onChange={handleChange} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name="email" value={formData.email}
                        onChange={handleChange} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type='password' name="password" value={formData.password}
                        onChange={handleChange} required />
                </Form.Group>
                <Button variant='primary' type='submit'>Sign Up</Button>
                <p>Already have an Account?<Link className="ms-5" to="/signin">Log in</Link></p>
            </Form>

        </Container>
    );
};

export default SignUp;