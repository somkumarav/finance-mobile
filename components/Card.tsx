import { View, Text, StyleSheet } from 'react-native';

export const Card = () => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>₹-11204</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    height: '10%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontSize: 32,
    color: '#ffffff',
  },
});
