
import { Route, Routes } from 'react-router-dom'
import './App.css';
import SoldierPage from './features/pages/SoldierPage';
import HomePage from './features/pages/HomePage';

function App() {

  return (
    <div className='rootContainer'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:id' element={<SoldierPage />} />
      </Routes>
      
        
    </div>
  )
}

export default App
