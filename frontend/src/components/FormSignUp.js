import { useState } from "react"
import { useForm } from "react-hook-form"


const FormSignUp = () => {
    
    const [user, setUser] = useState([{
        name: "", lastname: "", email: "", username: "", password: "", url: "", country: ""
    }])



    const changeHandler = (e) => {
        setUser([{...user, [e.target.name]: e.target.value}])
    }

    return  (
        <div className="mainForm">
            <form>
                <div className="formBox">
                    <h3>Sign Up!</h3> 
                    <input name="name" type="text" placeholder="First name" onChange={changeHandler}/>
                    <input name="lastname" type="text" placeholder="Last name" onChange={changeHandler}/>
                    <input name="email" type="text" placeholder="Email" onChange={changeHandler}/>
                    <input name="username" type="text" placeholder="Username" onChange={changeHandler}/>
                    <input name="password" type="text" placeholder="Password" onChange={changeHandler}/>
                    <input name="url" type="text" placeholder="URL of picture" onChange={changeHandler}/>

                    <select name="Country" onChange={changeHandler}>
                        <option value="value">Choose your Country</option>
                    </select>
                    <div className="buttonsForm">
                        <button className="btnForm">Sign Up</button>
                        <button className="btnForm">Sign Up with Google</button>
                    </div>
                </div>
            </form>
                <div>
                    <img src="/assets/signUp.png" alt="usuer"/>
                </div>
            {/* <h3>Hola {user[0].name} </h3> */}
        </div>
    )
}

export default FormSignUp