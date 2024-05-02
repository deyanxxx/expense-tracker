import Home from "./pages/Home";
import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Overview from "./pages/Overview";


function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/overview" element={<Overview/>} />
        </Routes>
      </Router>
  );
}

export default App;
