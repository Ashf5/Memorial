import { Link, useParams } from "react-router-dom";
import './confirmationPage.css'

const Confirmation: React.FC = () => {

    const {id} = useParams();

    return (
        <div className='mainContainer smallerContainerItem'>
            <h1>Thank you for your submission</h1>
            <p>Your good deed has been successfully submitted. We appreciate your contribution to honoring our fallen soldiers.</p>

            <div>
                <Link to={`/${id}`}><button id="soldierpageButton">Return to Soldier's Page</button></Link>  
                <Link to={'/'}><button id="homepageButton">Return to Homepage</button></Link>
            </div>
            
        </div>

    )
}

export default Confirmation;