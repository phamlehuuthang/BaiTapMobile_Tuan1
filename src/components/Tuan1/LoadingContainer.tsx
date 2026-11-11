import React from 'react';
import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';

type LoadingContainerProps = {
  isLoading: boolean;
  // kiểu dl nào có thể hiện ra trên màn hình thì có thể truyền vào
  children: React.ReactNode;
};

function LoadingContainer({ isLoading, children }: LoadingContainerProps) {
  return (
    <View style={styles.container}>
      {isLoading ? (
        <View style={styles.loadingRow}>
          <ActivityIndicator size="small" color="#007bff" />
          <Text style={styles.text}>Đang tải...</Text>
        </View>
      ) : (
        <Text style={styles.text}>{children}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 6,
  },
  loadingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontSize: 15,
  },
});

export default LoadingContainer;
