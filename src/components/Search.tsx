import React, { useState } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import './Search.css';

const mapState = (state: any) => ({
    filter: state.comic.filter,
  })
  
  const mapDispatch = {
    cleanFilter: () => ({ type: 'CLEAN_FILTER'}),
    setFilter: (value:string)=>({type: 'FILTER',payload: value})
  }
 
   const connector = connect(mapState, mapDispatch)
 
   type Props = ConnectedProps<typeof connector>
 
 

const Search = (props:Props) =>{

    const [filter, setFilter] = useState('');

    function filterSearch(){
        props.setFilter(filter);
    }

    function cleanFilter(){
        props.cleanFilter();
        setFilter('');
    }
  
    return (
        <div className="Search">
            <input value={filter} className="inputSearch" 
                onChange={(e)=> setFilter(e.target.value)} type="text" />
            <button onClick={()=> filterSearch()} 
                      disabled={filter.length === 0}
                      className="buttonSearch">Pesquisar</button>
            <button onClick={()=> cleanFilter()} 
                      className="buttonSearch">Limpar </button>
        </div>
    )
}

export default connector(Search);