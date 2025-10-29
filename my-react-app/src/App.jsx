import { useState } from "react";


export default function App() {
  return (
    <div className="app">
    <Form />
  </div>
);
}


function Form(){
  const [step , setStep] = useState(1);
  const [day , setDay] = useState(0);

   const data = new Date("june 21 2027");
   data.setDate(data.getDate() + day);

  return (
    <div className="container">
      
      <div className="ranger">
        <input
          type="range"
          value={step}
          id="range"
          min={1}
          max={10}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span id="">step : {step}</span>
      </div>

      <div className="puts">
        <button onClick={() => setDay((e)=> e - step)}>-</button>
        <input
          type="text"
          name="text"
          id="text"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
        <button onClick={() => setDay((e)=>e + step)}>+</button>
      </div>
      <p>
        <span>{day}</span> days from today is {data.toDateString()}{" "}
      </p>

      
    </div>
  );
}