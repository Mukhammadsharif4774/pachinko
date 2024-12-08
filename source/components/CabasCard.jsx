import React, {useContext, useEffect, useState} from 'react';
import {GlobalContext} from '../contexts/GlobalContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Trash from '../images/trash-frame.png';
import Minus from '../images/minus-frame.png';
import Plus from '../images/plus-frame.png';
export default function CabasCard({cart}) {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const getCartList = async () => {
      const cartList = await AsyncStorage.getItem('cartList');
      if (cartList?.length) {
        setCarts(JSON.parse(cartList));
      }
    };

    getCartList();
  }, [refresh]);

  const increment = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === cart.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          newArray[selectedIndex].count = newArray[selectedIndex].count + 1;
          await AsyncStorage.setItem('cartList', JSON.stringify(carts));
          await setRefresh(!refresh);
        }
      }
    }
  };

  const decrement = async () => {
    if (carts?.length) {
      const selectedItem = carts.find(product => product.name === cart.name);
      if (selectedItem) {
        const selectedIndex = carts.indexOf(selectedItem);
        if (selectedIndex !== null) {
          const newArray = carts;
          if (newArray[selectedIndex].count > 0) {
            newArray[selectedIndex].count = newArray[selectedIndex].count - 1;
            await AsyncStorage.setItem('cartList', JSON.stringify(carts));
            await setRefresh(!refresh);
          }
        }
      }
    }
  };

  const deleteItem = async () => {
    if (carts?.length) {
      const newArray = carts.filter(product => product.name !== cart.name);
      await setCarts(newArray);
      await AsyncStorage.setItem('cartList', JSON.stringify(newArray));
      await setRefresh(!refresh);
    }
  };
  return (
    <View style={styles.card}>
      <View style={{flexDirection: 'row'}}>
        <Image source={cart.image} style={styles.image} />

        <Text style={styles.name}>{cart.name}</Text>
      </View>

      <View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.price}>
            $ {cart.price.toFixed(0) * cart.count}
          </Text>

          <TouchableOpacity onPress={() => deleteItem()}>
            <Image source={Trash} style={styles.trash} />
          </TouchableOpacity>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 5,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity onPress={() => increment()}>
            <Image source={Plus} style={styles.plus} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              if (cart.count > 1) {
                decrement();
              } else {
                deleteItem();
              }
            }}>
            <Image source={Minus} style={styles.minus} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: 15,
    backgroundColor: '#F4F4F4',
    borderRadius: 12,
    padding: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 12,
  },
  name: {
    textAlign: 'center',
    color: '#272727',
    fontFamily: 'Montserrat-LightItalic',
    fontSize: 13,
    marginLeft: 10,
    marginTop: 10,
  },
  price: {
    marginTop: 10,
    marginRight: 5,
    fontFamily: 'Montserrat-Bold',
  },
  trash: {
    width: 25,
    height: 25,
    marginTop: 6,
  },
  plus: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  minus: {
    width: 25,
    height: 25,
  },
});
