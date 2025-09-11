
import { useState, useEffect } from 'react';

// import soldier type
import type {Soldier} from '../../../../../src/types/soldierType';

// url api
const APIURLALL = 'https://memorial-zmw1.onrender.com/api/soldiers?limit=10&page='


// custom hook to fetch soldiers
export function useFetch() {
    const [soldiers, setSoldiers] = useState<Soldier[]>([]);
    const [page, setPage] = useState(1);

    // fetch the soldiers
    useEffect(() => {
        fetch(`${APIURLALL}${page}`).then(data => data.json()).then(data => setSoldiers(data));
    }, []);

    // function to update next page of soldiers and update page state
    function fetchNext() {
        fetch(`${APIURLALL}${page + 1}`).then(data => data.json()).then(data => setSoldiers(data));
        setPage(page + 1);
    }

    // function to update previous page
    function fetchPrevious() {
        if (page === 1) {
            return;
        }
        
        fetch(`${APIURLALL}${page - 1}`).then(data => data.json()).then(data => setSoldiers(data));
        setPage(page - 1);
    }

    return {soldiers, page, fetchNext, fetchPrevious};
}