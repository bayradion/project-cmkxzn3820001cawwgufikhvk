import React from 'react';
import { View, Pressable, Text, StyleSheet } from 'react-native';
import { ButtonProps } from '../types';
import { colors } from '../constants/theme';

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
    backgroundColor: colors.primary,
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
    color: colors.buttonText,
    fontSize: 16,
    fontWeight: '600',
  },
});