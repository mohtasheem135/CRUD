import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import firebaseDB from '../../firebase';
import {Link} from "react-router-dom"
import "./home.css"
import { map } from 'lodash';
import { useNavigate } from 'react-router';

const Home = () => {
    
    const navigate = useNavigate();
    const [data, setData] = useState({});

    useEffect(()=>{
        firebaseDB.child("contacts").on("value", (snapshot)=>{
            if(snapshot.val()!=null){
                setData({
                    ...snapshot.val()
                })
            } else {
                snapshot({});
            }
        })
    }, [])

    const onDelete = (id)=>{
        if(window.confirm("Are you sure you want to delete the Record")){
            firebaseDB.child(`contacts/${id}`).remove((err)=>{
                if(err){
                    console.log(err);
                }
            })
        } else {
            navigate("/");
        }
    }

    return (
        <div>
            <Navbar/>
            <h1 className="head-1">Contact List</h1>
            <table className="contact-table">
                <thead className="contact-thead">
                    <tr className="contact-tr">
                        <th>No.</th>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(data).map((id, index) =>{
                        return(
                            <tr className="tr" key={id}>
                                <th className="th" scope="row">{index+1}</th>
                                <td className="td">{data[id].name}</td>
                                <td>{data[id].mobile}</td>
                                <td>{data[id].email}</td>
                                <td>{data[id].address}</td>
                                <td>
                                    <Link to={`/update/${id}`}>
                                        <a><i class="fas fa-edit"></i></a>
                                    </Link>

                                        <a onClick={()=> onDelete(id)}>
                                            <i class="fas fa-trash"></i></a>

                                    <Link to={`/view/${id}`}>
                                        <a>
                                            <i class="fas fa-eye"></i></a>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}

export default Home
