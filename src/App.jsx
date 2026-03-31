import { useLocation, Routes, Route } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import './App.css'
import Header from './Components/Header/Header';
import MainSection from './Components/MainSection/MainSection';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import Footer from './Components/Footer/Footer';

function AnimatedRoute() {
  const location = useLocation()

  return (
    <AnimatePresence mode='wait'>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={
          <PageWrapper>
            <MainSection/>
            <Footer/>
          </PageWrapper>
        }/>
        <Route path='/portfolio' element={
          <PageWrapper>
            <Portfolio/>
            <Footer/>
          </PageWrapper>
        }/>
        <Route path='/contact' element={
          <PageWrapper>
            <Contact/>
            <Footer/>
          </PageWrapper>
        }/>
      </Routes>
    </AnimatePresence>
  )
}

function PageWrapper({ children }) {
  return (
    <motion.div
      initial = {{ opacity: 0, x: 1500}}
      animate = {{ opacity: 1, x: 0 }}
      exit = {{ opacity: 0, x: -1500 }}
      transition = {{ duration: 0.3 }}
    >
      {children}
    </motion.div>

  )
}

function App() {

  return (
    <>
      <Header />
      <AnimatedRoute />
    </>
  )
}

export default App
