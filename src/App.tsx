import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import BlogPage from "./pages/BlogPage";
import BlogPost from "./pages/BlogPost";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";

// Scroll to hash if present
function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1); // remove the '#' character
      const element = document.getElementById(id);
      if (element) {
        // Add a slight delay to ensure the DOM is fully loaded
        setTimeout(() => {
          // Get the element's position
          const elementPosition = element.getBoundingClientRect().top;
          // Get the current scroll position
          // For appointment section, give more space at the top
          const topOffset = id === "appointment-section" ? 120 : 100;
          const offsetPosition =
            elementPosition + window.pageYOffset - topOffset;

          // Scroll to the element with the offset
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navigation />
        <ScrollToHash />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
