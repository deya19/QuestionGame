import { useEffect } from "react";
import { useMemo } from "react";
import { useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";

function App() {
  const [username,setUsername] = useState(null);
  const [questionNumber,setQuestionNumber] = useState(1);
  const [stop,setStop] = useState(false);
  const [earned,setEarned] = useState("$ 0");
  
  
  const data = useMemo(() =>
  [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Which band includes 'Jared Leto'?",
      answers: [
        {
          text: "Counting Crows",
          correct: false,
        },  {
          text: "Thirty Seconds to Mars",
          correct: true,
        },
        {
          text: "Three 6 Mafia",
          correct: false,
        },
        {
          text: "The Velvet Underground",
          correct: false,
        },
      
      ],
    },{
      id: 5,
      question: "What constellation is represented by scales?",
      answers: [
        {
          text: "	Libra",
          correct: true,
        },
        {
          text: "	Scorpio",
          correct: false,
        },
        {
          text: "Gemini",
          correct: false,
        },
        {
          text: "Aries",
          correct: false,
        },
       
      ],
    },{
      id: 6,
      question: "The last line of which document is 'Working men of all countries, unite.'?",
      answers: [
        {
          text: "The American Declaration of Independence",
          correct: false,
        },
        {
          text: "Communist Manifesto",
          correct: true,
        },
        {
          text: "The Gettysberg Address",
          correct: false,
        },
        {
          text: "Magna Carta",
          correct: false,
        },
      ],
    },{
      id: 7,
      question: "Which author wrote 'Hainish Cycle'?",
      answers: [
        {
          text: "Stephen King",
          correct: false,
        },
        {
          text: "Jack Vance",
          correct: false,
        },
        {
          text: "George R. R. Martin",
          correct: false,
        },
        {
          text: "	Ursula K. Le Guin",
          correct: true,
        },
      ],
    },{
      id: 8,
      question: "Which of these brands has a eagle on its logo?",
      answers: [
        {
          text: "Japan Airlines",
          correct: false,
        },
        {
          text: "Peugeot",
          correct: false,
        }, {
          text: "Smirnoff",
          correct: true,
        },
        {
          text: "Hermès",
          correct: false,
        },
       
      ],
    },{
      id: 9,
      question: "Amman is the capital city of which country?",
      answers: [
        {
          text: "Bosnia and Herzegovina",
          correct: false,
        },
        {
          text: "Lesotho",
          correct: false,
        },
        {
          text: "Uganda",
          correct: false,
        },
        {
          text: "Jordan",
          correct: true,
        },
      ],
    },{
      id: 10,
      question: "Which American singer, songwriter and dancer released the song 'Don't Stop 'Til You Get Enough'?",
      answers: [
        {
          text: "Nicki Minaj",
          correct: false,
        },
        {
          text: "Neil Young",
          correct: false,
        },
        {
          text: "Eric Clapton",
          correct: false,
        },
        {
          text: "Michael Jackson",
          correct: true,
        },
      ],
    },{
      id: 11,
      question: "Which author wrote 'Catching Fire'?",
      answers: [
        {
          text: "Suzanne Collins",
          correct: true,
        },
        {
          text: "Frederik Pohl",
          correct: false,
        },
        {
          text: "Dan Brown",
          correct: false,
        },
        {
          text: "Philip K. Dick",
          correct: false,
        },
      ],
    },{
      id: 12,
      question: "When did the Six Day War redefine the Middle East’s balance of power?",
      answers: [
        {
          text: "1977",
          correct: false,
        },
        {
          text: "1987",
          correct: false,
        },
        {
          text: "1997",
          correct: false,
        },
        {
          text: "1967",
          correct: true,
        },
      ],
    },{
      id: 13,
      question: "What is the word for a group of seals?",
      answers: [
        {
          text: "A yoke",
          correct: false,
        },
        {
          text: "	A herd",
          correct: true,
        },
        {
          text: "A murder",
          correct: false,
        },
        {
          text: "A clowder",
          correct: false,
        },
      
      ],
    },{
      id: 14,
      question: "What is the word for a group of hares?",
      answers: [
        {
          text: "	A down",
          correct: true,
        },
        {
          text: "A murder",
          correct: false,
        },
        {
          text: "A cast",
          correct: false,
        },
        {
          text: "A host",
          correct: false,
        },
     
      ],
    },{
      id: 15,
      question: "Which country uses a Lek as a unit of currency?",
      answers: [
        {
          text: "India",
          correct: false,
        },
        {
          text: "South Africa",
          correct: false,
        },
        {
          text: "Turkey",
          correct: false,
        },
        {
          text: "	Albania ",
          correct: true,
        },
      ],
    },
  ],[]);


  const moneyPyramid = useMemo(()=>
    [
      {id:1 , amount:"$ 100"},
      {id:2 , amount:"$ 200"},
      {id:3 , amount:"$ 300"},
      {id:4 , amount:"$ 500"},
      {id:5 , amount:"$ 1000"},
      {id:6 , amount:"$ 2000"},
      {id:7 , amount:"$ 4000"},
      {id:8 , amount:"$ 8000"},
      {id:9 , amount:"$ 16000"},
      {id:10 , amount:"$ 32000"},
      {id:11, amount:"$ 64000"},
      {id:12, amount:"$ 125000"},
      {id:13, amount:"$ 250000"},
      {id:14, amount:"$ 500000"},
      {id:15, amount:"$ 1000000"},
    ].reverse(),[]
    ); 

  useEffect(()=>{
  questionNumber >1 && setEarned(moneyPyramid.find(m=> m.id === questionNumber - 1).amount)
  },[moneyPyramid,questionNumber])



  return (
    <div className="app">
      {username ? (
        <>
        <div className="main">
      {stop ? <h1 className="endText">You earned: {earned}</h1> : (
        <>
      <div className="top">
        <div className="timer">
          <Timer setStop = {setStop} questionNumber = {questionNumber}/>
        </div>
      </div>
      <div className="bottom">
        <Trivia
         data={data} 
         setStop = {setStop} 
         setQuestionNumber={setQuestionNumber} 
         questionNumber={questionNumber}
         setEarned={setEarned}
         />
       </div>
         </>
      )}
    </div>
    <div className="pyramid">
      <ul className="moneyList">
        {moneyPyramid.map(m =>(
        <li key={m.id} className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
          <span className="moneyListItemNumber">{m.id}</span>
          <span className="moneyListItemAmount">{m.amount}</span>
        </li>
        ))}
      </ul>
    </div>
        </>
      ) : ( <Start setUsername = {setUsername}/>
      )}
    
    </div>
  );
}

export default App;
