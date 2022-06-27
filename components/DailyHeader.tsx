import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
// import Ionicicons from '@expo/vector-icons/Ionicons';
// import { MaterialIcons } from '@expo/vector-icons';

export const DailyHeader = () => {
  return (
    <View style={styles.header}>
      <Image
        source={{ uri: 'https://randomuser.me/portraits/men/1.jpg' }}
        style={styles.img}
      />
      <Pressable>
        <Text style={styles.text}>+</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '15%',
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  text: {
    color: '#ffffff',
    fontSize: 32,
  },

  img: {
    width: 50,
    height: 50,
    borderRadius: 100 / 2,
  },
});
