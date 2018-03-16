import React, { Component } from 'react';
import logo from './logo.svg';
import Modal from './Modal.js';


import './App.css';


// Modal para ver información de pokemon

class openModal extends Component {
  constructor(props) {
    super(props);

    this.state = { isOpen: false };
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div className="openModal">
        <button onClick={this.toggleModal}>
          Ver información
        </button>

        <Modal show={this.state.isOpen}
          onClose={this.toggleModal}>
          `Here's some content for the modal`
        </Modal>
      </div>
    );
  }
}

export default openModal;