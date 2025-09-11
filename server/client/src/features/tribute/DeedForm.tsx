

const DeedForm: React.FC = () => {

    return (
        <>
            
            <form>
                <h3>Good Deeds</h3>
                <label><input type="radio" name="deed" value='smile' />Give a stranger a genuine smile</label> <br/>
                <label><input type="radio" name="deed" value='help-friend' />Help a friend / stranger</label> <br/>
                <label><input type="radio" name="deed" value='charity' />Give Some Charity</label> <br/>
                <label><input type="radio" name="deed" value='candles' />Light Shabbat Candles</label> <br/>
                <label><input type="radio" name="deed" value='tefillin' />Lay Tefillin</label> <br/>
                <label><input type="radio" name="deed" value='torah' />Learn Some Torah</label> <br/>
                <label>Other: <input type="text" name="other" /></label><br />
                <input type="submit" />
            </form>
        </>
        
    )
}

export default DeedForm;