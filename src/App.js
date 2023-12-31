import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    
      <Router>
      <div className="App">
        <Header />
        
        <Routes>
          <Route exact path="/" element={<Home/>} />    
          <Route exact path="/about" element={<About/>} />    
          <Route exact path="/contact" element={<Contact/>} />    
        </Routes>
        <Footer />
      </div>
      </Router>
    
  );
}

export default App;
