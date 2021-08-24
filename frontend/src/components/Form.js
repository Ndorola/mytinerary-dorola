import { useState } from "react"

const Form = () => {
    
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
                <div className="formBox" style={{backgroundImage: "url('/assets/fotos/SignUpFondo.png')"}} alt="iconUser">
                    <input name="name" type="text" placeholder="First name" onChange={changeHandler}/>
                    <input name="lastname" type="text" placeholder="Last name" onChange={changeHandler}/>
                    <input name="email" type="text" placeholder="Email" onChange={changeHandler}/>
                    <input name="password" type="text" placeholder="Password" onChange={changeHandler}/>
                    <input name="url" type="text" placeholder="URL of picture" onChange={changeHandler}/>

                    <select name="Country" onChange={changeHandler}>
                        <option value="value">Choose your Country</option>
                    </select>
    
                    <button>Sign Up</button>
                    <button>Sign Up with Google</button>
                </div>
            </form>
            {/* <h3>Hola {user[0].name} </h3> */}
        </div>
    )
}

export default Form