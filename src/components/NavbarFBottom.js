import React, { Component } from 'react';
import './NavbarFBottom.scss';
import {Link} from 'react-router-dom';
import './InfoModal';
import './InfoModal.scss';
// import NavbarFBottom from './NavbarFBottom'


export default class NavbarFBottom extends Component {
  // state = {
  //   modalState: false
  // }

  // toggleModal(){
  //   this.setState({
  //     modalState: !this.state.modalState
  //   })
  // }

  render() {
    return (
      <div className='nav-fridge-bottom'>
           <footer className= "footer">
             <div className="container">
               <span>
               <ul className="navbar-footer">
                 <li className="col-sm-3"><Link to="/"><img className="panic-fridge-icon"src="https://s5.gifyu.com/images/fridge-icon-turquoise-footer-05.png" alt="panic fridge icon"/></Link></li>
                 <li className="col-sm-3"><Link to="/ingredients"><img className="ingredients-icon" src="https://s5.gifyu.com/images/ingredients-green-TEXT-02-02.png" alt="ingredients icon" /></Link></li>
                 <li className="col-sm-3"><Link to="/World-food"><img className="world-icon" src="https://s5.gifyu.com/images/world-food-inverted-TEXT-03ede060ca68ea843e.png" alt="World icon"/></Link></li>
                 <li className="col-sm-3"><Link to="/recipe-of-the-day"><img className="suggestion-icon"src="https://s5.gifyu.com/images/random-recipe-01.png" alt="Recipe of the day icon"/></Link></li>

                {/* enlace a contact us!   
                 <li className="col-sm-3">
                 <div>
        <div className="cont-modal" id="icon-contact-us">
          <img className="icon-contact"  onClick={this.toggleModal.bind(this)} src="https://s5.gifyu.com/images/contact-us-icon-04.png" alt="icon-contact" width="23" height="23" />
        </div>
        <Modal isOpen={this.state.modalState} toggle={this.toggleModal.bind(this)}>
      
          <ModalHeader id="modal-header">
           <p>Who we are?</p>
          </ModalHeader>
          <ModalBody>
          <div className="container-icon">
            <img  src="https://s5.gifyu.com/images/cat36b02dbb58a70018.png" alt="insert" width="100" height="90" />
            <img src="https://s5.gifyu.com/images/javi.png" alt="insert" width="100" height="90" />
            <img src="https://s5.gifyu.com/images/Jara.png" alt="insert" width="100" height="90" />
            <img src="https://s5.gifyu.com/images/Escu.png" alt="insert" width="100" height="90" />
          </div>
          <div className="container-mother">
            <div className="container-rrss1">
              <a href="https://github.com/ccnn1010"><img className="github-icon1" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="40" /></a>
              <a href="https://www.linkedin.com/in/caterinanicolo/"><img className="linkedin-icon1" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>

            
              <a href="https://github.com/jciria74"><img className="github-icon2" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="40" /></a>
              <a href="https://www.linkedin.com/in/javierciria74/"><img className="linkedin-icon2" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>
           
          
            
              <a href="https://github.com/jara-git"><img className="github-icon3" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="40" /></a>
              <a href="https://www.linkedin.com/in/jarabelmonte/"><img className="linkedin-icon3" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>
         
    
              <a href="https://github.com/Javiuty"><img className="github-icon4" src="https://s5.gifyu.com/images/github.jpg" alt="github-icon" width="66" height="40" /></a>
              <a href="https://www.linkedin.com/in/javierescuadra/"><img className="linkedin-icon4" src="https://s5.gifyu.com/images/linkedin80f6790467704d21.png" alt="linkedin-icon" width="50" height="45" /></a>
            </div>
          </div>
          </ModalBody>
          <ModalFooter id="modal-footer" >
            <Button id="close-button"  onClick={this.toggleModal.bind(this)}>Back</Button>
          </ModalFooter>
        </Modal>
        
      </div></li>
      */}
               
             </ul>
              </span>
             </div>
           </footer>
     </div>
    )
  }
}



