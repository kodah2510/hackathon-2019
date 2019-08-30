import React from 'react';
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

function Model(props) {

}

function MainScreen(props) {
    return (
        <div className="main-screen">
            <header>Welcome to My App</header>
            <hr />
            <h2>Subjects</h2>
            <Subject name="C++" numCards="100" />
            <Subject name="Algorithm" numCards="200" />
            <Subject name="Business Management" numCards="50" />
            <div className="add-section" onClick="">
                <FontAwesomeIcon icon={faPlus}/> Add more subjects...
            </div>

        </div>
    );
}

export default MainScreen;
