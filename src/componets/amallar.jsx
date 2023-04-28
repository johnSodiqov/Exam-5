import React, { Component } from 'react';
import { BsBellFill, BsFillPersonFill } from "react-icons/bs"
import { BiSearchAlt } from "react-icons/bi"
import "./style/amallar.css"
import axios from 'axios';

class Amallar extends Component {
    constructor(){
        super();
        this.state= {
            userData: []
        }
    }
    componentDidMount(){
        axios.get("https://api.npoint.io/45e6264d5b437ebadbd1")
        .then((mas)=>{
            this.setState(({
                userData: mas.data
            }))
        })
        .catch((err)=>{
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

                <div className="table">
                    <table class="table table-light table-striped">
                        <tr>
                            <th>ID</th>
                            <th>User</th>
                            <th>Telefon</th>
                            <th>JshIr</th>
                            <th>Qurilma</th>
                        </tr>
                        {
                            this.state.userData.map(item=>{
                                return(
                                    <tr>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.number}</td>
                                        <td>{item.stir}</td>
                                        <td>{item.device}</td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
            </div>
        );
    }
}

export default Amallar;
