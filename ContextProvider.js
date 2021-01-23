import React, { createContext, useState } from 'react';

export const CounterContext = createContext();

export default function CounterContextProvider({ children }) {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev + 1);
  return (
    <CounterContext.Provider value={{ counter, setCounter, increment }}>
      {children}
    </CounterContext.Provider>
  );
}
