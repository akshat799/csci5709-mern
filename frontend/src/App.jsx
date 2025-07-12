import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';
import Header from './components/Header';
import ProductRoute from './components/ProductRoute';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ToastContainer } from 'react-bootstrap';
import 'react-toastify/dist/ReactToastify.css';

const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Products/Product'));
const Contact = lazy(() => import('./pages/Contact'));
const Signup = lazy(() => import('./pages/Auths/Signup'));
const Login = lazy(() => import('./pages/Auths/Login'));

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" component={App}>
              <Route index element={<Home />} />
              <Route path="/product" element={
                <ProductRoute>
                  <Product />
                </ProductRoute>
              } />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Signup />} />
              <Route path="/login" element={<Login />} />
            </Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
      <ToastContainer position="top-right" />
    </>
  )
}

export default App