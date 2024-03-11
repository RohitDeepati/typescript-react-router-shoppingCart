// context imports
import { ShoppingCartProvider } from "./context/ShoppingCartContext";


// react-router imports
import { Route, Routes } from "react-router-dom";

// bootstrap-library imports
import { Container } from "react-bootstrap";

// pages imports
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";
import { About } from "./pages/About";

// components imports
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
