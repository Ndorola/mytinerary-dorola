import "./App.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import City from "./pages/City"
import NotFound from "./pages/NotFound"
import {BrowserRouter, Redirect, Route, Switch,} from "react-router-dom"
import SignUp from "./components/SignUp"

const App = () => {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/cities" component={Cities}/>
          <Route path="/city/:id" component={City}/>
          <Route path="/signup" component={SignUp}/>
          <Route path="/notfound" component={NotFound}/>
          <Redirect to="/notfound"/>
        </Switch>
      </BrowserRouter>
  )
}

export default App