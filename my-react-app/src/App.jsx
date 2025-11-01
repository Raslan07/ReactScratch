import { _useState, useState } from "react";
import "./index.css";


export default function App() {
return <div>
        <Tip/> 
</div>;
}


function Tip(){
  const [bill , setBill] = useState(''); // Bill what i will pay
  const [percent1 , setPercent1] = useState(0); // Percentage what i will let it 
  const [percent2 , setPercent2] = useState(0); // Percentage what myFriend leave
  const tip = bill * ((percent1 + percent2) / 2 / 100); // Average of my Tip and my friend
  
  // Reset Handel Function to Reset all in Zero start
  function handleReset() {
    setBill("");
    setPercent1(0);
    setPercent2(0);
  }
  
  return (
    <div>
      {/* Bill input field with first useState Bill */}
      <Billinput billes={bill} onSetBill={setBill} />

      {/* Component with Children Prop Percentage 1 */}
      <SelectPercent percentage={percent1} onPer={setPercent1}>
        How did you like the service?
      </SelectPercent>

      {/* Component with Children Prop Percentage 2 */}
      <SelectPercent percentage={percent2} onPer={setPercent2}>
        How did your friend like the service?
      </SelectPercent>

      {bill > 0 && (
        <>
          <Output bill={bill} tip={tip} />
          <Reset onReset={handleReset} />
        </>
      )}
    </div>
  );
}
//  Component Billinput with useState -> props to set Date with DataFlow
function Billinput({ billes, onSetBill }) {
  return (
    <div>
      <label htmlFor="">How much was the bill?</label>
      <input 
      type="text" 
      placeholder="Bill Value" 
      value={billes}
      onChange={(e)=>onSetBill(Number((e.target.value)))} />
    </div>
  );
}

//  Component Select with useState -> props to set Date with DataFlow
//  prop its take 4 values of useState one and two for percentage
function SelectPercent({ children, percentage, onPer }) {
  return (
    <div>
      <label>{children}</label>
      <select value={percentage} onChange={(e)=>onPer(Number(e.target.value))}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">it was okay (5%)</option>
        <option value="10">it was good (10%)</option>
        <option value="20">Absolutely amazing (20%)</option>
      </select>
    </div>
  );
}

function Output({ bill, tip }) {
  return (
    <h3>
      You pay ${bill + tip} (${bill} + ${tip} tip)
    </h3>
  );
}

function Reset({ onReset }) {
  return <button onClick={onReset}>Reset</button>;
}
