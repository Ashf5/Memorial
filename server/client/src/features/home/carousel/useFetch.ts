
import { useState, useEffect } from 'react';

// import soldier type
import type {Soldier} from '../../../../../src/types/soldierType';

// url api
const APIURLALL = 'https://memorial-zmw1.onrender.com/api/soldiers?limit=10&page='


// custom hook to fetch soldiers, if has query adds it to the url.
export function useFetch(query:string | undefined) {
    const [soldiers, setSoldiers] = useState<Soldier[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [page, setPage] = useState(1);

    // fetch the soldiers
    useEffect(() => {
        setLoading(true)
        fetch(`${APIURLALL}${page}${query ? '&query=' + query : ''}`).then(data => data.json()).then(data => {setSoldiers(data); setLoading(false)});
    }, [query,]);

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

    return {soldiers, loading, fetchNext, fetchPrevious};
}