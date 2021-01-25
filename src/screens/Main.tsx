import React, { Component } from 'react';
import ComicList from '../components/ComicList';
import TopBar from '../components/TopBar';
import store from '../redux/store';
import {Provider} from 'react-redux';
import './Main.css';


type MyProps={};
    
type MyState = {};


export default class Main extends Component<MyProps, MyState>{
   


    render(){
        return(
            <Provider store={store}>
              <div className="Main"> 
                    <TopBar />     
                    <ComicList/>
                </div>)
            </Provider>
        )
    }
}