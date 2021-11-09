import React, { useEffect, useState } from 'react';
import firebaseDB from "./firebase";
import { isEmpty } from "lodash"
import "./addedit.css";
import { useNavigate } from 'react-router';
import { useParams } from 'react-router';

const AddEdit = () => {

    const navigate = useNavigate();
    const [data, setData] = useState({});

    const values = {
        name: '',
        mobile: '',
        email: '',
        address: ''
    };

    const [initialState, setInitialState] = useState(values);
    const { name, mobile, email, address } = initialState;

    let currentID = useParams();
    const {id} = currentID;
    // console.log("ID"+ currentID)

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
    }, [id])

    useEffect(()=>{
        if(isEmpty(id)){
            setInitialState({...values})
        } else {
            setInitialState({
                ...data[id]
            })
        }
    }, [id, data])

    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setInitialState({
            ...initialState,
            [name]: value,
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        if(isEmpty(id)){
            firebaseDB.child("contacts").push(initialState, (err)=>{
                if(err){
                    console.log(err);
                }
            })
        } else {
            firebaseDB.child(`/contacts/${id}`).set(initialState, (err)=>{
                if(err){
                    console.log(err);
                }
            })
        }
        
        navigate("/");
    }

    const cancel = ()=>{
        window.location.reload();
    }


    return (
        <div>
            <form onSubmit={handelSubmit} className="form-container">
                <input className="input-field" type="text" placeholder="Name" value={name} name="name" onChange={handelInputChange} />
                <input className="input-field" type="number" placeholder="Mobile" value={mobile} name="mobile" onChange={handelInputChange} />
                <input className="input-field" type="email" placeholder="Email" value={email} name="email" onChange={handelInputChange} />
                <input className="input-field" type="text" placeholder="Address" value={address} name="address" onChange={handelInputChange} />
                <button type="submit" className="input-btn"  >Submit</button>
                <button type="submit" className="input-btn" onClick={cancel} >Cancel</button>
            </form>
        </div>
    )
}

export default AddEdit
