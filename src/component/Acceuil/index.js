import '../../App.css';

import React from 'react';

import cv from '../Docs/CV.pdf';
import logo from '../image/me.png';
import social from '../image/Social.png';
import instagram from '../image/instagram.png';
import facebook from '../image/facebook.png';
import linkedin from '../image/linkedin.png';
import twitter from '../image/twitter.png';
import github from '../image/github.png';

const Acceuil = ()  =>{
    return (
    <div className="container info wrapper">
        <div className="row main jumbotron">
            <div className="col-md-6 ">
                <div className="card">
                    <img className="img-fluid rounded  img" src={logo} alt="Responsive images"/>
                    <div className="card-body">
                        <h2 className="card-title">Mohamed Abdoulaye Cherif Diallo</h2>

                        <p>Je suis un étudiant ayant une grande capacité d’organisation, de
                            prise d’initiative et d'expit d'équipe.
                            Rigoureux, polyvalent et assidu, je tiens à vous assurer de ma profonde
                            motivation de découvrir le monde professionnel et l'envie de mettre en pratique
                            mes 5 ans d'études.
                        </p>
                    </div>
                </div>
            </div>
            <div className="col-md-6 ">
                <div className="card">
                    <img className="img-fluid rounded " src={social} alt="Responsive images"/>
                    <div className="card-body">
                        <h2>Développeur Application</h2>
                        <hr className="my-4"/>
                        <p className="card-text">Étudiant en Master 2 Informatique à
                            l’université de Bordeaux à la recherche d’un stage de fin d'étude de 4/6 mois à partir
                        d'Avril.</p>
                        <h6>75 Avenue de Saige, 33600 Pessac </h6>
                        <h6>0605540218</h6>
                        <h6>mcherifdiallo96@gmail.com </h6>
                        <strong>Permis B</strong>
                    </div>
                    <div className="justify-content-lg-center">
                        <a href="https://www.instagram.com/irifche/" target="_blank">
                            <img src={instagram} title="instagram"style={{width: '2.5rem'}} alt="my intagram"/> </a>
                        <a href="https://www.facebook.com/cherif.diallo.92351" target="_blank">
                            <img src={facebook} title="facebook"style={{width: '2.5rem'}} alt="my facebook"/> </a>
                        <a href="https://www.linkedin.com/in/cherif-diallo-4267101b2/ " target="_blank">
                            <img src={linkedin} title="linkedin"style={{width: '2.5rem'}} alt="my linkedin"/> </a>
                        <a href="https://twitter.com/MCherif22" target="_blank">
                            <img src={twitter} title="twitter"style={{width: '2.5rem'}} alt="my twitter"/> </a>
                        <a href="https://github.com/agentcherif" target="_blank">
                            <img src={github} title="github"style={{width: '2.5rem'}} alt="my github"/> </a>
                    </div><br/>
                    <div>
                        <a href={cv} target="_blank">
                            <button style={{height: '2.7rem'}} className="btn btn-outline-dark">Curriculum Vitae</button>
                        </a>
                    </div><br/><br/>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Acceuil
