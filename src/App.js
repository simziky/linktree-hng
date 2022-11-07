import { Routes, Route } from "react-router-dom";
import Contact from "./pages/contact/contact";
import Home from "./pages/home/linkTree";


function App() {
    return (
      <div className="App">
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Contact" element={<Contact />} />
      </Routes>
      </div>
    );
  }
  
  export default App;