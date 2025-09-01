
import { useState, useEffect } from 'react';
// import soldier type
import type {Soldier} from '../../../../../src/types/soldierType';

const APIURLALL = 'https://memorial-zmw1.onrender.com/api/soldiers?page='


// custom hook to fetch soldiers
export function useFetch() {
    const [soldiers, setSoldiers] = useState<Soldier[]>([]);
    const [page, setPage] = useState(1);

    // fetch the soldiers
    useEffect(() => {
        fetch(`${APIURLALL}${page}`).then(data => data.json()).then(data => setSoldiers(data));
        setPage(page + 1);
    }, []);

    return {soldiers};
}