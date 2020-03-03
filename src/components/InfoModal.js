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
          <img className="icon-contact" onClick={this.toggleModal.bind(this)} src="https://s5.gifyu.com/images/contact-us-icon-04.png" alt="icon-contact" width="23" height="23" />
        </div>
        <Modal isOpen={this.state.modalState} toggle={this.toggleModal.bind(this)}>
      
          <ModalHeader id="modal-header" className="modal-info-header">
           <p>Who we are?</p>
          </ModalHeader>
          <ModalBody>
          {/* -----------------------Nuestras fotos --------------------------*/}
            <div className="faces-icons">
              <img  src="https://s5.gifyu.com/images/cat36b02dbb58a70018.png" alt="insert"/>
              <img src="https://s5.gifyu.com/images/javi.png" alt="insert"  />
              <img src="https://s5.gifyu.com/images/Jara.png" alt="insert"  />
              <img src="https://s5.gifyu.com/images/Escu.png" alt="insert"  />
            </div>
      
            <div className="text-name">
              <h5>Caterina Nicolo</h5>
              <p>ccnn1010@gmail.com</p>
              <h5>Javier Sánchez</h5>
              <p>jciria74@gmail.com</p>
              <h5>Jara Belmonte</h5>
              <p>jarabelmonte@gmail.com</p>
              <h5>Javier Escuadra</h5>
              <p>javiiescuadra@gmail.com</p>
            </div>

            <div className="icons">
              <div>
                <a href="https://github.com/ccnn1010" target="_blank" rel="noopener noreferrer"><img className="github-icon"src="https://s5.gifyu.com/images/github.jpg" alt="github-icon"/></a>
                <a href="https://www.linkedin.com/in/caterinanicolo/" target="_blank" rel="noopener noreferrer"><img src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon"/></a>
              </div>
              <div>
                <a href="https://github.com/jciria74" target="_blank" rel="noopener noreferrer"><img className="github-icon" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" /></a>
                <a href="https://www.linkedin.com/in/javierciria74/" target="_blank" rel="noopener noreferrer"><img src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon"/></a>
              </div>
              <div>
                <a href="https://github.com/jara-git" target="_blank" rel="noopener noreferrer"><img className="github-icon"  src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" /></a>
                <a href="https://www.linkedin.com/in/jarabelmonte/" target="_blank" rel="noopener noreferrer"><img src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon"/></a>
              </div>
              <div>
                <a href="https://github.com/Javiuty" target="_blank" rel="noopener noreferrer"><img className="github-icon" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" /></a>
                <a href="https://www.linkedin.com/in/javierescuadra/" target="_blank" rel="noopener noreferrer"><img src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon"/></a>
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