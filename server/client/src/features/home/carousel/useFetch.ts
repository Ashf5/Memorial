
import { useState, useEffect } from 'react';

// import soldier type
import type {Soldier} from '../../../../../src/types/soldierType';

// url api
const APIURLALL = 'https://memorial-zmw1.onrender.com/api/soldiers?limit=10&page='
const APIURLCOUNT = 'https://memorial-zmw1.onrender.com/api/soldiers/count';


// custom hook to fetch soldiers, if has query adds it to the url.
export function useFetch(query:string | undefined) {
    const [soldiers, setSoldiers] = useState<Soldier[]>([]);
    const [loading, setLoading] = useState<boolean>(false)
    const [pages, setPages] = useState<number[]>([])
    const [pageIndex, setPageIndex] = useState(0);

    // create the pages array
        

    // fetch the soldiers
    useEffect(() => {
        setLoading(true)
        // update new pages and pageindex
        fetch(APIURLCOUNT)
            .then(response => response.json())
            .then(data => {
                const shuffled = createShuffledArray(Number(data.count), query ? true : false);
                setPages(shuffled); 
                setPageIndex(0);
                return shuffled})
            .then((shuffled) => fetch(`${APIURLALL}${shuffled[0]}${query ? '&query=' + query : ''}`))
            .then(data => data.json())
            .then(data => {setSoldiers(data); setLoading(false)});
    }, [query,]);

    // function to update next page of soldiers and update page state
    function fetchNext() {
        fetch(`${APIURLALL}${pages[pageIndex + 1]}`).then(data => data.json()).then(data => setSoldiers(data));
        setPageIndex(pageIndex + 1);
    }

    // function to update previous page
    function fetchPrevious() {
        if (pageIndex === 0) {
            return;
        }
        
        fetch(`${APIURLALL}${pages[pageIndex - 1]}`).then(data => data.json()).then(data => setSoldiers(data));
        setPageIndex(pages[pageIndex - 1]);
    }

    return {soldiers, loading, pageIndex, fetchNext, fetchPrevious};
}

const createShuffledArray = (numberSoldiers:number, query:boolean = false) => {
    const limit = Math.ceil(numberSoldiers / 10);
    //make array
    const arr: number[] = [];
    for (let i = 1; i <= limit; i++) {
        arr.push(i);
    }
    if (query) {
        return arr;
    }
    
    // shuffle array 
    for (let i = arr.length -1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    return arr;
}

