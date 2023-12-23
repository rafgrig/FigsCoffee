import React,{ useState } from "react"
import {Input} from "../../components/Input"

    export const Register = (props)=> {
        const [email, setEmail ] = useState("");
        const [pass, setPass ] = useState("");
        const [name, setName ] = useState("");
        const [age, setAge ] = useState("");
        const [gender, setGender] = useState("")
        const[termsAndConditions, setTermsAndConditions] = useState("")
        
        const handleSubmit = (e) =>{
            e.preventDefault()
            console.log(email);
        }

        return (
            <div className="auth-form-container">
                
            <form className="register-form" onSubmit={handleSubmit}>
              <h2>Register</h2>
                <Input  text="Name" value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Write Your Name" />
                <Input  text="Age"value={age} onChange={(e) => setAge(e.target.value)} type="age" placeholder="Write Your Age" id="age" name="age" />
                <Input text="Email"value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <Input text="Password" value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Write Your Password" id="password" name="password" />
                
                <div>
        <Input
          type="checkbox"
          id="termsAndConditions"
          checked={termsAndConditions}
          onChange={(e) => setTermsAndConditions(!termsAndConditions)}
        />
        <label htmlFor="termsAndConditions">I agree to the terms and conditions</label>
      </div>

      <div>
        <label>
          <Input
            type="radio"
            id="male"
            name="gender"
            value="male"
            checked={gender === 'male'}
            onChange={(e) => setGender(e.target.value)}
          />
          Male
        </label>


        <label>
          <Input
            type="radio"
            id="female"
            name="gender"
            value="female"
            checked={gender === 'female'}
            onChange={(e) => setGender(e.target.value)}
          />
          Female
        </label>
        </div>
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here</button>
        </div>

        )
    }
