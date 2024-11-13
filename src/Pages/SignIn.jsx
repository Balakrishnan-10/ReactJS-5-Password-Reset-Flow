import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignIn = ({ setToken }) => {
    const [formData, setformData] = useState({
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
        await axios.post("https://nodejs-5-password-reset-flow.onrender.com/api/signin-user", formData)
            .then((res) => {
                toast.success(res.data.message);
                setToken(res.data.token);
                navigate("/home")
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.data.message);
            })
        setformData("");
    }
    return (
        <Container>
            <h1>Log In</h1>
            <Form onSubmit={handleSubmit}>
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
                <p className="text-center"><Link to="/forgot-password">Forgot Password</Link></p>
                <Button variant='primary' type='submit'>Sign In</Button>
                <p>Don't have an Account?<Link className="ms-5" to="/">Click Here to Register</Link></p>
                
            </Form>

        </Container>
    );
};

export default SignIn;