import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<MainSection/>} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<div>Puslapis nerastas</div>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
