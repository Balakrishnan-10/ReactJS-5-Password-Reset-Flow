import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPassword = () => {
    const [formData, setformData] = useState({
        email: "",
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
        try {
            const res = await axios.post("https://nodejs-5-password-reset-flow.onrender.com/api/forgot-password", formData)
            if (res.status === 200) {
                toast.success(res.data.message);
                navigate("/signin");
            };
        }
        catch (error) {
           // console.log(error);
            toast.error("Internal Server by forgot password");
        }

    };
    return (
        <Container>
            <h1>Forgot Password</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type='email' name="email" value={formData.email}
                        onChange={handleChange} required />
                </Form.Group>
                <Button variant='primary' type='submit'><i className="bi bi-envelope"> Send Mail</i></Button>
            </Form>

        </Container>
    );
};

export default ForgotPassword;