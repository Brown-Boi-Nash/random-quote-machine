import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import "./Quote.scss";

const Quote = () => {

    const [data, setData] = useState({"_id":"rF6UYZ9W4T","tags":["friendship"],"content":"False friendship, like the ivy, decays and ruins the walls it embraces; but true friendship gives new life and animation to the object it supports.","author":"Richard Burton","authorSlug":"richard-burton","length":147,"dateAdded":"2019-12-14","dateModified":"2019-12-14"});
    async function getQuote() {
        const response = await fetch('https://api.quotable.io/random');
        const details = await response.json();
        setData(details);

    }

    return(<div className="quote-box">
        <h2 className='quote-text'>{data.content}</h2>
        <h3 className='quote-author'>-{data.author}</h3>
        <div className='buttons'>
        <button className='button new-quote' onClick={getQuote}>New Quote</button>
        <a className='button tweet-quote' href={`https://twitter.com/intent/tweet?text=${data.content}--${data.author}`}><FontAwesomeIcon icon={faTwitterSquare} size="lg"/></a>
        </div>
        
    </div>
    )

};

export default Quote;