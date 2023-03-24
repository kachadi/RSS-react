import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { PureComponent } from 'react';
import './App.css';
import Main from './components/pages/Main';
import AboutUs from './components/pages/AboutUs';
import NotFound from './components/pages/NotFound';
import Header from './components/header/Header';
import AddNewWord from './components/pages/AddNewWord';

class App extends PureComponent {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <Routes>
          <Route index element={<Main />} />
          <Route path='about-us' element={<AboutUs />} />
          <Route path='new-word' element={<AddNewWord />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
