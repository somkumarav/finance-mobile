import { View, Text, StyleSheet } from 'react-native';

import { Header } from '../components/Header';
import { ListView } from '../components/ListView';
import { Footer } from '../components/Footer';

export const Main = () => {
  return (
    <View style={styles.main}>
      <Header />
      <ListView />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '100%',
    width: '100%',
  },

  text: {
    color: '#ffffff',
  },
});
