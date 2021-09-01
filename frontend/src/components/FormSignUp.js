import { useEffect, useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/usersActions"
import GoogleLogin from 'react-google-login'
import { Link } from "react-router-dom";

const FormSignUp = (props) => {

    // console.log(props.countries)

    const [addUser, setAddUser] = useState({
        name: "",
        lastName: "",
        email: "",
        url: "",
        country: "",
        password: "",
    })

    const [error, setError] = useState(null)

    const inputChange = (e) => {
        setAddUser({
            ...addUser,
            [e.target.name] : e.target.value
        })
      
    }
    
    console.log(addUser)

    

    var countries = ["Argentina", "Bahamas", "Barbados", "Belize", "Bolivia", "Brazil", "Canada", "Chile", "Colombia", "Costa Rica", "Cuba", "Dominica", " Ecuador "," El Salvador "," United States "," Granada "," Guatemala "," Guyana "," Haiti "," Honduras "," Jamaica "," Mexico "," Nicaragua "," Panama "," Paraguay "," Peru "," Dominican Republic "," Santa Lucia "," Surinam "," Uruguay "," Venezuela "]

    const submitData = async (e) => {
        e.preventDefault()
        try {
            // if (Object.keys(addUser).some((property) => addUser[property] === "")) {
            //         alert("All fields are required")
            //         return false
            //     }
                let response = await props.signUp(addUser)
                console.log(response.data)
            if(!response.data.success) {
                if(response.data.response === 'This user is already registered') {
                    alert(response.data.response)
                } else {
                    setError(response.data.error)   
                }
            }
        } catch(error) {
            console.log('Something went wrong, try again later')
    }
}
    
    const responseGoogle = async (response) => {
        let addUserGoogle = {
            name: response.profileObj.givenName,
            lastName: response.profileObj.familyName,
            email: response.profileObj.email,
            url: response.profileObj.imageUrl,
            password: response.profileObj.googleId,
            country:'google',
            google: true
        }
        let res = await props.signUp(addUserGoogle)
        if(!res.data.success) {
            setError(res.data.error)
        }  
    }

    

    return  (
        <div className="mainForm">
            <form action="/users/signup" method="POST">
                <div className="formBox">
                    <h3>Sign Up!</h3>
                    <div className="formInput">
                        <div>
                            <input
                                name="name"
                                type="text"
                                placeholder="First name"
                                onChange={inputChange}
                            />
                            {error && error.find(err => err.path[0]==="name") && <p className="inputError">{error.find(err => err.path[0]==="name").message}</p>}
                        </div>
                        <div>
                            <input
                                name="lastName"
                                type="text"
                                placeholder="Last name"
                                onChange={inputChange}
                            />
                            {error && error.find(err => err.path[0]==="lastName") && <p className="inputError">{error.find(err => err.path[0]==="lastName").message}</p>}
                        </div>
                    </div>
                    <div className="formInput">
                        <div>
                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
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
                    </div>
                    <div className="formInput">
                        <div>
                            <input
                                name="url"
                                type="text"
                                placeholder="Url image"
                                onChange={inputChange}
                            />
                            {error && error.find(err => err.path[0]==="url") && <p className="inputError">{error.find(err => err.path[0]==="url").message}</p>}
                        </div>
                        <div>
                            <select name="country" onChange={inputChange} >
                                <option>Choose your Country</option>
                                {countries.map((country, index) => <option key={index}>{country}</option>)}
                            </select>
                            {error && error.find(err => err.path[0]==="country") && <p className="inputError">{error.find(err => err.path[0]==="country").message}</p>}
                        </div>
                    </div>
                    
                </div>
                    <div className="buttonsForm">
                        <button className="btnForm" onClick={submitData}>Sign Up</button>
                        <GoogleLogin
                            className="btnGoogle"
                            clientId="1089874556679-9h3m7uo8a9kkoc1ofepgo4jnouufr12t.apps.googleusercontent.com"
                            buttonText="Sign up with Google"
                            onSuccess={responseGoogle}
                            onFailure={responseGoogle}
                            cookiePolicy={'single_host_origin'}
                        />,
                    </div>
                    <div className="linkRedirect">
                        <p>Already have an account?</p>
                        <Link to="/login">Log In here!</Link>
                    </div>
            </form>
                <div>
                    <img className="imgLog" src="/assets/signUp.png" alt="usuer"/>
                </div>
        </div>
    )
}


const mapStateToProps = (state) => {
    return {
        countries: state.users.countries,
    }
}

const mapDispatchToProps = {
    signUp: userActions.signUp,
    signIn: userActions.signIn,
    getCountries: userActions.getCountries
}


export default connect(mapStateToProps, mapDispatchToProps) (FormSignUp)