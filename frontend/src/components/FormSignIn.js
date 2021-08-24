import { useState } from "react"

const FormSignIn = () => {
    
    const [user, setUser] = useState([{
        name: "", lastname: "", email: "", password: "", url: "", country: ""
    }])



    const changeHandler = (e) => {
        setUser([{...user, [e.target.name]: e.target.value}])
    }

    console.log(user)

    return  (
        <div className="mainForm">
            <form>
                <div className="formBox">
                    <h3>Welcome back!</h3>
                    <p>Sign in to discover and connect with MYtinerary's global community</p>
                    <input name="email" type="text" placeholder="Email" onChange={changeHandler}/>
                    <input name="password" type="text" placeholder="Password" onChange={changeHandler}/>

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

export default FormSignIn