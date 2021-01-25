/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { IComic } from '../dto/IComic';
import './ComicDetails.css';

type ModalParams ={
     comic: IComic | undefined
     close: Function
}

export default (props:ModalParams) =>{
   
  let title = '';
  let price = 0;
  let description = '';
  let imagePath = '';
  let imageExtension = '';
  let imageLink = '';
     
    
    if(props.comic){
      title = props.comic.title || '';
      price = props.comic.prices[0]?.price || 0;
      description = props.comic.description || '';
      imagePath = props.comic.images[0]?.path  || '';
      imageExtension = props.comic.images[0]?.extension  || '';
      imageLink = imagePath +'.'+ imageExtension;
    }

    return (
      <Modal.Dialog >
       <Modal.Body>
       <button className="closeButton" onClick={()=> props.close()}>X</button>
       <h2 className="titleDetails">{title}</h2>
         <div className="details">
           <div className="imageDetails">
             <img src={imageLink} alt="Imagem não disponível no momento." />
           </div>
           <div className="infoDetails">
             <p className="info" >{description}</p>
             <p className="priceDetails">R$ {price}</p>
           </div>
         </div>
       </Modal.Body>
      </Modal.Dialog>
      )
}
