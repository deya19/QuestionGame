import React, { useState } from 'react'
import { useEffect } from 'react';
import useSound from 'use-sound';
import wrong from "../assets/wrong.mp3"


function Timer({setStop,questionNumber}) {
    const [timer,setTimer] = useState(30);
    const [wrongAnswer] = useSound(wrong);
    const delay = (duration , callback) => {
      setTimeout(()=>{
         callback()
      }, duration)
     };

    useEffect(()=>{
        if(timer === 0){
          wrongAnswer();
          delay(1000,()=>{ 
            setStop(true);
          })
        }

    const interval = setInterval(()=>{
    setTimer((prev) => prev - 1);
    },1000);
    return () => clearInterval(interval)
    },[setStop,timer]);

    useEffect(()=>{
    setTimer(30);
    },[questionNumber])

  return timer;
}

export default Timer