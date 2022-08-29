import React from 'react'
import { useRef } from 'react'
import "./Start.css"
import play from "../assets/play.mp3"
import useSound from 'use-sound';

function Start({setUsername}) {
    const [letsPlay] = useSound(play);
    const inputRef = useRef();

    const handleClick = () =>{
      inputRef.current.value && setUsername(inputRef.current.value);
      inputRef.current.value && letsPlay();
    }


  return (
    <div className="start">
        <input
         placeholder='Enter Your Name'
          className='startInput'
          ref={inputRef}/>
        <button className='startButton' onClick={handleClick}>Start</button>
    </div>
  )
}

export default Start
