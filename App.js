import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Home from "./pages/Home.js"

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <Home/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F1EDED'
  },
});
