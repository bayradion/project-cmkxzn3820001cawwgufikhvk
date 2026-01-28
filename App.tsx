import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { CounterScreen } from './src/screens/CounterScreen';

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <CounterScreen />
    </>
  );
}