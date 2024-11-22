import './App.css'

import Dashboard from './pages/Dashboard';
import Homepage from './pages/Homepage'
import Login from './pages/Login';
import Register from './pages/Register';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  return (
    <div className='App'>
      {/* <h1>Hello World!</h1> */}
      <BrowserRouter>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
