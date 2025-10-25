import { useState } from "react";

const _messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  return (
    <div>
      <Steps />
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);

  function handlerPre() {
    if (step > 1) setStep((s) => s - 1);
  }
  function handlerNext() {
    if (step < 3) {
      setStep((s) => s + 1);
    }
  }
  function IsApper() {}
  return (
    <div className="parent">
      <div className="step">
        <div className="Numbers">
          <div className={step >= 1 ? "active" : ""}>1</div>
          {/*Active class to makle the number colored*/}
          <div className={step >= 2 ? "active" : ""}>2</div>
          <div className={step >= 3 ? "active" : ""}>3</div>
        </div>
        <p className="message">
          Step {step}: {_messages[step - 1]}
        </p>

        <div className="buttons">
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlerPre}
          >
            Pervious
          </button>
          <button
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
            onClick={handlerNext}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
