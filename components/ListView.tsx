import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { List } from './List';

export const ListView = () => {
  return (
    <View style={styles.header}>
      <Card />
      <List />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flex: 14,
    alignItems: 'center',
  },

  text: {
    color: '#ffffff',
  },
});
