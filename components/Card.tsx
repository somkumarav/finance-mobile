import { View, Text, StyleSheet } from 'react-native';

export const Card = ({ total }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.text}>₹{total}</Text>
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
    fontWeight: 'bold',
    color: '#ffffff',
  },
});
