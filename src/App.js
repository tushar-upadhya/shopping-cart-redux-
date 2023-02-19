import Header from "./components/Header";
import Cards from "./components/Cart";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardDetails from "./components/CardDetails";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Cards />} />
                <Route path="/cart/:id" element={<CardDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
