import React, { useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

type Gender = 'male' | 'female' | 'other';

function ChonGioiTinh() {
  const [gtinh, setGtinh] = useState<Gender>('male');

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Giới tính đã chọn: {gtinh}</Text>
      <View style={styles.buttonGroup}>
        <Pressable
          onPress={() => setGtinh('male')}
          style={[styles.nutBam, gtinh === 'male' && styles.nutBamActive]}
        >
          <Text>Nam</Text>
        </Pressable>
        <Pressable
          onPress={() => setGtinh('female')}
          style={[styles.nutBam, gtinh === 'female' && styles.nutBamActive]}
        >
          <Text>Nữ</Text>
        </Pressable>
        <Pressable
          onPress={() => setGtinh('other')}
          style={[styles.nutBam, gtinh === 'other' && styles.nutBamActive]}
        >
          <Text>Khác</Text>
        </Pressable>
        {/* <Pressable onPress={()=>{setGtinh("hihi")}}>tên ko có trong Union</Pressable> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 8,
  },
  label: {
    fontSize: 15,
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: 10,
  },
  nutBam: {
    backgroundColor: '#f0f0f0',
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  nutBamActive: {
    backgroundColor: '#ffd6e0',
    borderColor: '#e06688',
  },
});

export default ChonGioiTinh;
