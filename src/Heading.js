import React from 'react'
import Typewriter from "typewriter-effect";
function Heading() {
  return (
    <div className='type-cursor'>
        <Typewriter
        options={{
          strings: ['UniformResourceLocator Shortner', 'URL sHORTNER'],
          autoStart: true,
          loop: true,
        }}
        />
    </div>
  )
}

export default Heading