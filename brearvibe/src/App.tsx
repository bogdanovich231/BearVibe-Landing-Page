import Header from './Components/Header/Header';
import './App.scss';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Menu from './Pages/Menu/Menu';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ErrorPage from './Components/404/ErrorPage';
import ContactPage from './Pages/Contact/ContactPage';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
import CateringPage from './Pages/Catering/CateringPage';
import CoworkingPage from './Pages/Coworking/CoworkingPage';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="contact-forms" element={<ContactPage />} />
          <Route path="about" element={<About />} />
          <Route path="menu" element={<Menu />} />
          <Route path="catering" element={<CateringPage />} />
          <Route path="coworking-space" element={<CoworkingPage />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
