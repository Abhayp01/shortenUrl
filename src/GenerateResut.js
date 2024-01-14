import axios from 'axios';
import React, { useEffect, useState } from 'react';

function GenerateResult({ inpvalue }) {
  const [shortenUrl, setShorten] = useState("The Shortened Link will be displayed here");

  const fetchData = async () => {
    try {
      const res = await axios.post('http://localhost:5000/api/shorten', {
        originalUrl: inpvalue,
      });

      setShorten(res.data.shortUrl);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (inpvalue.length) {
      fetchData();
    }
  }, [inpvalue]);

  return (
    <>
      {shortenUrl && (
        <div className='Gen'>
          <p>{shortenUrl}</p>
        </div>
      )}
    </>
  );
}

export default GenerateResult;
