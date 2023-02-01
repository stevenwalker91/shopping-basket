import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './components/Nav';
import Home from './components/Home';
import Shop from './Shop';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav /> 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
