import React, {useEffect,useState} from 'react';

  const GoodQuotes = () =>{
    const [Quotes, setQuotes] = useState('Stay Home, Stay Safe.');
      useEffect(() =>{
          // setInterval(() =>{
              
          //     fetch('https://type.fit/api/quotes')
          //     .then(res => res.json())
          //     .then(quotes => {
          //       console.log('quotes',quotes)
          //         let randomNum = Math.abs(Math.floor(Math.random() * (1 - quotes.length) + 1));
          //         setQuotes(quotes[randomNum].text)})
          // },5000)
      },[]);

      return (
          <span>{Quotes}</span>
      )
  }

  export default GoodQuotes;