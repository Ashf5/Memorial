import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import type{ Soldier } from "../../../../src/types/soldierType";
import SoldierCard from "../tribute/SoldierCard";
import DeedForm from "../tribute/DeedForm";
import './soldierpage.css';

const APIURL = 'https://memorial-zmw1.onrender.com/api/soldiers/';

const SoldierPage = () => {
    const {id} = useParams();
    const [soldier, setSoldier] = useState<undefined | Soldier>();

    useEffect(() => {
        fetch(APIURL + id).then(data => data.json()).then(data => setSoldier(data))
    }, [])

    if (soldier){
        return (
            
                // <div className="soldierPageContainer">
                <div className='mainContainer'>
                    <SoldierCard soldier={soldier}/>
                    <br />
                    <DeedForm soldier={soldier}/>
                </div>
            
            
        )
    }else {
        return <div>Loading....</div>
    }
}

export default SoldierPage;