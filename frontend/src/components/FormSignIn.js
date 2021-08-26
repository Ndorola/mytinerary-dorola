import { useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/usersActions"


const FormSignIn = (props) => {

        const [userLog, setUserLog] = useState({
            email: "",
            password: ""
        })
    
        const [error, setError] = useState({
            email: "",
            password: ""
        })
    
        const inputChange = (e) => {
            setUserLog({
                ...userLog,
                [e.target.name] : e.target.value
            })
        }
        console.log(userLog)
    
        const submitData = (e) => {
            e.preventDefault()
            try {
                props.signIn(userLog)
            } catch(error) {
                console.log(error)
            }
    
            //email - email
            if (!userLog.email.includes("@") || !userLog.email.includes(".")) {
                setError({...error, email:"Invalid email or email"})
            }
            if (userLog.email === null || userLog.email === "") {
                setError({...error, email:"Enter email or email"})
            }
        
            //password
            if (userLog.password === null || userLog.password === "") {
                setError({...error, password:"Enter a password"})
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
                            error=""
                            value={userLog.email} 
                            onChange={inputChange}
                        />
                        {error ? (<p className="inputError">{error.email}</p>) : null}
                    </div>
                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            error=""
                            value={userLog.password} 
                            onChange={inputChange}
                        />
                        {error ? (<p className="inputError">{error.password}</p>) : null}
                    </div>
                    
                    <div className="buttonsForm">
                        <button className="btnForm" onClick={submitData}>Sign in</button>
                        <button className="btnForm">Sign in with Google</button>
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