import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Add from "./pages/Add";

import Employee from "./pages/Employee";
import "./style.css"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employee/>}></Route>
        <Route path="/add" element={<Add/>}></Route>
       
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
