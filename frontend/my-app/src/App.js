import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Dashboard } from "./pages/Dashboard";
import { Education } from "./pages/Education";
import { Home } from "./pages/Home";
import { Setting } from "./pages/Setting";
import { Navbar } from "./components/index";
import {AllNews} from "./pages/AllNews";

import Content from './components/news/Content';

import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';


import awsExports from './aws-exports';
Amplify.configure(awsExports);

function App({signOut}) {
  return (
    <Router>
        <div className="App">
        <button onClick={signOut}>Sign out</button>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/allnews" element={<AllNews />} />
                <Route path="/allnews/content" element={<Content />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/education" element={<Education />} />
                <Route path="/setting" element={<Setting />} />
            </Routes>
        </div>
    </Router>
  );
}

export default withAuthenticator(App);
