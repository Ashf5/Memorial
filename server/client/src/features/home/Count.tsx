import { useEffect, useState } from "react";

const APIURL = 'https://memorial-zmw1.onrender.com/api/deeds';

const Count: React.FC = () => {
    const [count, setCount] = useState<undefined|number>()
    useEffect(() => {
        const fetchCount = async () => {
            try {
                const response = await fetch(APIURL);
                const data = await response.json();
                setCount(Number(data.count));
            }
            catch(e) {

            }
            
        }
        fetchCount();
    }, [])

    return (
        <div className="counterDiv">
            <h3>Total Good Deeds</h3>
            <h3>{count || 'Error Fetching Count'}</h3>
        </div>
    )
}

export default Count;