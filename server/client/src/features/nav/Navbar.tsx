
import { Link } from 'react-router-dom';
import './navbar.css';

const Navbar: React.FC = () => {

    return (
        <>
        <div className="navContainer">
            <div className='logoDiv'>
                <Link to={'/'} id='navTitle'>In Memory</Link>
                <Link to={'/'} id='navAbout'>About</Link>
            </div>
            
            
           <div>
            <a href='/#selectSoldier'><button id='startButton'>Start a good deed</button></a>
           </div>
        </div>
        </>
        
        
    )
}

export default Navbar;