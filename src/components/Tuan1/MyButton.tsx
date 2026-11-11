import React from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

type MyButtonProps = {
  label: string;
  onPressHam: () => void;
  // dấu "?" để có thể truyền color hoặc ko
  color?: string;
};

function MyButton({ label, onPressHam, color = '#4a90e2' }: MyButtonProps) {
  return (
    <Pressable
      style={[styles.button, { backgroundColor: color }]}
      onPress={onPressHam}
    >
      <Text style={styles.text}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  text: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 15,
  },
});

export default MyButton;
