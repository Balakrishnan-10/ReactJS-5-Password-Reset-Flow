import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = ({ token }) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        await axios.get("https://nodejs-5-password-reset-flow.onrender.com/api/get-user", {
            headers: { token },
        })
            .then((res) => {
                setData(res.data.data);
                toast.success("Authorized User");
            })
            .catch((error) => {
                console.log(error);
                toast.error(error.response.data.message);
            });
    }
    return (
        <>
            {/* profile page */}
            <div className="tablescroll m-5">
                <h2 className="text-center fw-bolder">PROFILE</h2>
                <table className="table table-responsive table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center fs-4">
                                USERNAME
                            </th>
                            <th scope="col" className="text-center fs-4">
                                EMAIL
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((ele, index) => {
                            console.log(data)
                            return (
                                <tr key={index}>

                                    <td className="text-center">{ele.username}</td>
                                    <td className="text-center">{ele.email}</td>
                                </tr>

                            )
                        })}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Home;