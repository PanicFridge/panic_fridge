
import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
import './ModalHungry.scss';


// import Counter from './Counter';

class ModalHungry extends Component {

  state = {
    modalState: false
  }

  toggleModal(){
    this.setState({
      modalState: !this.state.modalState
    })
  }

  render(){
    return (
      <div>
        <Container>
          <Button id="modal-button" onClick={this.toggleModal.bind(this)}>Hungry?</Button>
        </Container>
        <Modal isOpen={this.state.modalState} toggle={this.toggleModal.bind(this)}>
          <ModalHeader id="modal-header">
           <p>Get Started!</p>
          </ModalHeader>
          <ModalBody>
          <div className="list">
            <ol>
              <li>Select ingredients</li>
              <li>Choose a country</li>
              <li>No time? Pick a recipe of the day!</li>
            </ol>
            </div>
          </ModalBody>
          <ModalFooter id="modal-footer" >
            <Button id="close-button"  onClick={this.toggleModal.bind(this)}>X</Button>
          </ModalFooter>
        </Modal>
      </div>
    );    
  }

}

export default ModalHungry; 