import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'
import "./Trivia.css"
import useSound from 'use-sound';
import correct from "../assets/correct.mp3"
import wrong from "../assets/wrong.mp3"

function Trivia({data,setStop,setQuestionNumber,questionNumber,setEarned }) {

    const [question,setQuestion] = useState(null);
    const [selectAnswer,setSelectAnswer] = useState(null);
    const [className,setClassName] = useState("answer");
    const [correctAnswer] = useSound(correct);
    const [wrongAnswer] = useSound(wrong);

    
    useEffect(()=>{
      setQuestion(data[questionNumber - 1])
    },[data,questionNumber]);

    const delay = (duration , callback) => {
     setTimeout(()=>{
        callback()
     }, duration)
    };

    const handleClick = (a) =>{
     setSelectAnswer(a);
     setClassName("answer active");
     delay(3000,()=> 
     setClassName(a.correct ? "answer correct": "answer wrong"));

     delay(5000,()=>{
     if(a.correct && questionNumber<15){
      correctAnswer();
      delay(1000,() =>{
        setQuestionNumber((prev) => prev + 1);
        setSelectAnswer(null);
      });
     }else if(a.correct && questionNumber === 15){
      correctAnswer();
      delay(1000,()=>{
      setStop(true);
      setEarned("1000000")
     })
     }else{
      wrongAnswer();
      delay(1000,()=>{ 
        setStop(true);
      })  
     }
     });
    };

  return (
    <div className='trivia'>
     <div className="question">{question?.question}</div>
        <div className="answers">
         {question?.answers.map((a) =>(
         <div key={a.id} className={selectAnswer === a ? className : "answer"} onClick={() => handleClick(a)}>{a.text}</div>))}
        </div>
    </div>
  )
}

export default Trivia