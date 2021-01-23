import React, { createContext, useContext, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import { CounterContext } from '../ContextProvider';

export default CounterComponent = () => {
  const { setCounter, increment, counter } = useContext(CounterContext);
  console.log('rerendering');
  return (
    <View style={{ ...styles.container, flex: 0.8 }}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>The counter is: {counter}</Text>
      {/* <Text>The counter is: {counter}</Text> */}
      <Button
        title="Decrement"
        onPress={() => setCounter((prev) => prev - 1)}
      />
      <Button title="Increment" onPress={() => increment()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
