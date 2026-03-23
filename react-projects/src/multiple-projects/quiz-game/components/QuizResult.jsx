import { useState } from "react";

export default function QuizResult({ buttonName }) {
  const [counter, setCounter] = useState(0);

  function changeCounter() {
    setCounter((counter) => counter + 1);
  }
  return (
    <>
      <button onClick={changeCounter}>{buttonName}</button>
      <p>Count value {counter}</p>
    </>
  );
}
