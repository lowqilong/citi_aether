import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Education } from "./pages/Education";
import { Home } from "./pages/Home";
import { Setting } from "./pages/Setting";
import { Navbar } from "./components/index";
import { AllNews } from "./pages/AllNews";
import { Payment } from "./pages/Payment";
import {Footer} from './components/index'

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({signOut}) {
  return (
    <Router>
        <div className="App">
            <Navbar logout={signOut}/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allnews" element={<AllNews />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/education" element={<Education />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/setting" element={<Setting />} />
            </Routes>
            <Footer/>
        </div>
    </Router>
  );
}

export default withAuthenticator(App);
