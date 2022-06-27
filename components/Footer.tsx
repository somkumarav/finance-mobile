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
    flex: 3,
    backgroundColor: '#16A085',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#ffffff',
  },
});
