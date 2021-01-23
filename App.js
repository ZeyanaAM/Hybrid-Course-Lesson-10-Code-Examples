import { StatusBar } from 'expo-status-bar';
import React, { createContext, useContext, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { Context } from './context';
import CounterContextProvider, { CounterContext } from './ContextProvider';
import CounterComponent from './components/CounterComponent';
import ComponentWithConsumer from './components/ComponentWithConsumer';

// const ContextState = createContext();
// const ContextDispatch = createContext();

export default function App() {
  const [counter, setCounter] = useState(0);
  const increment = () => setCounter((prev) => prev + 1);

  return (
    <Context.Provider
      value={{
        message: 'Hello world',
        counter,
        setCounter,
        increment,
        magicalNumber: 42,
      }}
    >
      <CounterContextProvider>
        <CounterComponent />
        <ComponentWithConsumer />
      </CounterContextProvider>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
