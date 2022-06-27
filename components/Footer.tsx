import { View, Text, StyleSheet } from 'react-native';

export const Footer = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '10%',
    width: '100%',
    backgroundColor: '#16A085',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#ffffff',
  },
});
