import React from 'react'
import Navbar from '../Navbar/Navbar';
import "./about.css"

const About = () => {
    return (
        <div>
            <Navbar/>
            <p className="about-para">This is a very simple Contact Management System, Where a user can add a contact from the navbar option.
            <br/> User can also delete a contact on his own wish. If any mistyping has been done while adding a contact to the contact list than he can <br/>
            also use the edit option to edit that paticular contact. The user can also view each and every contact seprately.
            <br/>
            I have made this contact management system using React and Firebase. <br/>
            To make this application I took the help from YouTube tutorials. <br/><br/>
            This is a very simple CRUD application. </p>
        </div>
    )
}

export default About
