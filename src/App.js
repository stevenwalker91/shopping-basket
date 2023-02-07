import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './components/Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/shopping-basket'>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:category" element={<Shop />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
