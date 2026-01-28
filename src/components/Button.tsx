import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { ButtonProps } from '../types';

export function Button({ title, onPress }: ButtonProps) {
  return (
    <View style={styles.buttonWrapper}>
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonWrapper: {
    backgroundColor: '#007AFF',
    borderRadius: 8,
    overflow: 'hidden',
    margin: 8,
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});