/* eslint-disable import/no-anonymous-default-export */
import React, {useEffect, useState} from 'react';
import './ComicList.css';
import LoadingIcon from '../components/LoadingIcon';
import { IComic } from '../dto/IComic';
import ComicsService from '../services/ComicsService';
import ComicCard from './ComicCard';
import { connect, ConnectedProps } from 'react-redux';

const mapState = (state: any) => ({
       refreshList: state.comic.refreshList
  })

  const connector = connect(mapState)

  type Props = ConnectedProps<typeof connector>

 const ComicList = (props: Props) =>{

    const [comicList, setComicList] = useState<JSX.Element[]>([]);
    const [showLoadingIcon, setShowLoadingIcon] = useState<boolean>(true);
    const [offset, setOffset] = useState<number>(0);
    const [limit, setLimit] = useState<number>(10);

    function setListInitalState(){
        setOffset(0);
        setLimit(10);
    }

    useEffect(()=>{    
        getData();
    },[offset, limit])


    useEffect(()=>{
        setListInitalState();
        getData();
    },[props.refreshList])

   
    async function getData(refreshParameters: boolean = false){
        setShowLoadingIcon(true);
        const comicService = new ComicsService();
        const data:Array<IComic> = await comicService.getAll(limit, offset);
        const list = data.map((comic:IComic)=>{          
            return (
                <ComicCard comic={comic}/>
            )
          })
          setShowLoadingIcon(false);
          setComicList(list);
     }

     return (   
        <>  
        <LoadingIcon show={showLoadingIcon}/>   
       
            <div className="list">
            
            {comicList}
           
            </div>
            <div className="buttons">
              <button className="button-back" disabled={offset <= 0} 
                  onClick={()=> setOffset(offset - limit)}> {"<"} </button>
              <button className="button-next" disabled={comicList.length < limit}
                  onClick={()=> setOffset(offset + limit)}>{">"}</button>
            </div>  
           
         </>
    )
}

export default connector(ComicList);  