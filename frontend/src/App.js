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

const App = (props) => {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cities" component={Cities}/>
          <Route path="/city/:id" component={City}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/signin" component={SignIn}/>
          <Route path="/notfound" component={NotFound}/>
          <Redirect to="/notfound"/>
        </Switch>
      </BrowserRouter>
  )
}

const mapDispatchToProps = {
  signIn: userActions.logIn
}

export default connect(null, mapDispatchToProps) (App)