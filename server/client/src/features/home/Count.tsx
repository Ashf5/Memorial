import { useEffect, useState } from "react";

const APIURL = 'https://memorial-zmw1.onrender.com/api/deeds';

const Count: React.FC = () => {
    const [count, setCount] = useState<undefined|number>();
    const [loading, setLoading] = useState<boolean>(false);
    useEffect(() => {
        const fetchCount = async () => {
            setLoading(true);
            try {
                const response = await fetch(APIURL);
                const data = await response.json();
                setCount(Number(data.count));
                setLoading(false);
            }
            catch(e) {

            }
            
        }
        fetchCount();
    }, [])

    if (loading) {
        return (<div className="counterDiv">
            <h3>Total Good Deeds</h3>
            <h3>Loading....</h3>
        </div>)
    }

    return (
        <div className="counterDiv">
            <h3>Total Good Deeds</h3>
            <h3>{count || 'Error Fetching Count'}</h3>
        </div>
    )
}

export default Count;