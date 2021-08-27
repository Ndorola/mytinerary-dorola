import "./App.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import City from "./pages/City"
import NotFound from "./pages/NotFound"
import {BrowserRouter, Redirect, Route, Switch,} from "react-router-dom"
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import { connect } from "react-redux";
import userActions from "./redux/actions/usersActions"
import { useEffect } from "react"

const App = (props) => {

  useEffect(() => {
    if(localStorage.getItem('token')) {
      props.signInLS(localStorage.getItem('token'), localStorage.getItem('name'), localStorage.getItem('url'))
    }
  } ,[])

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cities" component={Cities}/>
          <Route path="/city/:id" component={City}/>
          {!props.token && <Route path="/signup" component={SignUp}/>}
          {!props.token && <Route path="/signin" component={SignIn}/>}
          <Route path="/notfound" component={NotFound}/>
          {props.token ? <Redirect to="/"/> : <Redirect to="/notfound"/> }
        </Switch>
      </BrowserRouter>
  )
}


const mapStateToProps = state => {
  return {
      token: state.users.token
  }
}

const mapDispatchToProps = {
  signInLS: userActions.signInLS
}

export default connect(mapStateToProps , mapDispatchToProps) (App)