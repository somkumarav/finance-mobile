import {
  View,
  Text,
  Pressable,
  FlatList,
  Image,
  StyleSheet,
} from 'react-native';

export const List = ({ data }) => {
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
                <Text style={styles.nameText}>
                  {itemdata.item.amount > 0 ? 'from ' : 'to '}
                  {itemdata.item.name}
                </Text>
                {/* <Text style={styles}>hello</Text> */}
              </View>
              <View style={styles.itemAmount}>
                <Text style={styles.amountText}>{itemdata.item.amount}</Text>
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
    width: '100%',
    paddingHorizontal: 10,
    height: '91%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  img: {
    height: 50,
    width: 50,
    borderRadius: 100 / 2,
  },

  listItem: {
    width: '100%',
    padding: 10,
    marginVertical: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  itemImage: {
    width: '20%',
  },

  itemMain: {
    width: '60%',
  },

  itemAmount: {
    width: '20%',
  },

  nameText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'right',
  },
});
