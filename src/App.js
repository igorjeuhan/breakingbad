import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card';
import Loader from './components/Loader';
import './App.css';

function App() {
  const [quotes, setQuotes] = useState(null);

  useEffect(() => {
    async function getData() {
      const response = await axios.get(
        'https://www.breakingbadapi.com/api/quotes',
      );
      setQuotes(response.data);
    }
    getData();
  }, []);

  if (quotes === null) {
    return <Loader></Loader>;
  }
  return (
    <>
      <h1>Breaking Bad API - Quotes</h1>
      <div className="flex">
        {quotes.map((q) => (
          <Card key={q.quote_id} qData={q}></Card>
        ))}
      </div>
    </>
  );
}

export default App;
