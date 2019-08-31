import React, { useState } from 'react';
import ReactModal from 'react-modal';
import './MainScreen.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function Subject(props) {
    return (
        <div className="subject">
            <div className="subject-title">{props.name}</div>
            <div className="num-cards">{props.numCards}</div>
        </div>
    );
}

function Modal(props) {
    return (
        <ReactModal />
    );
}

function MainScreen(props) {
    state = {};
    
    const createSubject = () => {

    };

    return (
        <div className="main-screen">
            <header>Welcome to My App</header>
            <hr />
            <h2>Subjects</h2>
            <Subject name="C++" numCards="100" />
            <Subject name="Algorithm" numCards="200" />
            <Subject name="Business Management" numCards="50" />
            <div className="add-section" onClick={createSubject}>
                <FontAwesomeIcon icon={faPlus}/> Add more subjects...
            </div>
            <Modal /> 
        </div>
    );
}

export default MainScreen;
