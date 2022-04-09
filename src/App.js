import './App.css';
import {
  BrowserRouter as Routes,
  
  Route,
  Navigate,
} from "react-router-dom";

import Home from "./components/Home";
import Register from "./components/Register";

function App() {
  return (
    <>
    <Routes>
      
        <Route exact path="/" element ={Home}/>
        <Route path ="/Register" element ={ Register}/>
        <Navigate to ="/" replace={true} />
      
        </Routes>
    </>

    
  );
}

export default App;
