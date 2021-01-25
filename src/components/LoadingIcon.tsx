/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import './LoadingIcon.css';
import ReactLoading from 'react-loading';



export default (props:any)=>{


    return (
        <div className="loading" style={{marginTop: props.show ? 40 : 0}}>
           {props.show && 
              <ReactLoading type='spin' color='red' height={50} width={50} />}
        </div>
    )
}