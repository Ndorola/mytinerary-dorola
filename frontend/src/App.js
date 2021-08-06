import "./App.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import NotFound from "./pages/NotFound"

import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom"

const App = () => {
  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Cities" component={Cities}/>
          <Route exact path="/NotFound" component={NotFound}/>
          <Redirect to="/NotFound"/>
        </Switch>
      </BrowserRouter>

    
  )
}

export default App