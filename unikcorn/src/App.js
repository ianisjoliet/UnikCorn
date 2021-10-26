import './App.css';
import Navbar from './pages/Navbar/Navbar';
import Home from './pages/Home/Home';
import Roadmap from './pages/Roadmap/Roadmap';
import Footer from './pages/Footer/Footer';
import Faq from './pages/Faq/Faq';


import { BrowserRouter as Router} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Home />
      <Roadmap />
      <Faq />
      <Footer />
    </Router>
  );
}

export default App;
