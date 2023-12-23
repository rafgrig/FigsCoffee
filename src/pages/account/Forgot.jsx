import React,{ useState } from "react"
import { Input } from "../../components/Input";


export const Forgot = ( props )=> {
    const [email, setEmail ] = useState("");
    const [code, setCode ] = useState("");


    const handleSubmit = (e) =>{
        e.preventDefault()
        console.log(email);
    }

return(
    <>
    <form className="login-form" onSubmit = {handleSubmit}>
    <h2>Enter Your Email</h2>
    <Input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
    <Input value={code} onChange={(e) => setCode(e.target.value)}type="code" placeholder="Code" id="code" name="code" />

    <button type = "submit">Continue</button>
    </form>
    <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Remember Password?</button>
    </>
)

}