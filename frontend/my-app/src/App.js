import './App.css';
import { Navbar, Home, About, News, Footer } from "./components/index"
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App({ signOut, user }) {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <News />
      <Footer />
    </div>
  );
}

export default App;
