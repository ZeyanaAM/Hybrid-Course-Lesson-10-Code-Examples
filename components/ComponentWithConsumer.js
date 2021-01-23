import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Context } from '../context';

export default ComponentWithConsumer = () => {
  return (
    <>
      <Context.Consumer>
        {(context) => (
          <View style={styles.container}>
            <Text>The value is: {context.magicalNumber}</Text>
          </View>
        )}
      </Context.Consumer>
      {/* // Doesn't work since context variable is only locally available
        <Context.Consumer>{(context) => <ComponentExample />}</Context.Consumer> */}
    </>
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
