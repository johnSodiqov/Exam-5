import React, { Component } from 'react';
import "./style/statistika.css"
import {
    BsBellFill,
    BsFillPersonFill,
    BsArrowRightCircle,
    BsArrowLeftCircle,
    BsPeople,
    BsFillArrowUpRightCircleFill
} from "react-icons/bs"
import { BiSearchAlt } from "react-icons/bi"
import { CiCircleInfo } from "react-icons/ci"
import axios from 'axios';

class Statistika extends Component {
    constructor() {
        super();
        this.state = {
            dataArray: [],
            usersArray: []
        }
    }
    componentDidMount() {
        axios.get("https://api.npoint.io/4b1114043e78e2b041d9")
            .then((mas) => {
                this.setState(({
                    dataArray: mas.data
                }))
                console.log(this.state.dataArray);

            })
            .catch((err) => {
                console.log("Something is wrong");
            })
        axios.get("https://api.npoint.io/9d33a289e829720175dd")
            .then((mas) => {
                this.setState(({
                    usersArray: mas.data
                }))
                console.log(this.state.usersArray);

            })
            .catch((err) => {
                console.log("Something is wrong");
            })

    }
    render() {
        return (
            <div className='amallar'>
                <form class="d-flex justify-content-evenly align-items-center" role="search">
                    <div className="search">
                        <input class="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search" />
                        <BiSearchAlt className='fs-2 ' color='#4880FF' />
                    </div>
                    <BsBellFill color='#4880FF' className='bell' />
                    <BsFillPersonFill color='#4880FF' className='bell' />
                </form>

                <div className="data-box">
                    <div className="data-button">
                        <BsArrowLeftCircle className='fs-3 text-info' />
                    </div>

                    {
                        this.state.dataArray.map((item, index) => {
                            return (
                                <div className="data-button py-2 mx-2">
                                    <h5 className='fw-normal '>{item.oy}</h5>
                                    <h5 className='fw-bold w-100 text-center'>{item.kun}</h5>
                                </div>
                            )
                        })
                    }

                    <div className="data-button">
                        <BsArrowRightCircle className='fs-3 text-info' />
                    </div>
                </div>
                <div className="list">
                    <div className="list-header">
                        <h2>Ro'yhatdan o'tganlar</h2>
                    </div>
                    <div className="list-content">
                        <BsPeople className='fs-1 ' />
                        <pre>1 712 001</pre>
                        <CiCircleInfo className='fs-1 ' />
                    </div>

                </div>
                <div className="row users">
                    {
                        this.state.usersArray.map((item, inde) => {
                            return (
                                <div className="user col-4 my-2">
                                    <div className="user-header">
                                        <h5>{item.nomi}</h5>
                                    </div>
                                    <div className="user-icon">
                                        <img src={item.url} alt="" />
                                    </div>
                                    <div className="user-count w-100 text-center">
                                        <h1 className='fw-bolder'>{item.soni}</h1>
                                    </div>
                                    <div className="user-percent d-flex align-items-center">
                                        <BsFillArrowUpRightCircleFill color='green' />
                                        <h5 className='mx-2 text-success'>{item.foiz}</h5>
                                    </div>

                                    <a href="#qwerty">Batafsil</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

export default Statistika;
