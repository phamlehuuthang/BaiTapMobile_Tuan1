import ChonGioiTinh from '@/components/Tuan1/ChonGioiTinh';
import Counter from '@/components/Tuan1/Counter';
import LoadingContainer from '@/components/Tuan1/LoadingContainer';
import MyButton from '@/components/Tuan1/MyButton';
import MyTextInput from '@/components/Tuan1/MyTextInput';
import Progress from '@/components/Tuan1/Progress';
import TodoList, { TodoItem } from '@/components/Tuan1/TodoList';
import UserCard from '@/components/Tuan1/UserCard';
import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

const todos: TodoItem[] = [
  { id: '1', title: 'Học React Native' },
  { id: '2', title: 'Học TypeScript' },
  { id: '3', title: 'Làm bài tập' },
];

export default function Index() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ScrollView contentContainerStyle={styles.scrollContent}>
      <View style={styles.container}>
        <View style={styles.section}>
          <Text style={styles.title}>Bài 1: UserCard</Text>
          <UserCard name="TheAnh" age={21} isAdmin={true} />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Bài 2: Counter</Text>
          <Counter />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Bài 3: TodoList</Text>
          <TodoList todos={todos} />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Bài 4: MyButton</Text>
          <View style={styles.buttonRow}>
            <MyButton
              label="Nhấn đi 1"
              onPressHam={() => console.log('Đã nhấn 1')}
              color="#e87a90"
            />
            <MyButton
              label="Nhấn đi 2"
              onPressHam={() => console.log('Đã nhấn 2')}
            />
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Bài 5: MyTextInput</Text>
          <MyTextInput />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Bài 6: LoadingContainer</Text>
          <LoadingContainer isLoading={isLoading}>
            Load xong rồi!
          </LoadingContainer>
          <Pressable
            onPress={() => setIsLoading(!isLoading)}
            style={styles.toggleBtn}
          >
            <Text style={styles.toggleBtnText}>
              Đổi trạng thái Loading ({isLoading ? 'Đang bật' : 'Đang tắt'})
            </Text>
          </Pressable>
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Bài 7: Chọn Giới Tính</Text>
          <ChonGioiTinh />
        </View>

        <View style={styles.section}>
          <Text style={styles.title}>Bài 8: Progress</Text>
          <Progress duLieu={75} />
          <Progress duLieu={-1} />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContent: {
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  container: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 16,
    borderRadius: 10,
    gap: 16,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 4,
  },
  section: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    paddingTop: 12,
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    gap: 10,
  },
  toggleBtn: {
    marginTop: 4,
    paddingVertical: 6,
    paddingHorizontal: 10,
    backgroundColor: '#eee',
    borderRadius: 6,
    alignSelf: 'flex-start',
  },
  toggleBtnText: {
    fontSize: 13,
    color: '#333',
  },
});
