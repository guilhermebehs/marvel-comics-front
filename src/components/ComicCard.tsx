/* eslint-disable import/no-anonymous-default-export */
import React, { useEffect, useState } from 'react'
import { IComic } from '../dto/IComic'
import './ComicCard.css'
import ComicDetails from '../screens/ComicDetails';
import { connect, ConnectedProps } from 'react-redux';


const mapState = (state: any) => ({
    comicsToSend: state.comic.comicsToSend,
    refreshList: state.comic.refreshList
  })
  
  const mapDispatch = {
    addComicsToSend: (comic: IComic) => ({ type: 'ADD_COMICS_TO_SEND', payload:comic }),
    removeComicsToSend: (comic: IComic) => ({ type: 'REMOVE_COMICS_TO_SEND', payload:comic }),
  }
  
  const connector = connect(mapState, mapDispatch)


type Props = ConnectedProps<typeof connector> & {
    comic: IComic
  };
  


const ComicCArd= (props:Props)=>{

    useEffect(()=>{
       
        const isChecked:boolean = props.comicsToSend.find(
                                    (comic:IComic)=> 
                                     comic.id === props.comic.id) || false;
        
        setIsChecked(isChecked)
 
    },[props.comic.id])


    useEffect(()=>{
       setIsChecked(false)
    },[props.refreshList])

    function handleCheckBoxValue(isChecked: boolean){
      
        isChecked ?
                props.addComicsToSend(props.comic)
                :
                props.removeComicsToSend(props.comic)

        setIsChecked(isChecked);
    }


    const [openDetails, setOpenDetails] = useState<boolean>(false);
    const [isChecked, setIsChecked] = useState<boolean>(false);


    

    const imageUrl = props.comic.images.length > 0 ?
           props.comic.images[0].path + '.'+ props.comic.images[0].extension
               :
               '';

    const price = props.comic.prices.length > 0 ?
                   Number(props.comic.prices[0].price).toFixed(2).replaceAll('.',',') 
                   :
                   'O,00';
    const title = props.comic.title || '';

    return (
         <>
        {openDetails &&
         <ComicDetails  comic={props.comic} close={()=>setOpenDetails(false)}/>
         }
        <div className="card">
            <img className="image" onClick={()=>{setOpenDetails(true)}} src={imageUrl} alt="Imagem não disponível no momento."/>
            <p onClick={()=>{setOpenDetails(true)}} className="title">{title}</p>
            <p>R$ {price}</p>
            <input type="checkbox" 
                checked={isChecked}
                onChange={(e) => handleCheckBoxValue(e.target.checked)}/>
        </div>
        </>
    )
}

export default connector(ComicCArd);  