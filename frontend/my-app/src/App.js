import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Education } from "./pages/Education";
import { Home } from "./pages/Home";
import { Setting } from "./pages/Setting";
import { Navbar } from "./components/index";
import { SignIn } from "./pages/SignIn";
import { Register } from "./pages/Register";
import {AllNews} from "./pages/AllNews";
import Content from './components/news/Content';

function App() {
  return (
    <Router>
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allnews" element={<AllNews />} />
                <Route path="/allnews/content" element={<Content />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/education" element={<Education />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    </Router>
  );
}

export default App;
