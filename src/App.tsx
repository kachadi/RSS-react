import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Component } from 'react';
import './App.css';
import Main from './components/pages/Main';
import AboutUs from './components/pages/AboutUs';
import NotFound from './components/pages/NotFound';
import Header from './components/header/Header';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Main />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
