import { useEffect, useState } from 'react';
import { View, StyleSheet } from 'react-native';

import { MainHeader } from '../components/MainHeader';
import { ListView } from '../components/ListView';

const account = [
  {
    id: 1,
    name: 'Sinatraa',
    image:
      'https://pbs.twimg.com/profile_images/1482509652654964739/LMIC_LIO_400x400.jpg',
  },
  {
    id: 2,
    name: 'Ja Morrant',
    image:
      'https://media.gq.com/photos/5f3d3715092046da7abdb69c/1:1/w_1818,h_1818,c_limit/Ja-Morant-Memphis-Grizzlies-interview-nba-bubble-gq-august-2020.jpg',
  },
];

interface Arr {
  id: number;
  amount: number;
  note: string;
  person: string;
}
interface State {
  name: string;
  img: string;
  amount: number;
}

const jaySinatraa = [
  { id: 1, amount: 50, note: 'food', person: 'Sinatraa' },
  { id: 2, amount: -90, note: 'food', person: 'Sinatraa' },
  { id: 3, amount: -60, note: 'food', person: 'Sinatraa' },
];

const jaMorrant = [
  { id: 4, amount: 50, note: 'food', person: 'Ja Morrant' },
  { id: 5, amount: 100, note: 'food', person: 'Ja Morrant' },
  { id: 6, amount: -20, note: 'food', person: 'Ja Morrant' },
];

const calculate = (arr: Arr[]): number => {
  let sum: number = 0;

  arr.forEach((item) => {
    sum = sum + item.amount;
  });

  return sum;
};

export const Main = () => {
  const [total, setTotal] = useState<number>(0);
  const [state, setState] = useState<State[]>([]);

  useEffect(() => {
    const jamorrant = calculate(jaMorrant);
    const sinatraa = calculate(jaySinatraa);

    setTotal(jamorrant + sinatraa);
    setState([
      { name: 'Sinatraa', img: account[0].image, amount: sinatraa },
      { name: 'Ja Morrant', img: account[1].image, amount: jamorrant },
    ]);
  }, []);

  return (
    <View style={styles.main}>
      <MainHeader />
      <ListView data={state} total={total} />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    height: '%',
    width: '100%',
  },

  text: {
    color: '#ffffff',
  },
});
