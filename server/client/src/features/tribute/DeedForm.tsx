
import { useNavigate } from "react-router-dom";
import type { Soldier } from "../../../../src/types/soldierType";

const APIURL = 'https://memorial-zmw1.onrender.com/api/deeds';

type formProps = {
    soldier:Soldier
}

const DeedForm: React.FC<formProps> = ({soldier}) => {
    const navigate = useNavigate();

    // Creates new good deed
    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const deed = formData.get('deed');
        const other = formData.get('other');

        if (!deed && !other) {
            alert('Please choose an option!');
            return;
        }

        // set body, add either deed or other field, as you can only do one deed at a time
        const body = deed ? JSON.stringify({deed: deed, soldier_id: soldier.id, email: email}) : JSON.stringify({deed: other, soldier_id: soldier.id, email: email});

        const response = await fetch(APIURL, {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json',
            },
            body
        });

        if (response.status === 200) {
            alert('Thank You!')
        }
        else {
            alert('An error occured')
        }

        navigate('/');


    }

    return (
        <>
            
            <form onSubmit={handleSubmit}>
                <h3>Good Deeds</h3>
                <label><input type="radio" name="deed" value='smile' />Give a stranger a genuine smile</label> <br/>
                <label><input type="radio" name="deed" value='help-friend' />Help a friend / stranger</label> <br/>
                <label><input type="radio" name="deed" value='charity' />Give Some Charity</label> <br/>
                <label><input type="radio" name="deed" value='candles' />Light Shabbat Candles</label> <br/>
                <label><input type="radio" name="deed" value='tefillin' />Lay Tefillin</label> <br/>
                <label><input type="radio" name="deed" value='torah' />Learn Some Torah</label> <br/>
                <label>Other: <input type="text" name="other" /></label><br /><br />
                <label><input type="email" name="email" />Your Email (optional)</label>
                <input type="submit" />
            </form>
        </>
        
    )
}

export default DeedForm;