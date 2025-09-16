import Count from "../home/Count";
import Info from "../home/Info";
import { SelectSoldier } from "../home/SelectSoldier";
import './homepage.css';

const HomePage = () => {
    return (
        <div className="mainContainer">
            <Info />
            <SelectSoldier />
            <Count />
        </div>
        
    )
}

export default HomePage;