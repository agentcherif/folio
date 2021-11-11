import React from 'react';
import memoire from '../Docs/PDP_CNN___Memoire.pdf';
function Projet() {
    return (
        <div className="container info wrapper">
            <h1>Projets</h1>
            <div className="row jumbotron projet">
                <div className="col-md-6">
                    <h3 className="display-4">Forum Ichat</h3>
                    <p>Une application web et un agent conversationnel Chatbot réalisé dans le cadre d’un projet universitaire
                    pour permettre aux utilisateurs de discuter sur des different sujets</p>
                    <h3>2019-2020</h3>
                    <hr/>
                    <strong>Boostrap, Html, Css, Php, PhpMyadmin, Sql, Rasa, Python.</strong><br />
                    <a href="https://mohamed-diallo.emi.u-bordeaux.fr/forum/index.php" target="_blank"><small>lien site</small> </a><br />
                    <a href="https://github.com/agentcherif/projetTec" target="_blank"><small>lien git</small> </a>
                </div>
                <div className="col-md-6">
                    <h3 className="display-4">LaBRI</h3>
                    <p>Laboratoire Bordolais de la recherche en Informatique</p>
                    <p>Trouve Moi : une application web pour la Musée des Beaux Arts de Bordeaux.
                    Le but du jeux  est de trouver un personnage mystère, caché dans un des tableaux du musée. </p>
                    <h3>Janvier à Avril 2021</h3>
                    <hr/>
                    <strong>Trello, Git, Django, Python, JavaScript, SQLite, Html, Css.</strong><br />
                    <a href="https://github.com/agentcherif/trouveMoi" target="_blank"><small>lien git</small></a>
                </div>
            </div>
            <div className="row jumbotron projet">
                <div className="col-md-6">
                    <h3 className="display-4">Dukes of the Realm</h3>
                    <p>Un jeu de stratégie réalisé au cours d'un projet universitaire développer en java.
                    Le jeu est inspiré de Shadow Legends, l'objectif est de conquérir les royaumes pour étendre votre pouvoir</p>
                    <h3>2019-2020</h3>
                    <hr/>
                    <strong>Java, Java Fx</strong><br />
                    <a href="https://github.com/agentcherif?tab=repositories" target="_blank"><small>lien git</small></a>
                </div>
                <div className="col-md-6">
                    <h3 className="display-4">LaBRI</h3>
                    <p>Laboratoire Bordolais de la recherche en Informatique</p>
                    <p>Visualisation et analyse des filtres dans les réseaux de neurones convolutionnels, un outil
                        pour mieux comprendre le fonctionnement des réseaux de neurones convolutionnels en
                        vusialisant le contenue dans les couches internes du réseau.</p>
                    <h3>Janvier à Avril 2020</h3>
                    <hr/>
                    <strong>Keras, Pytest, Python, Tensorflow, DDD (Domain Driven Design).</strong><br />
                    <a href={memoire} target="_blank" ><small>lien memoire</small></a>
                </div>
            </div>
            <div className="row jumbotron projet">
                <div className="col-md-6">
                    <h3 className="display-4">Mon_ecole</h3>
                    <p>Gestion du personnel d’une école, un projet réalisé dans le cadre d'un projet universitaire
                        développer en Windev qui a fini par être déployé pour une école filiale de l'université Barak
                        Obama de Guinée. </p>
                    <h3>2017-2018</h3>
                    <hr/>
                    <strong>Windev</strong><br />
                </div> <br/>
                <div className="col-md-6">
                    <h3 className="display-4">Porfolio en React</h3>
                    <p>Un projet Personnel, après avoir suivi une formation React en ligne et des jours de recherche
                        j'ai decider de mettre en oeuvre ma compréhension en créant une application web en React.</p>
                    <h3>2021</h3>
                    <hr/>
                    <strong>JavaScript, React, Firebase, Boostrap, Html, CSS.</strong><br /><br />
                    <a href="https://github.com/agentcherif/folio" target="_blank">
                        <small>lien git</small>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projet;
