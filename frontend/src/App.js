import "./App.css"
import Home from "./pages/Home"
import Cities from "./pages/Cities"
import City from "./pages/City"
import NotFound from "./pages/NotFound"
import {BrowserRouter, Redirect, Route, Switch,} from "react-router-dom"

const App = () => {

  return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/Cities" component={Cities}/>
          <Route path="/City/:id" component={City}/>
          <Route path="/NotFound" component={NotFound}/>
          <Redirect to="/NotFound"/>
        </Switch>
      </BrowserRouter>
  )
}

export default App