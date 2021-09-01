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
    
        const inputChange = (e) => {
            setAddUser({
                ...addUser,
                [e.target.name] : e.target.value
            })
        }
        console.log(addUser)

        const submitData = async (e) => {
            e.preventDefault()
            try {
                if (Object.keys(addUser).some((property) => addUser[property] === "")) {
                    alert("All fields are required")
                    return false
                }
                let response = await props.signIn(addUser)
                if(!response.data.success) {
                    if(response.data.response === 'You create account with Google, please sign in with them') {alert(response.data.response)} 
                    if(response.data.response === 'Incorrect email or password') {alert(response.data.response)} 
                    }
                }
            catch (error) {
                alert('hubo un problema vuelva mas tarde')
                //api caida
            }
        }

        const responseGoogle = async (response) => {
            let userGoogle = {
                email: response.profileObj.email,
                password: response.profileObj.googleId,
                signInGoogle: true
            }
            try {
                await props.signIn(userGoogle)
            } catch (error) {
                console.log('Authentication Error')
                alert('Authentication Error')
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
                    </div>
                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            onChange={inputChange}
                        />
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
                    <img className="imgLog" src="/assets/signUp.png" alt="usuer"/>
                </div>
        </div>
    )
}

const mapDispatchToProps = {
    signUp: userActions.signUp,
    signIn: userActions.signIn
}


export default connect(null, mapDispatchToProps) (FormSignIn)