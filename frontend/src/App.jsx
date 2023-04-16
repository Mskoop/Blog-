import { useState, useEffect } from 'react'
//Library import
import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'

//==> hier müsste ein Fetch geschrieben werden, um aus dem Backend die Daten zu erhalten - und im  RETURN wird die Änderungsfunktion SET... aus einem USeSTate als Datenziel angegeben 

//import Pages
import AdminPage from "./pages/AdminPage.jsx"
import DetailPage from "./pages/DetailPage.jsx"
import LandingPage from "./pages/LandingPage.jsx"

function App() {
  //const [count, setCount] = useState(0)
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/detail/:id" element={<DetailPage/>}/>
      <Route path="/admin" element={<AdminPage/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
