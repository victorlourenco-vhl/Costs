import React from "react";
import { Link } from "react-router-dom";
import logo from '../../../assets/costs_logo.png'
import Container from "../Container";
import './style.css'

export default function Navbar() {
    return (
        <nav className="navbar">
            <Container>
                <Link to="/">
                    <img src={logo} alt="Moeda logo da Costs" />
                </Link>
                <ul className="list">
                    <li className="item"><Link to="/">Home</Link></li>
                    <li className="item"><Link to="/projects">Projetos</Link></li>
                    <li className="item"><Link to="/company">Empresa</Link></li>
                    <li className="item"><Link to="/newproject">Novo projeto</Link></li>
                    <li className="item"><Link to="/contact">Contato</Link></li>
                </ul>

            </Container>
        </nav>
    )
}