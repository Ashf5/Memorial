
import backgroundImage from '../../assets/background.png';

const Info: React.FC = () => {

    return (
        <div className="info__card">
            <img src={backgroundImage} alt="background image" id="background-image"/>
            <div className='info__overlay'>
                <h3 className="info__text">Honor Their Sacrifice</h3>
                <p className="info__text">Honor the fallen of "Iron Swords" by performing good deeds in their memory. Every act of kindness helps keep their legacy alive.</p>
            </div>
            
        </div>
    )
}

export default Info;