import React, {useContext, useEffect, useState} from 'react';
import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {COLORS} from '../helpers/customColor';

export default function Card({item}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [added, setAdded] = useState(false);
  const add = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (!existProduct) {
        cartArray.push(product);
        await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
      }
    } else {
      const cartArray = [];
      cartArray.push(product);
      await AsyncStorage.setItem('cartList', JSON.stringify(cartArray));
    }
    await setRefresh(!refresh);
  };

  const remove = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        const newArray = cartArray.filter(cart => cart.name !== product.name);
        await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      }
    }
    await setRefresh(!refresh);
  };

  const define = async product => {
    const cartList = await AsyncStorage.getItem('cartList');
    if (cartList) {
      const cartArray = JSON.parse(cartList);
      const existProduct = cartArray.find(cart => cart.name === product.name);
      if (existProduct) {
        remove(product);
      } else {
        add(product);
      }
    } else {
      add(product);
    }
  };

  useEffect(() => {
    const getProduct = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList) {
        const cartArray = JSON.parse(cartList);
        const existProduct = cartArray.find(cart => cart.name === item.name);
        if (existProduct) {
          setAdded(true);
        } else {
          setAdded(false);
        }
      } else {
        setAdded(false);
      }
    };

    getProduct();
  }, [refresh]);
  return (
    <TouchableOpacity
      onPress={() => define(item)}
      style={[styles.card, {opacity: added ? 0.4 : 1}]}>
      <Image source={item.image} style={styles.image} />

      <Text style={styles.name}>{item.name}</Text>

      <Text style={styles.price}>{item.price.toFixed(2)}$</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    marginLeft: 15,
    borderRadius: 12,
    backgroundColor: '#F4F4F4',
    height: 255,
  },
  image: {
    height: 200,
    width: 160,
    borderRadius: 12,
  },
  name: {
    color: '#272727',
    fontFamily: 'Montserrat-LightItalic',
    fontSize: 13,
    paddingTop: 10,
    paddingLeft: 3,
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 13,
    paddingTop: 5,
    paddingLeft: 3,
    paddingBottom: 5,
    color: COLORS.black,
  },
});
