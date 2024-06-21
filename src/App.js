import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Nav from './component/nav/nav';
import Home from './pages/Home';


function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route exact={true} path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
