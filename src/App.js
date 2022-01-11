import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home';
import {Legos}  from "./Pages/Legos";


function App() {
  return (
    <div className="App">
    <Router>
      <Switch>
     <Route path ="/" exact component={Home} />
     <Legos/>
     </Switch>
    </Router>
    </div>
  );
}

export default App;
