import React,{ useState } from "react"
import {Input} from "../../components/Input"
import {Link} from "react-router-dom";


export const Login = ( props )=> {
const [email, setEmail ] = useState("");
const [pass, setPass ] = useState("");


 const handleSubmit = (e) =>{
    e.preventDefault()
    console.log(email);
}

return(
    <> 
        <from className="login-form" onSubmit = {handleSubmit} >
            <h2>Log In</h2>
            <Input text="Email" value = {email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email Addres" id="email" name="password"/>
            <Input text="Password" value = {pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password"/>

        <button>Log In</button>
            
        </from>
            <Link to="/register"><button className="link-btn" > Don't have any account? Register. </button></Link>
            <Link to="/forgot"><button className="link-btn" > Forgot Password. </button></Link>
            <Link to="/coffee"><button className="link-btn" > Move to Marketplace </button></Link>
            
    </>
    )
    }
