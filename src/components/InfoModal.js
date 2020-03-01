import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import './InfoModal.scss'


class InfoModal extends Component {

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
        <div className="cont-modal">
          <Button id="modal-button" onClick={this.toggleModal.bind(this)}><img src="https://freesvg.org/img/abstract-user-flat-4.png" width="23" height="23"/> Contact us!</Button>
        </div>
        <Modal isOpen={this.state.modalState} toggle={this.toggleModal.bind(this)}>
      
          <ModalHeader id="modal-header">
           <p>Who we are?</p>
          </ModalHeader>
          <ModalBody>
          <div className="container-icon">
            <img src="https://vignette.wikia.nocookie.net/a-bizarre-day-roblox/images/2/29/Insert-image-here.jpg/revision/latest?cb=20190907145715" width="100" height="100" />
            <img src="https://vignette.wikia.nocookie.net/a-bizarre-day-roblox/images/2/29/Insert-image-here.jpg/revision/latest?cb=20190907145715" width="100" height="100" />
            <img src="https://vignette.wikia.nocookie.net/a-bizarre-day-roblox/images/2/29/Insert-image-here.jpg/revision/latest?cb=20190907145715" width="100" height="100" />
            <img src="https://vignette.wikia.nocookie.net/a-bizarre-day-roblox/images/2/29/Insert-image-here.jpg/revision/latest?cb=20190907145715" width="100" height="100" />
          </div>
          <div className="container-us">


          </div>
          </ModalBody>
          <ModalFooter id="modal-footer" >
            <Button id="close-button"  onClick={this.toggleModal.bind(this)}>Back</Button>
          </ModalFooter>
        </Modal>
        
      </div>
    );    
  }

}

export default InfoModal; 