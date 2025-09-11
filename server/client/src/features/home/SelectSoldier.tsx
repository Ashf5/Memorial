import { useState } from "react"
import CarouselElement from "./carousel/Carousel"


export const SelectSoldier: React.FC = () => {

    const [query, setQuery] = useState<undefined | string>();

    return (
        <div>
            <input type="text" name="search" placeholder="Search Soldiers" onChange={(e) => setQuery(e.target.value)}/>
            <br />
            <br />
            <CarouselElement query={query}/>
        </div>
    )
}