import React, { useState } from 'react'
import './css/CardScreen.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal'

function CardScreen(props) {

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

    const [modalState, setModalState] = useState({
        isOpen: false
    });

    const showAddTipModal = () => {
        setModalState({
            isOpen: true
        });
    };

    const closeModal = () => {
        setModalState({
            isOpen: false
        });
    };

    const [inputState, setInputState] = useState({
        value: ''
    });
    
    const handleInputChange = (event) => {
        setInputState({
            value: event.target.value
        });
    };

    const addTip = () => {
        
    };

    return (
        <div className="cardscreen">
            <div className="screen-title">
                <h4>Subject C++</h4>
            </div>
            <hr />
            <div className="tips-title">Tips</div>
            <div></div>
            <div className="tip-card">
                <div className="tip-card-header">
                    <p>Tip #1: Prefer alias declarations to typedefs</p>
                </div>
                <div className="tip-card-content">
                    <p></p>
                </div>
            </div>
            <div className="tip-card">
                <div className="tip-card-header">
                    <p>Tip #2: Prefer deleted functions to private undefiend ones</p>
                </div>
                <div className="tip-card-content">
                    <p></p>
                </div>
            </div>
            <div className="tip-card">
                <div className="tip-card-header">
                    <p>Tip #3: Prefer const_iterators to iterators</p>
                </div>
                <div className="tip-card-content">
                    <p></p>
                </div>
            </div>
            <div className="tip-card">
                <div className="tip-card-header">
                    <p>Tip #4: Use constexpr whenever possible</p>
                </div>
                <div className="tip-card-content">
                    <p></p>
                </div>
            </div>
            <div className="add-more-section" onClick={showAddTipModal}>
                <FontAwesomeIcon icon={faPlus}/> Add more tips...
            </div>
            <Modal 
                isOpen={modalState.isOpen}
                onRequestClose={closeModal}
                style={customModalStyle}
                contentLabel="Add Tip Modal"
            >
                <form className="modal-form">
                    <div className="modal-form-group">
                        <input className="custom-textbox" type="text" name="tipTitle" value={inputState.value} onChange={handleInputChange} placeholder="Enter title for the tip"></input>
                        <textarea className="custom-textbox-textarea" type="text"name="tipContent" value={inputState.value} onChange={handleInputChange} placeholder="Enter your content here" rows="5"></textarea>
                    </div>
                    <div className="modal-form-button-group">
                        <input className="custom-button" type="button" value="Create" onClick={addTip}></input>
                        <input className="custom-button" type="button" value="Cancel" onClick={closeModal}></input>
                    </div>
                </form>
            </Modal>
    </div>
    );
}

export default CardScreen;
