import React, { useEffect, useState } from 'react'


function Shortit({setinpValue}) {
    const [userinp,setinp]=useState("");

    function handelchange() {
        setinpValue(userinp);
        setinp("");
        console.log(userinp);
    }
  return (
    
    <div className='Shortner'>
        <div>
        <input type='text' 
        placeholder='Enter The Url'
        value={userinp}
        onChange={e=>setinp(e.target.value)}
        ></input>
        <button onClick={handelchange}>Generate</button>
        </div>
    </div>
    
  )
}

export default Shortit