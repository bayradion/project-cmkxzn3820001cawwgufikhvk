import React from 'react';
import { View, Text } from 'react-native';
import { Button } from '../components/Button';
import { useCounter } from '../hooks/useCounter';
import { styles } from '../constants/theme';

export function CounterScreen() {
  const { count, increment, decrement, reset } = useCounter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Counter App</Text>
      <Text style={styles.counter}>{count}</Text>
      <View style={styles.buttonRow}>
        <Button title="-" onPress={decrement} />
        <Button title="Reset" onPress={reset} />
        <Button title="+" onPress={increment} />
      </View>
    </View>
  );
}

export default CounterScreen;