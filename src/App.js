
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from "./Pages/Home"
import NoPage from "./Pages/NoPage"
import Footer from './components/Footer';
import Navv from "./components/Navv";
import Navbarr from "./components/Navbarr";
function App() {
  return (
   <BrowserRouter > 
   <Container fluid className="bg-light container-1" >
   <header >
    <Container className="header-container">
    <Navbarr/>   
    <Navv />
    </Container>
   </header>
   </Container>
   <main>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<NoPage />}/>
    </Routes>
   </main>

   <footer>
    <Footer />
   </footer>


   </BrowserRouter>
  );
}

export default App;
