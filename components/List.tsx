import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';

const data = [
  {
    name: 'sinatraa',
    img: 'https://pbs.twimg.com/profile_images/1482509652654964739/LMIC_LIO_400x400.jpg',
    amount: '12312',
  },
  {
    name: 'Tenz',
    img: 'https://www.sukhbeerbrar.com/wp-content/uploads/2021/05/133711194_181287153732302_8104905093917289814_n-1024x1009.jpg',
    amount: '3123',
  },
];

export const List = () => {
  return (
    <View style={styles.list}>
      <FlatList
        data={data}
        renderItem={(itemdata) => {
          return (
            <Pressable
              android_ripple={{ color: '#566573' }}
              style={styles.listItem}
            >
              <View style={styles.itemImage}>
                <Image
                  source={{ uri: itemdata.item.img }}
                  style={styles.img}
                ></Image>
              </View>
              <View style={styles.itemMain}>
                <Text style={styles.text}>{itemdata.item.name}</Text>
              </View>
              <View style={styles.itemAmount}>
                <Text style={styles.text}>{itemdata.item.amount}</Text>
              </View>
            </Pressable>
          );
        }}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    paddingHorizontal: 10,
    height: '91%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    color: '#ffffff',
  },

  img: {
    height: 50,
    width: 50,
    borderRadius: 100 / 2,
  },

  listItem: {
    width: '86%',
    backgroundColor: '#F5B041',
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemImage: {},

  itemMain: {},

  itemAmount: {},
});
