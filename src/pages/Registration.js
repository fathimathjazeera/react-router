import React from 'react'
import {Link} from "react-router-dom"
import "../styles/registration.css"
const Registration = () => {
  return (
    <div >
        <form className='reg'>
            <h1>Registration</h1>
            <input type='text' placeholder='Username'/>
            <br />
            <input type='email' placeholder='Email ID'/>
            <br />
            <input type='password' placeholder='Password'/>
            <br />
         <Link to="/login"><button>Submit</button></Link> 
        </form>
    </div>
  )
}

export default Registration