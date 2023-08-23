import logo from './logo.svg';
import './App.css';
import SideMenu from './Components/SideMenu';
import Header from './Components/Header';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Components/Home';

function App() {
  return (
    <Router>
        <div className="App">
          <Header />
          <SideMenu />

          <Routes>
            <Route path="/" element={<Home  />} />
            <Route path="/" element={<Home  />} />

          </Routes>
        </div>

    </Router>

  );

}

export default App;
