import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav class="navbar navbar-dark bg-primary navbar-expand-md">
            <div class="container-fluid">
                <a href='#' className='navbar-brand fw-bold'>
                    <i class="bi bi-person-badge-fill"></i> Authentication App
                </a>
                <button className='navbar-toggler' type="button" data-bs-target="#menu" data-bs-toggle="collapse">
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div className='collapse navbar-collapse text-center' id="menu">
                    <ul className="navbar-nav ms-auto">
                        <Link to="/"><button className='btn btn-light mt-2 me-2'>Sign Up</button></Link>
                        <Link to="/signin"><button className='btn btn-light mt-2'>Sign In</button></Link>
                    </ul>
                </div>
            </div>
        </nav>


    );
};

export default Navbar;