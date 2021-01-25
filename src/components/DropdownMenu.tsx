/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import {connect, ConnectedProps} from 'react-redux';
import './DropdownMenu.css';
import {GrMenu} from 'react-icons/gr';
import { Dropdown } from 'react-bootstrap';
import EmailService from '../services/EmailService';

const mapState = (state: any) => ({
   comicsToSend: state.comic.comicsToSend,
   refreshList: state.comic.refreshList,
 })
 
 const mapDispatch = {
   cleanComicsToSend: () => ({ type: 'CLEAN_COMICS_TO_SEND'}),
   setRefreshList: ()=>({type: 'REFRESH_LIST'})
 }

  const connector = connect(mapState, mapDispatch)

  type Props = ConnectedProps<typeof connector>



const DropdownMenu = (props:Props) =>{

    function send(){
       if(props.comicsToSend.length > 0){
          const emailService = new EmailService();
          emailService.send('saintjimmyrs@hotmail.com', props.comicsToSend)
          props.cleanComicsToSend();
          props.setRefreshList();
          alert('HQs enviados por email')
       }
    }

    return (<>
    
            <Dropdown >
         <Dropdown.Toggle variant="success" id="dropdown-basic">
         <div className="Dropdown">
               <span >
                  {props.comicsToSend.length}
               </span><GrMenu size={30} style={{color:'white'}}/>
            </div>
         </Dropdown.Toggle>
         
         <Dropdown.Menu>
         <Dropdown.Item ><div className="arrow-up"></div></Dropdown.Item>
         <Dropdown.Item  onClick={()=>{ send()}}>Enviar</Dropdown.Item>
         <Dropdown.Item >Preferências </Dropdown.Item> 
         <Dropdown.Item >Sair </Dropdown.Item>   
         </Dropdown.Menu>
         </Dropdown>
      </>
            )
}

export default connector(DropdownMenu);  