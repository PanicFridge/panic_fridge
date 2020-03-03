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
          <ul className= "items-list-icons">
          <li>
          <img className="icon-contact" onClick={this.toggleModal.bind(this)} src="https://s5.gifyu.com/images/contact-us-icon-04.png" alt="icon-contact" width="23" height="23" />
          </li>
          <li className= 'fridge-logo'>
          </li>
          </ul>
          
        </div>
        <Modal isOpen={this.state.modalState} toggle={this.toggleModal.bind(this)}>
      
          <ModalHeader id="modal-header">
           <p>Who we are?</p>
          </ModalHeader>
          <ModalBody>
          {/* -----------------------Nuestras fotos --------------------------*/}
          <div className="container-icon">
            <img  src="https://s5.gifyu.com/images/cat36b02dbb58a70018.png" alt="insert" width="100" height="90" />
            <img src="https://s5.gifyu.com/images/javi.png" alt="insert" width="100" height="90" />
            <img src="https://s5.gifyu.com/images/Jara.png" alt="insert" width="100" height="90" />
            <img src="https://s5.gifyu.com/images/Escu.png" alt="insert" width="100" height="90" />
          </div>
          {/* -------------------------Iconos de Github y Linkedin------------- */}
          <div className="container-mother">
            <div className="container-rrss1">
              {/* ----------Caterina--------- */}
              <a href="https://github.com/ccnn1010" target="_blank" rel="noopener noreferrer"><img className="github-icon1" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="40"/></a>
              <a href="https://www.linkedin.com/in/caterinanicolo/" target="_blank" rel="noopener noreferrer"><img className="linkedin-icon1" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>

              {/* ---------Javi-------------- */}
              <a href="https://github.com/jciria74" target="_blank" rel="noopener noreferrer"><img className="github-icon2" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="40" /></a>
              <a href="https://www.linkedin.com/in/javierciria74/" target="_blank" rel="noopener noreferrer"><img className="linkedin-icon2" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>
           
              {/* --------------Jara------------------------ */}
              <a href="https://github.com/jara-git" target="_blank" rel="noopener noreferrer"><img className="github-icon3" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="40" /></a>
              <a href="https://www.linkedin.com/in/jarabelmonte/" target="_blank" rel="noopener noreferrer"><img className="linkedin-icon3" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>
              {/* -------------Escu-------------------------- */}
              <a href="https://github.com/Javiuty" target="_blank" rel="noopener noreferrer"><img className="github-icon4" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="40" /></a>
              <a href="https://www.linkedin.com/in/javierescuadra/" target="_blank" rel="noopener noreferrer"><img className="linkedin-icon4" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>
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