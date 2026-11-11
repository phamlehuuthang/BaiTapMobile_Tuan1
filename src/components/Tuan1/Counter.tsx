import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

function Counter() {
  const [count, setCount] = useState<number>(0);

  return (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          if (count > 0) setCount(count - 1);
        }}
        style={[styles.button, styles.minusButton]}
      >
        <Text style={styles.buttonText}>Trừ (-)</Text>
      </Pressable>

      <Text style={styles.countText}>{count}</Text>

      <Pressable
        onPress={() => setCount(count + 1)}
        style={[styles.button, styles.plusButton]}
      >
        <Text style={[styles.buttonText, { color: '#fff' }]}>Cộng (+)</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ccc',
    alignItems: 'center',
  },
  minusButton: {
    backgroundColor: '#f8d7da',
  },
  plusButton: {
    backgroundColor: '#007bff',
    borderColor: '#007bff',
  },
  buttonText: {
    fontSize: 15,
    fontWeight: '600',
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
    minWidth: 30,
    textAlign: 'center',
  },
});

export default Counter;
