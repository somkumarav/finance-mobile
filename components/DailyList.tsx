import { View, Text, StyleSheet } from 'react-native';
import { Card } from './Card';
import { List } from './List';

export const DailyList = () => {
  return (
    <View style={styles.listView}>
      <Card total={100} />
    </View>
  );
};

const styles = StyleSheet.create({
  listView: {
    height: '90%',
    alignItems: 'center',
  },

  text: {
    color: '#ffffff',
  },
});
