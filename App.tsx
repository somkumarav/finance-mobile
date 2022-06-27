import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Footer } from './components/Footer';
import { Daily } from './pages/Daily';

import { Main } from './pages/Main';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      {/* <Main /> */}
      <Daily />
      <Footer />
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#222222',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
