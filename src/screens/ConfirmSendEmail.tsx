import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect, ConnectedProps } from 'react-redux';
import EmailService from '../services/EmailService';
import './ConfirmSendEmail.css';

const mapState = (state: any) => ({
    comicsToSend: state.comic.comicsToSend,
  })
  
  const mapDispatch = {
    cleanComicsToSend: () => ({ type: 'CLEAN_COMICS_TO_SEND'}),
    setRefreshList: ()=>({type: 'REFRESH_LIST'})
  }
 
   const connector = connect(mapState, mapDispatch)
 
   type Props = ConnectedProps<typeof connector> & {
       close: Function;
   }
 


const ConfirmSendEmail = (props:Props)=>{

    const [email, setEmail] = useState('');

    function send(){
           const emailService = new EmailService();
           emailService.send(email, props.comicsToSend)
           props.cleanComicsToSend();
           props.setRefreshList();
           alert('HQs enviados por email')
           props.close()
        
     }

     return(
        <Modal.Dialog className="modal-dialog-confirm">
           <button className="closeButton-send" onClick={()=> props.close()}>X</button>
        <Modal.Body>
            <label>Email para envio</label>
            <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text"></input>
            <button disabled={email.length === 0} onClick={()=> send()} >Enviar </button>
        </Modal.Body>

        <Modal.Footer>
            
        </Modal.Footer>
        </Modal.Dialog>
     )

}

export default connector(ConfirmSendEmail);