import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Register from "../components/Register.jsx"

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/register" element={<Register/>}/>
    </Routes>
  </BrowserRouter>
)
