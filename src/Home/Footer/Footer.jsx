import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-gray-200 text-black py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-4">About Us</h2>
                        <p className="text-sm">
                        At our campusConnect, we believe that education is the key to unlocking human potential and shaping a better future. As a leading institution of higher learning, we are committed to providing exceptional education, fostering innovation, and nurturing talented individuals who will go on to make a positive impact on the world.
                        </p>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
                        <p className="text-sm">123 Main Street, Cityville, Stateland</p>
                        <p className="text-sm">Phone: (123) 456-7890</p>
                        <p className="text-sm">Email: contact@campusConnect.com</p>
                    </div>
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-semibold mb-4">Services</h2>
                        <ul className="text-sm">
                            <li>Academic Programs</li>
                            <li>Research & Innovation</li>
                            <li>Sports & Athletics</li>
                            <li>Annual Cultural Fest</li>
                            <li>Alumni Network</li>
                        </ul>
                    </div>
                    <div className="flex justify-center md:justify-start">
                        <a href="#" className="text-black hover:text-blue-400 mx-2">
                            <FaFacebookF />
                        </a>
                        <a href="#" className="text-black hover:text-blue-400 mx-2">
                            <FaTwitter />
                        </a>
                        <a href="#" className="text-black hover:text-blue-400 mx-2">
                            <FaInstagram />
                        </a>
                        <a href="#" className="text-black hover:text-blue-400 mx-2">
                            <FaLinkedinIn />
                        </a>
                    </div>
                </div>
            </div>
            <div className="mt-4 text-center text-sm text-gray-500">
                &copy; 2023 campusConnect. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
