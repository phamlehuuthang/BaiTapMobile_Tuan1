import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export type TodoItem = {
  id: string;
  title: string;
};

type TodoListProps = {
  todos: TodoItem[];
};

function TodoList({ todos }: TodoListProps) {
  return (
    <View style={styles.list}>
      {todos.map((item) => (
        <View key={item.id} style={styles.item}>
          <Text style={styles.text}>
            {item.id}. {item.title}
          </Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  list: {
    gap: 6,
  },
  item: {
    padding: 8,
    backgroundColor: '#f9f9f9',
    borderRadius: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  text: {
    fontSize: 15,
  },
});

export default TodoList;
