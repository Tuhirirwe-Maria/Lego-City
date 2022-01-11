import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Components/Home';
import Legos  from "./Pages/Legos";



function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
        <Route path="/legos" element={<Legos/>} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
