import { StyleSheet } from 'react-native';

export const colors = {
  primary: '#22C55E',
  background: '#F5F5F5',
  text: '#333333',
  counterText: '#007AFF',
  buttonText: '#FFFFFF',
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 40,
  },
  counter: {
    fontSize: 64,
    fontWeight: 'bold',
    color: colors.counterText,
    marginBottom: 40,
  },
  buttonRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});