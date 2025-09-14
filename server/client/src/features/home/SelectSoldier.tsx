import { useEffect, useState } from "react"
import CarouselElement from "./carousel/Carousel"


export const SelectSoldier: React.FC = () => {

    const [query, setQuery] = useState<undefined | string>();
    const [debounced, setDebounced] = useState<undefined | string>();

    // use Effect to debounce
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebounced(query);
        }, 600);

        // clear if changes too fast
        return () => clearTimeout(handler);
    }, [query,])

    return (
        <div className="selectArea">
            <input type="text" name="search" placeholder="Search Soldiers" onChange={(e) => setQuery(e.target.value)}/>
            <br />
            <br />
            <CarouselElement query={debounced}/>
        </div>
    )
}