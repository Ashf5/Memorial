import type { Soldier } from "../../../../src/types/soldierType"

type soldierProps = {
    soldier:Soldier
}

const SoldierCard:React.FC<soldierProps> = ({soldier}) => {

    return (
        <div>
            <img src={soldier.image} alt="Picture of soldier" />
            <h3>{soldier.name}, {soldier.age}</h3>
            <p>Fell on: {soldier.dateFell}</p>
            
        </div>
    )
}

export default SoldierCard;