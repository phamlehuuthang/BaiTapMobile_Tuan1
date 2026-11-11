import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function MyTextInput() {
  const [dlieu, setDlieu] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        // nó tự truyền text vô hàm setDlieu
        onChangeText={setDlieu}
        // giống với dòng dưới này
        // onChangeText={(text)=>{setDlieu(text)}}
        value={dlieu}
        placeholder="Nhập chuỗi bất kỳ..."
        style={styles.input}
      />
      <Text style={styles.text}>Chiều dài chuỗi: {dlieu.length}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 15,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 15,
  },
});

export default MyTextInput;
