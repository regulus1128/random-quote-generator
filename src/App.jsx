import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [quotes, setQuotes] = useState({})
  const [cat, setCat] = useState("");
  // API KEY: cEznKOMLcihr2GNWpuVXFw==gciapJIKIVwzjgEh

  const getQuote = async (category) => {
    const url = `https://api.api-ninjas.com/v1/quotes?category=${category}`;
    const response =  await fetch((url), {method: 'GET', 
    headers: {
      'X-Api-Key': 'cEznKOMLcihr2GNWpuVXFw==gciapJIKIVwzjgEh',
      'Content-Type': 'application/json'
  }});

    if(!response.ok){
      console.log(error);
    }
    const data = await response.json();
    console.log(data);
    setQuotes({
      author: data[0].author,
      quote: data[0].quote
    })
  }



  useEffect(() => {
    getQuote(cat);
  }, [cat])

  return (
    <>
    {/* <div className="search">
      <input type="text" value={cat} placeholder='Enter a category...' onChange={(e) => setCat(e.target.value)}/> */}
      {/* <button onClick={() => getQuote(cat)}>Search</button> */}

      <div className="container">
        <div className="main">

        <p className="quote">
          "{quotes.quote}"
        </p>
        <p className='author'>
          - {quotes.author}
        </p>
        </div>
        <div className="footer">
          
          <button className='btn' onClick={() => getQuote(cat)}>GENERATE A RANDOM QUOTE!</button>
        </div>
      </div>
    </>
  )
}

export default App
