import React, { useState } from 'react';
import Modal from 'react-modal';
import './css/MainScreen.css';
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

function MainScreen(props) {

    const [modalState, setModalState] = useState({
        isOpen: false
    });

    const [subjectState, setSubjectState] = useState({
        subjects : [
            { name: "C++", numCards: 100 },
            { name: "Algorithm", numCards: 200},
            { name: "Business Management", numCards: 50}
        ]
    });

    const showModal = () => {
        setModalState({
            isOpen: true
        })
    };

    const closeModal = () => {
        setModalState({
            isOpen: false
        })
    };

    const addSubject = (event) => {
        setSubjectState({
            subjects: subjectState.subjects.concat({
                name: inputState.value,
                numCards: 0})
            });
        closeModal();
    };

    const customModalStyle = {
        content: {
            top                   : '50%',
            left                  : '50%',
            right                 : 'auto',
            bottom                : 'auto',
            marginRight           : '-50%',
            transform             : 'translate(-50%, -50%)',
            borderRadius          : '10px',
            width: '300px'
        }
    };

    const [inputState, setInputState] = useState({
        value: ''
    });
    
    const handleInputChange = (event) => {
        setInputState({value: event.target.value});
    }

    return (
          <div className="main-screen">
            <header>Welcome to My App</header>
            <hr />
            <h2>Subjects</h2>
            {
                subjectState.subjects.map((subject) => {
                   return (<Subject name={subject.name} numCards={subject.numCards} />);
                })
            }
            <div className="add-section" onClick={showModal}>
                <FontAwesomeIcon icon={faPlus}/> Add more subjects...
            </div>
            <Modal 
                isOpen={modalState.isOpen}
                onRequestClose={closeModal}
                style={customModalStyle}
                contentLabel="My Modal"
            >
                <form className="modal-form">
                    <div className="modal-form-group">
                        <input className="custom-textbox" type="text" name="subjectName" value={inputState.value} onChange={handleInputChange} placeholder="Enter your subject name"></input>
                    </div>
                    <div className="modal-form-button-group">
                        <input className="custom-button" type="button" value="Create" onClick={addSubject}></input>
                        <input className="custom-button" type="button" value="Cancel" onClick={closeModal}></input>
                    </div>
                </form>
            </Modal>
            </div>
    );
}

export default MainScreen;
