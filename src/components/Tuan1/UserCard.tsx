import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type UserCardProps = {
  name: string;
  age: number;
  isAdmin: boolean;
};

function UserCard({ name, age, isAdmin }: UserCardProps) {
  return (
    <View
      style={[
        styles.card,
        { backgroundColor: isAdmin ? '#d4edda' : '#fff3cd' },
      ]}
    >
      <Text style={styles.text}>Họ tên: {name}</Text>
      <Text style={styles.text}>Tuổi: {age}</Text>
      <Text style={styles.text}>
        Vai trò: {isAdmin ? 'Admin' : 'Người dùng'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    gap: 4,
  },
  text: {
    fontSize: 15,
  },
});

export default UserCard;
