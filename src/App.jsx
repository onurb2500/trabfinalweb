import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Store } from "./pages/Store";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Register } from "./pages/Register/Register";
import { Login } from "./pages/Login/Login";
import { AddProduct } from "./pages/AddProduct/AddProduct";

function App() {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          {/* <ProtectedRoute> */}
            <Route path="/add-product" element={<AddProduct />} />
            <Route path="/store" element={<Store />} />
          {/* </ProtectedRoute> */}
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
}

export default App;
