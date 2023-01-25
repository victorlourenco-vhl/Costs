import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'
import './style.css'


export default function Footer() {
    return (
        <footer className="footer">
            <ul className="listIcons">
                <li><FaFacebook /></li>
                <li><FaInstagram /></li>
                <li><FaLinkedin /></li>
            </ul>
            <p>
                <span>Costs</span> &copy;2023
            </p>
        </footer>
    )
}