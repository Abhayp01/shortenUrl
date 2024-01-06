import axios from 'axios'
import React, { useEffect, useState } from 'react'


function GenerateResut({inpvalue}) {
    const [ShortenUrl,setShorten]=useState("The Shortened Link will be displayed here");
    const fetchData=async()=>{
        try {
            const res= await axios(`https://api.shrtco.de/v2/shorten?url=${inpvalue}`);
            setShorten(res.data.result.full_short_link);
        } catch (error) {
          console.log(error);
        }
      
    }
useEffect(()=>{
  if(inpvalue.length){
    fetchData();
  }

},[inpvalue]);

  return (
    <>
    {
      ShortenUrl && (<div className='Gen'>
      <p>{ShortenUrl}</p>
  </div>)
    }
    </>
  )
}

export default GenerateResut