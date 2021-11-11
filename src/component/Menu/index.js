import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';

import {Navbar,Container,Nav,} from "react-bootstrap";
class Menu extends Component {
    
    render() {
        const Items = [
            {
                title: 'Formation',
                to: '/formation'
            },
            {
                title: 'Projet Réalisé',
                to: '/projet'
            },
            {
                title: 'Compétence',
                to: '/competence'
            },
            {
                title: 'Expérience',
                to: '/experience'
            }
        ];

        return (

            <div  role="navigation">
                <Navbar collapseOnSelect sticky="top"  bg="dark" expand="lg" variant="dark">
                    <Container>
                        <Link className="navbar-brand" to="/">Acceuil</Link>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                            <Nav className="me-auto">
                                {
                                    Items.map((item,index) =>{
                                        return(
                                            <Nav.Link className="nav-link" key={index} href={item.to} >{item.title} </Nav.Link>
                                        )
                                    })
                                }
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
                {/*
                import {
                  Link,
                  NavLink,
                } from 'react-router-dom';


                <nav className="navbar navbar-expand-lg navbar-dark bg-dark wrapper header">
                    <div className="container-fluid">
                    <Navbar.Brand href="/">Acceuil</Navbar.Brand>
                    <Link className="navbar-brand" to="/">Acceuil</Link>
                    <button class="navbar-toggler ml-auto custom-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar4">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {
                                Items.map((item,index) =>{
                                return(
                                    <li className="nav-item ">
                                        <NavLink key={index} className="nav-link" to={item.to}>{item.title}</NavLink>
                                    </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                    </div>
                </nav>*/}
            </div>

        )
    }
}
export default Menu;
