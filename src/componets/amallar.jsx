import React, { Component } from 'react';
import { BsBellFill, BsFillPersonFill } from "react-icons/bs"
import { BiSearchAlt } from "react-icons/bi"
import "./style/amallar.css"
import axios from 'axios';

class Amallar extends Component {
    constructor() {
        super();
        this.state = {
            userData: []
        }
    }
    componentDidMount() {
        axios.get("https://api.npoint.io/45e6264d5b437ebadbd1")
            .then((mas) => {
                this.setState(({
                    userData: mas.data
                }))
            })
            .catch((err) => {
                console.log("Something is wrong");
            })
    }
    render() {
        return (
            <div className='amallar'>
                <div>
                    <form class="d-flex justify-content-evenly align-items-center" role="search">
                        <div className="search">
                            <input class="form-control me-2 border-0" type="search" placeholder="Search" aria-label="Search" />
                            <BiSearchAlt className='fs-2 ' color='#4880FF' />
                        </div>
                        <BsBellFill color='#4880FF' className='bell' />
                        <BsFillPersonFill color='#4880FF' className='bell' />
                    </form>
                    <div className="search-by-id">
                        <div>
                            <h3>ID orqali qidirish</h3>
                            <input class="form-control me-2 border-0" type="search" placeholder="ID" aria-label="Search" />
                        </div>
                        <button className='btn btn-primary px-4'>Qo'shish</button>
                    </div>
                </div>

                <div className="table row">
                    <div className="col-1"><h4>ID</h4></div>
                    <div className="col-2"><h4>User</h4></div>
                    <div className="col-2"><h4>Phone Number</h4></div>
                    <div className="col-3"><h4>STIR</h4></div>
                    <div className="col-2"><h4>Device</h4></div>

                    {
                        this.state.userData.map(item => {
                            return (

                                <div className='table-content row my-1'>
                                    <div className="col-1"><h3>{item.id}</h3></div>
                                    <div className="col-2"><h3>{item.name}</h3></div>
                                    <div className="col-2"><h3>{item.number}</h3></div>
                                    <div className="col-3"><h3>{item.stir}</h3></div>
                                    <div className="col-2"><h3>{item.device}</h3></div>
                                </div>

                            )
                        })
                    }

                </div>
            </div>
        );
    }
}

export default Amallar;
