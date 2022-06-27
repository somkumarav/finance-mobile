import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { List } from './List';

export const ListView = ({ data, total }) => {
  return (
    <View style={styles.header}>
      <Card total={total} />
      <List data={data} />
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
