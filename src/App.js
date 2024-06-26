import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Nav from './component/nav/nav';
import Home from './pages/Home';
import Explore from './component/explore/explore';
import Upload from './component/upload/upload';


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/create' element={<Upload/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
