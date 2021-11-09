import React, { useEffect, useState } from 'react';
import firebaseDB from "../../firebase"
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import { useNavigate } from "react-router-dom";
import "./view.css"

const View = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({});

    let currentID = useParams();
    const {id} = currentID;

    useEffect(() => {
        firebaseDB.child("contacts").on("value", (snapshot) => {
            if (snapshot.val() != null) {
                setData({
                    ...snapshot.val()
                })
            } else {
                snapshot({});
            }
        })
    }, [id])

    return (
        <div>
            <Navbar />
            {Object.keys(data).map((userID)=>{
                if(userID===id){
                    return(
                        <div>
                            <h1 className="head-1">{data[id].name}</h1>
                            <div className="view-container">
                                
                                <p className="element">Name: {data[id].name}</p>
                                <p className="element">Email: {data[id].email}</p>
                                <p className="element">Mobile: {data[id].mobile}</p>
                                <p className="element">Address: {data[id].address}</p>
                                <button className="back-btn"  onClick={()=>navigate("/")}>Back</button> 
                            </div>
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default View
