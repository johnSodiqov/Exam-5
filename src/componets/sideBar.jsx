import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { BiHomeAlt2 } from "react-icons/bi"
import { FiSettings } from "react-icons/fi"
import { TfiHeadphoneAlt } from "react-icons/tfi"
import { BsPersonPlus, BsClipboard2Data } from "react-icons/bs"
import "./style/sideBar.css"
class SideBar extends Component {
    constructor() {
        super();
        this.state = {
            status: true
        }

        this.changeStatus = this.changeStatus.bind(this);
    }
    changeStatus() {
        this.setState(({
            status: !this.state.status
        }));
    }
    render() {
         
        return (

            <div className='side-bar'>
                <Link className={`Link ${this.state.status ? "Link-press" : " "}`} onClick={this.changeStatus} to={"/"}>{<BiHomeAlt2 className={`fs-4 mx-3 `} />}Statistika</Link>
                <Link className={`Link ${this.state.status ? "Link-press" : " "}`} onClick={this.changeStatus} to={"/amallar"}>{<FiSettings className={`fs-4 mx-3 `} />}Amallar</Link>
                <Link className='Link'>{<BsPersonPlus className={`fs-4 mx-3 `} />}Ruxsatlar</Link>
                <Link className='Link'>{<BsClipboard2Data className={`fs-4 mx-3 `} />}Hisobotlar</Link>
                <Link className='Link'>{<TfiHeadphoneAlt className={`fs-4 mx-3 `} />}Call - markazi</Link>
            </div>

        );
    }
}

export default SideBar;
