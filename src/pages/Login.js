import React from 'react'
import {Link} from 'react-router-dom'
import "../styles/login.css"
const Login = () => {
  return (
    <div>
        <form className='login'>

        <h1>Login</h1>
         <input type='email' placeholder='Email ID'/>
         <br />
            <input type='password' placeholder='Password'/>
            <br />
         <Link to="/home"><button>Login</button></Link>  
         </form>
    </div>
  )
}

export default Login