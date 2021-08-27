import { useEffect, useState } from "react"
import { connect } from "react-redux"
import userActions from "../redux/actions/usersActions"

const FormSignUp = (props) => {

    // console.log(props.countries)

    const [addUser, setAddUser] = useState({
        name: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        url: "",
        country: ""
    })

    const [error, setError] = useState({
        name: "",
        lastName: "",
        email: "",
        username: "",
        password: "",
        url: "",
        country: ""
    })

    const inputChange = (e) => {
        setAddUser({
            ...addUser,
            [e.target.name] : e.target.value
        })
        console.log(addUser)
    }
    
    // useEffect(() => {
    //     console.log(props.countries)
    //     async function getCountries() {
    //         try{
    //             await props.getCountries()
    //         } catch(error) {
    //             console.log(error)
    //         }
    //     }
    //     getCountries()
    // } ,[])

    var countries = ["Argentina", "Bahamas", "Barbados", "Belice", "Bolivia","Brasil","Canadá","Chile","Colombia","Costa Rica","Cuba","Dominica","Ecuador","El Salvador","Estados Unidos","Granada","Guatemala","Guyana","Haití","Honduras","Jamaica","México","Nicaragua","Panamá","Paraguay","Perú","República Dominicana","Santa Lucía","Surinam","Uruguay","Venezuela"]
    console.log(countries)

    const submitData = (e) => {
        e.preventDefault()
        try {
            props.signUp(addUser)
        } catch(error) {
            console.log(error)
        }

        //name
        if (addUser.name === null || addUser.name === "") {
            setError({...error, name:"Enter your name"})
        }
        if (addUser.lastName.length < 3) {
            setError({...error, name:"Enter your name"})
        }
    
        //lastName
        if (addUser.lastName === null || addUser.lastName === "") {
            setError({...error, lastName:"Enter your lastName"})
        }
    
        //email
        if (!addUser.email.includes("@") || !addUser.email.includes(".")) {
            setError({...error, email:"Invalid email"})
        }
        if (addUser.email === null || addUser.email === "") {
            setError({...error, email:"Enter your email"})
        }
    
        //password
        if (addUser.password === null || addUser.password === "") {
            setError({...error, password:"Enter a password"})
        }
    
        //url
        if (addUser.url === null || addUser.url === "") {
            setError({...error, url:"Enter a url"})
        }
    
        //country
        if (addUser.country === null || addUser.country === "") {
            setError({...error, country:"Enter your country"})
        }
    }
        

    return  (
        <div className="mainForm">
            <form action="/users/signup" method="POST">
                <div className="formBox">
                    <h3>Sign Up!</h3>
                    <div>
                        <input
                            name="name"
                            type="text"
                            placeholder="First name"
                            value={addUser.name} 
                            onChange={inputChange}
                        />
                        {error ? (<p className="inputError">{error.name}</p>) : null}
                    </div>
                    <div>
                        <input
                            name="lastName"
                            type="text"
                            placeholder="Last name"
                            value={addUser.lastname} 
                            onChange={inputChange}
                        />
                        {error ? (<p className="inputError">{error.lastName}</p>) : null}
                    </div>
                    <div>
                        <input
                            name="email"
                            type="email"
                            placeholder="Email"
                            value={addUser.email} 
                            onChange={inputChange}
                        />
                        {error ? (<p className="inputError">{error.email}</p>) : null}
                    </div>
                    <div>
                        <input
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={addUser.password} 
                            onChange={inputChange}
                        />
                        {error ? (<p className="inputError">{error.password}</p>) : null}
                    </div>
                    <div>
                        <input
                            name="url"
                            type="text"
                            placeholder="Url image"
                            value={addUser.url} 
                            onChange={inputChange}
                        />
                        {error ? (<p className="inputError">{error.url}</p>) : null}
                    </div>
                    <div>
                        <select value={addUser.country} onChange={inputChange} >
                            <option value="value">Choose your Country</option>
                            {countries.map((country, index) => <option key={index} value={"value"}>{country}</option>)}
                        </select>
                        {error ? (<p className="inputError">{error.country}</p>) : null}
                    </div>
                    <div className="buttonsForm">
                        <button className="btnForm" onClick={submitData}>Sign Up</button>
                        <button className="btnForm">Sign Up with Google</button>
                    </div>
                </div>
            </form>
                <div>
                    <img src="/assets/signUp.png" alt="usuer"/>
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
