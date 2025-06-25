import Admin from "../Pages/Admin/Admin";
import Landing from "../Pages/Landing/Landing"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"

const Rotas = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Router>
  )
}

export default Rotas;
