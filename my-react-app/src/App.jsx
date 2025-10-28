import { useState } from "react";


export default function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

function Counter(){
  const [_step , _setStep] = useState(1)
  const [_count , _setCount] = useState(0)

  const date = new Date();
  date.setDate(date.getDate() + _count);

console.log(date.toDateString())
  function incremntVal(){
    return _setStep(()=>_step+1) ;
  }
  function decremntVal() {
    return _setStep(() => _step - 1);
  }
  function incremntVal2() {
    return _setCount(() => _count + _step);
  }
  function decremntVal2() {
    return _setCount(() => _count - _step);
  }
  return (
    <div className="container">
      <div className="step">
        <button onClick={decremntVal} type="button">
          -
        </button>
        <p>Step : {_step} </p>
        <button onClick={incremntVal} type="button">
          +
        </button>
      </div>
      
      <div className="count">
        <button onClick={decremntVal2} type="button">
          -
        </button>
        <p>Count : {_count} </p>
        <button onClick={incremntVal2} type="button">
          +
        </button>
      </div>

      <p>
        <span>
          {_count === 0
            ? "Today is "
            : _count > 0
            ? `${_count} days from today is `
            : `${Math.abs(_count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}