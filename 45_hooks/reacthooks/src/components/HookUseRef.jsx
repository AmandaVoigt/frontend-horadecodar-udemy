import { useEffect, useState, useRef } from "react";

const HookUseRef = () => {
  // 1 - useRef
  const numberRef = useRef(0);
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  useEffect(() => {
    numberRef.current = numberRef.current + 1;
  });

  return (
    <div>
      <h2>useRef</h2>
      <p>O componente renderizou: {numberRef.current}</p>
      <p>Counter A: {counterA}</p>
      <button onClick={() => setCounterA(counterA + 1)}>Contador A</button>
      <p>Counter B: {counterB}</p>
      <button onClick={() => setCounterB(counterB + 1)}>Contador B</button>
      <hr />
    </div>
  );
};

export default HookUseRef;
