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
          <Button id="modal-button" onClick={this.toggleModal.bind(this)}><img src="https://freesvg.org/img/abstract-user-flat-4.png" alt="icon-contact" width="23" height="23"/> Contact us!</Button>
        </div>
        <Modal isOpen={this.state.modalState} toggle={this.toggleModal.bind(this)}>
      
          <ModalHeader id="modal-header">
           <p>Who we are?</p>
          </ModalHeader>
          <ModalBody>
          <div className="container-icon">
            <img  src="https://s5.gifyu.com/images/caterina-icon.png" alt="insert" width="100" height="100" />
            <img src="https://s5.gifyu.com/images/javi-icon.png" alt="insert" width="100" height="100" />
            <img src="https://s5.gifyu.com/images/jara-icon.png" alt="insert" width="100" height="100" />
            <img src="https://s5.gifyu.com/images/escu-icon.png" alt="insert" width="100" height="100" />
          </div>
          <div className="container-mother">
            <div className="container-rrss1">
              <a href="https://github.com/ccnn1010"><img className="github-icon1" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="45" /></a>
              <a href="https://www.linkedin.com/in/caterinanicolo/"><img className="linkedin-icon1" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>

            
              <a href="https://github.com/jciria74"><img className="github-icon2" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="45" /></a>
              <a href="https://www.linkedin.com/in/javierciria74/"><img className="linkedin-icon2" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>
           
          
            
              <a href="https://github.com/jara-git"><img className="github-icon3" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="45" /></a>
              <a href="https://www.linkedin.com/in/jarabelmonte/"><img className="linkedin-icon3" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>
         
    
              <a href="https://github.com/Javiuty"><img className="github-icon4" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="45" /></a>
              <a href="https://www.linkedin.com/in/javierescuadra/"><img className="linkedin-icon4" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>
            </div>
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