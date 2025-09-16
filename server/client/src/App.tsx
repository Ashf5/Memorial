
import { Route, Routes, useLocation } from 'react-router-dom'
import './App.css';
import SoldierPage from './features/pages/SoldierPage';
import HomePage from './features/pages/HomePage';
import Confirmation from './features/pages/confirmationPage';
import Navbar from './features/nav/Navbar';

function App() {

  const location = useLocation();
  const hideNavbar = location.pathname.startsWith('/confirmation');

  return (
    <div className='rootContainer'>
      {!hideNavbar && <Navbar />}
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<SoldierPage />} />
        <Route path='/confirmation/:id' element={<Confirmation />} />
      </Routes>
      
        
    </div>
  )
}

export default App
