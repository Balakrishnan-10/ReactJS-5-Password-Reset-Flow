import axios from 'axios';
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPassword = () => {
    const [formData, setformData] = useState({
        password: ""
    });
    const { id, token } = useParams();
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
            const res = await axios.post(`https://nodejs-5-password-reset-flow-2.onrender.com/api/reset-password/${id}/${token}`, formData)
            if (res.status === 200) {
                toast.success(res.data.message);
                navigate("/signin");
            }
        } catch (error) {
            // console.log(error);
            toast.error("Internal Server by Reset password");
        }
    };
    return (
        <Container>
            <h1>Reset Password</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label>New Password</Form.Label>
                    <Form.Control type='password' name="password" value={formData.password}
                        onChange={handleChange} required />
                </Form.Group>

                <Button variant='primary' type='submit'>Submit</Button>
            </Form>

        </Container>
    );
};

export default ResetPassword;