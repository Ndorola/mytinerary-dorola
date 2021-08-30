import { useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/usersActions"
import GoogleLogin from 'react-google-login'
import { Link } from "react-router-dom"


const FormSignIn = (props) => {

        const [addUser, setAddUser] = useState({
            email: "",
            password: ""
        })
    
        const [error, setError] = useState(null)
    
        const inputChange = (e) => {
            setAddUser({
                ...addUser,
                [e.target.name] : e.target.value
            })
        }
        console.log(addUser)

        const submitData = async (e) => {
            e.preventDefault()
            console.log(error)
            console.log('hola')
            let response = await props.signIn(addUser)
            if(!response.data.success) {
                setError(response.data.error)
            }
        }

        const responseGoogle = async (response) => {
            let userGoogle = {
                email: response.profileObj.email,
                password: response.profileObj.googleId,
                signInGoogle: true
            }
            let res = await props.signIn(userGoogle)
            if(!res.data.success) {
                setError(res.data.error)
            }  
        }

        

    return  (
        <div className="mainForm">
            <form>
                <div className="formBox">
                    <h3>Welcome back!</h3>
                    <p>Sign in to discover and connect with MYtinerary's global community</p>
                    <div>
                        <input
                            name="email"
                            type="text"
                            placeholder="Enter your email"
                            onChange={inputChange}
                        />
                        {error && error.find(err => err.path[0]==="email") && <p className="inputError">{error.find(err => err.path[0]==="email").message}</p>}
                    </div>
                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={inputChange}
                        />
                        {error && error.find(err => err.path[0]==="password") && <p className="inputError">{error.find(err => err.path[0]==="password").message}</p>}
                    </div>
                    
                    <div className="buttonsForm">
                        <button className="btnForm" onClick={submitData}>Sign in</button>
                        <GoogleLogin
                            className="btnGoogle"
                            clientId="1089874556679-9h3m7uo8a9kkoc1ofepgo4jnouufr12t.apps.googleusercontent.com"
                            buttonText="Sign in with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />,
                    </div>
                    <div>
                        <p>Don't have an account?</p>
                        <Link to="/signup">Sign up here!</Link> 
                    </div>
                </div>
            </form>
                <div>
                    <img src="/assets/signUp.png" alt="usuer"/>
                </div>
        </div>
    )
}

const mapDispatchToProps = {
    signUp: userActions.signUp,
    signIn: userActions.signIn
}


export default connect(null, mapDispatchToProps) (FormSignIn)