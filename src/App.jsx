import { Routes, Route } from "react-router-dom"

import NavbarComponent from "./components/NavbarComponent"
import FooterComponent from "./components/FooterComponent"


import HomePage from "./pages/HomePage"
import KelasPage from "./pages/KelasPage"
import TestimoniPage from "./pages/TestimoniPage"
import SyaratPage from "./pages/SyaratPage"
import FaqPage from "./pages/FaqPage"
import LoginSignUp from "./pages/loginSignUp"
import MasukPage from "./pages/MasukPage"

function App() {
  return <div>
    <NavbarComponent/>

    <Routes>
      <Route path="/" Component={HomePage} />
      <Route path="/kelas" Component={KelasPage} />
      <Route path="/testimonial" Component={TestimoniPage} />
      <Route path="/faq" Component={FaqPage} />
      <Route path="/syarat" Component={SyaratPage} />
      <Route path="/daftar" Component={LoginSignUp} />
      <Route path="/login" Component={MasukPage} />
    </Routes>

    <FooterComponent/>
  </div>
}

export default App

