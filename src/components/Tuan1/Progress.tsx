import { StyleSheet, Text, View } from 'react-native';

type ProgressProps = {
  duLieu: number;
};

function Progress({ duLieu }: ProgressProps) {
  if (isNaN(duLieu) || duLieu < 0 || duLieu > 100) {
    return (
      <Text style={styles.errorText}>
        Dữ liệu nhập vào phải là số và từ 0 đến 100
      </Text>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tiến trình: {duLieu}%</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 4,
  },
  text: {
    fontSize: 15,
    color: '#155724',
  },
  errorText: {
    fontSize: 15,
    color: '#d9534f',
  },
});

export default Progress;
