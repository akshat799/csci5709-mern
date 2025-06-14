import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './pages/Home/home';
import Product from './pages/Product/Product';
import Contact from './pages/Contact/Contact';

import { ToastContainer } from  'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Signup from './pages/Auths/Signup';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/products" element={<Product></Product>}></Route>
        <Route path="/contacts" element={<Contact></Contact>}></Route>
        <Route path="/register" element={<Signup />}></Route>
      </Routes>
    </Router>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
    />
    </>
  )
}

export default App
