
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import CardInfo from "./components/CardInfo/CardInfo"
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"


function App() {
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<CardInfo />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </Router>
);
}

export default App;
