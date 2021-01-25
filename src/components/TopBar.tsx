import React, { Component } from 'react';
import DropdownMenu from './DropdownMenu';
import './TopBar.css';



export default class TopBar extends Component{

    render(){
        return(
            <div className="TopBar">
                <div className="pageTitle">Edições Marvel</div>
                <DropdownMenu />
            </div>
        )
    }
}
