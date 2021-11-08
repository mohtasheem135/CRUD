import React, { useState } from 'react';
import firebaseDB from "./firebase";
import { isEmpty } from "lodash"
import "./addedit.css"

const AddEdit = () => {

    const values = {
        name: '',
        mobile: '',
        email: '',
        address: ''
    };

    const [initialState, setInitialState] = useState(values);
    const { name, mobile, email, address } = initialState;

    const handelInputChange = (e) => {
        let { name, value } = e.target;
        setInitialState({
            ...initialState,
            [name]: value,
        })
    }

    const handelSubmit = (e) => {
        e.preventDefault()
        firebaseDB.child("contacts").push(initialState, (err)=>{
            if(err){
                console.log(err);
            }
        })
    }


    return (
        <div>
            <form onSubmit={handelSubmit} className="form-container">
                <input className="input-field" type="text" placeholder="Name" value={name} name="name" onChange={handelInputChange} />
                <input className="input-field" type="number" placeholder="Mobile" value={mobile} name="mobile" onChange={handelInputChange} />
                <input className="input-field" type="email" placeholder="Email" value={email} name="email" onChange={handelInputChange} />
                <input className="input-field" type="text" placeholder="Address" value={address} name="address" onChange={handelInputChange} />
                <button type="submit" className="input-btn" >Cancel</button>
                <button type="submit" className="input-btn" >Submit</button>
            </form>
        </div>
    )
}

export default AddEdit
