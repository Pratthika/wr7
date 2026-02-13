import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Forum from './components/Forum';
import Header from './components/Header';
import Footer from './components/Footer';
import Buy from './components/Buy';
import BookDetails from './components/BookDetails';
import Borrow from './components/Borrow';
import BorrowDetails from './components/BorrowDetails'; // Import the BorrowDetails component
import Cart from './components/Cart';
import Ask from './components/Ask';
import Post from './components/Post';
import Lend from './components/Lend';
import Sell from './components/Sell';
import BookUpload from './components/BookUpload';
import Categories from './components/Categories';
import FormatPage from './components/FormatPage';
import GenrePage from './components/GenrePage';
import Explore from './components/Explore';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/book/:id" element={<BookDetails />} />
          <Route path="/borrow" element={<Borrow />} />
          <Route path="/borrow/book/:id" element={<BorrowDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/post" element={<Post />} />
          <Route path="/lend" element={<Lend />} />
          <Route path="/lend/book/:bookId" element={<BookUpload />} />
          <Route path="/sell" element={<Sell />} />
          <Route path="/sell/book/:bookId" element={<BookUpload />} />
          <Route path="/upload/:bookId" element={<BookUpload />} />
          <Route path="/categories" element={<Categories />} />
        <Route path="/formats/:option" element={<FormatPage />} />
        <Route path="/genres/:option" element={<GenrePage />} />
        <Route path='/explore' element={<Explore/>} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
