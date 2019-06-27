import React from 'react';
import Modal from 'react-modal';

// in isOpen has a double bang to say true booleans (String is true, or undefined is false)
// Passing in the props from IndecisionApp

const OptionModal = (props) =>  ( 
        <Modal
            isOpen={!!props.selectedOption}
            onRequestClose={props.handleClearSelectedOption}
            contentLabel = "You are going here tonight!"
            closeTimeoutMS={200}
            className="modal"
        >
            <h2 className="modal__title">You are drinking here here tonight!</h2>
            {`Looks like you are going to ${props.selectedOption}` && <p className="modal__body">{`Looks like you are going to ${props.selectedOption}`}</p>}
            <button className="button" onClick={props.handleClearSelectedOption}>Ok !</button>
        </Modal>
    );


export default OptionModal;