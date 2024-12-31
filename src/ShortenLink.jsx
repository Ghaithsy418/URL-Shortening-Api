import axios from "axios"

// eslint-disable-next-line react/prop-types
function ShortenLink({link, setLink}) {

    const handleSubmit = async function(){
        const data = await axios.post("https://www.example.com/my-really-long-link-that-I-need-to-shorten/84378949",link);
        console.log(data);
    }

    return (
        <aside className="shorten-link">
            <input type="text" value={link} onChange={(e)=>setLink(e.target.value)} placeholder="Shorten a link here..." />
            <button type="submit" className="btn" onClick={handleSubmit}>Shorten it!</button>
        </aside>
    )
}

export default ShortenLink
