import React from 'react';
import './Footer.css'


const Footer = () => {
    return (
        <div>
             <div className="footer mt-3">
            <div className="container text-start py-3">
                <div className="row ">
                    <div className="col-md-5">
                        <div className="col-md-4">
                            <img className='img-fluid' src="" alt="" />
                        </div>
                        <div className="col-md-3"></div>
                    </div>
                    <div className="col-md-7">

                        <div className="row">
                            <div className="col-md-6">
                                <ul>
                                    <li><a href="#">About online service</a></li>
                                    <li><a href="#">Read our blog</a></li>
                                    <li><a href="#">Sign up to get information</a></li>
                                    <li><a href="#">Add your problems</a></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul>
                                    <li><a href="#">Get help</a></li>
                                    <li><a href="#">Read FAQs</a></li>
                                    <li><a href="#">View all services</a></li>
                                    <li><a href="#">Want to take a service</a></li>
                                </ul>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="container text-start py-3">
                    <div className="row">
                        <div className="col-md-4">
                            <small>© 2021 — All Rights Reserved By Delivery Service</small>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-6">
                            <a href="">Privacy policy</a>
                            <a href="">Terms condition</a>
                            <a href="">pricing</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Footer;