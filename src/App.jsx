import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import 首页 from './pages/首页'
import Works from './pages/Works'
import WorkDetail from './pages/WorkDetail'

function App() {
  return (<Router><Navbar /><Routes><Route path="/" element={<首页 />} /><Route path="/works" element={<Works />} /><Route path="/works/:id" element={<WorkDetail />} /></Routes></Router>)
}

export default App