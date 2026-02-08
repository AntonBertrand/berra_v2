import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Contact from "./pages/Contact.tsx";
import Services from "./pages/Services.tsx";
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";
import { Header } from "./components/Header.tsx";
import { Footer } from "./components/Footer.tsx";

import "./App.css";

function App() {
  return (
    <>
      <Theme>
        <Router>
          <div>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
            </Routes>
            <Footer />
          </div>
        </Router>
      </Theme>
    </>
  );
}

export default App;
