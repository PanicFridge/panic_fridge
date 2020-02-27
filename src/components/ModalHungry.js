
import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
        <div className="container-modal">
          <Button id="modal-button" onClick={this.toggleModal.bind(this)}>Hungry?</Button>
        </div>
        <Modal isOpen={this.state.modalState} toggle={this.toggleModal.bind(this)}>
      
          <ModalHeader id="modal-header">
           <p>No idea what to eat?</p>
          </ModalHeader>
          <ModalBody>
          <div className="list">
            <ol className="counter">
              <li>Click on the fridge.</li>
              <li>Want an international cuisine experience? Select World Food.</li>
              <li>Is your fridge full of food? Select Ingredients and search what you can make.</li>
              <li>Feeling adventurous? Click on the Random Recipe!</li>
              <li>Change of mind? Click on the orange fridge to return to the options.</li>
            </ol>
            </div>
          </ModalBody>
          <ModalFooter id="modal-footer" >
            <Button id="close-button"  onClick={this.toggleModal.bind(this)}>Start cooking!</Button>
          </ModalFooter>
        </Modal>
        
      </div>
    );    
  }

}

export default ModalHungry; 