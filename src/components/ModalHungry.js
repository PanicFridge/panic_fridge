
import React, {Component} from 'react';
import './ModalHungry.scss';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container } from 'reactstrap';
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
      <div className="ModalHungry">
        <Container>
          <Button onClick={this.toggleModal.bind(this)}>Hungry?</Button>
        </Container>
        <Modal isOpen={this.state.modalState} toggle={this.toggleModal.bind(this)}>
          <ModalHeader>
           <p>Get Started!</p>
          </ModalHeader>
          <ModalBody>
            <p>Soy el body</p>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleModal.bind(this)}>X</Button>
          </ModalFooter>
        </Modal>
      </div>
    );    
  }

}

export default ModalHungry; 