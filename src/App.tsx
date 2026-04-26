import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FloatingWhatsAppButton from './components/FloatingWhatsAppButton/FloatingWhatsAppButton';
import AccessibilityButton from './components/AccessibilityButton/AccessibilityButton';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Treatments from './pages/Treatments/Treatments';
import TreatmentDetail from './pages/TreatmentDetail/TreatmentDetail';
import Testimonials from './pages/Testimonials/Testimonials';
import Products from './pages/Products/Products';
import Questionnaire from './pages/Questionnaire/Questionnaire';
import Contact from './pages/Contact/Contact';
import { useReveal } from './hooks/useReveal';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior }); }, [pathname]);
  return null;
}

export default function App() {
  useReveal();
  return (
    <>
      <Header />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/treatments" element={<Treatments />} />
        <Route path="/treatments/:slug" element={<TreatmentDetail />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/products" element={<Products />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
      <FloatingWhatsAppButton />
      <AccessibilityButton />
    </>
  );
}
