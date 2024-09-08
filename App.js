import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Pressable} from 'react-native';
import InputBar from './components/inputBar';
import GeneralButton from './components/generalButton'

export default function App() {
  return (
    <View style={styles.container}>
      <InputBar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  }
});
