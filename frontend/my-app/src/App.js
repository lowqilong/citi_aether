import './App.css';
import {Navbar, Home, About, News, Footer} from "./components/index"

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home/>
      <About/>
      <News/>
      <Footer/>
    </div>
  );
}

export default App;
