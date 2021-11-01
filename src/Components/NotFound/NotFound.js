import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
    return (
        <div className="notFound">
                <h3>Page is not avaiable</h3>
                <h1>404</h1>
               <Link to="/home"> <button>Back to home</button></Link>
        </div>
    );
};

export default NotFound;