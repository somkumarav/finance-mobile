import { View, Text, StyleSheet } from 'react-native';
import { DailyHeader } from '../components/DailyHeader';
import { DailyList } from '../components/DailyList';

export const Daily = () => {
  return (
    <View style={styles.daily}>
      <DailyHeader />
      <DailyList />
    </View>
  );
};

const styles = StyleSheet.create({
  daily: {
    height: '90%',
    width: '100%',
  },
});
