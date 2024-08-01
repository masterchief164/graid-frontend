import { HashRouter as BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'
import {GoogleLogin} from "./Pages/GoogleLogin.tsx";

function App() {
  return (
      <>
          <div className="home">
              <BrowserRouter>
                      <Routes>
                          <Route path="/" element={<GoogleLogin/>}/>
                          <Route path="/login/google" element={<GoogleLogin/>}/>
                      </Routes>
              </BrowserRouter>
          </div>
      </>
  )
}

export default App
