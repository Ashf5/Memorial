
import { Route, Routes } from 'react-router-dom'
import './App.css';
import SoldierPage from './features/pages/SoldierPage';
import HomePage from './features/pages/HomePage';
import Confirmation from './features/pages/confirmationPage';

function App() {

  return (
    <div className='rootContainer'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<SoldierPage />} />
        <Route path='/confirmation/:id' element={<Confirmation />} />
      </Routes>
      
        
    </div>
  )
}

export default App
