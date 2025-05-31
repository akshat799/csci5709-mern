import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home/Home';
import Product from './pages/Product/Product';
import Contact from './pages/Contact/Contact';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Product></Product>}></Route>
        <Route path="/contacts" element={<Contact></Contact>}></Route>
      </Routes>
    </Router>
    </>
  )
}

export default App
