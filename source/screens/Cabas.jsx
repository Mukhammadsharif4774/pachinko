import React, {useContext, useEffect, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {COLORS} from '../helpers/customColor';
import {GlobalContext} from '../contexts/GlobalContext';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Chevron from '../images/chevron-frame.png';
import CabasCard from '../components/CabasCard';
import Parcel from '../images/parcel.png';
import ButtonControl from '../components/ButtonControl';

export default function Cabas() {
  const {refresh, setRefresh} = useContext(GlobalContext);
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCart = async () => {
      const storedCart = await AsyncStorage.getItem('cartList');
      setCart(storedCart ? JSON.parse(storedCart) : []);
    };
    fetchCart();
  }, [refresh]);

  useEffect(() => {
    const calculateTotal = () => {
      const total = cart.reduce(
        (sum, item) => sum + item.price * item.count,
        0,
      );
      setPrice(total);
    };
    if (cart.length) calculateTotal();
  }, [cart]);

  const clearCart = async () => {
    await AsyncStorage.setItem('cartList', '');
    setRefresh(!refresh);
  };

  const renderCartItems = () => (
    <>
      <TouchableOpacity style={styles.delete} onPress={clearCart}>
        <Text style={styles.deleteAll}>Удалить все</Text>
      </TouchableOpacity>
      {cart.map(item => (
        <CabasCard cart={item} key={item.name} />
      ))}
    </>
  );

  const renderEmptyCart = () => (
    <View style={styles.noCabas}>
      <Image source={Parcel} style={styles.parcel} />
      <Text style={styles.title}>Ваша корзина пуста</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>На главную</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Chevron} style={styles.chevron} />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Корзина</Text>
      </View>

      {cart.length === 0 ? (
        renderEmptyCart()
      ) : (
        <ScrollView contentContainerStyle={styles.scrollView}>
          {renderCartItems()}
        </ScrollView>
      )}

      {cart.length > 0 && (
        <>
          <View style={styles.priceRow}>
            <Text style={styles.name}>Итого:</Text>
            <Text style={styles.name}>{price.toFixed(0)}$</Text>
          </View>
          <ButtonControl
            text="Оплатить"
            onPress={() => navigation.navigate('Order')}
          />
        </>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  chevron: {
    width: 35,
    height: 35,
  },
  headerTitle: {
    textAlign: 'center',
    width: '75%',
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
  },
  scrollView: {
    paddingHorizontal: 20,
  },
  priceRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 100,
  },
  name: {
    fontSize: 14,
    color: COLORS.black,
    fontWeight: '600',
  },
  parcel: {
    resizeMode: 'contain',
    width: 100,
    height: 200,
  },
  noCabas: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: COLORS.black,
  },
  button: {
    width: '50%',
    backgroundColor: COLORS.red,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    marginTop: 25,
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: 'Montserrat-MediumItalic',
  },
  deleteAll: {
    textAlign: 'right',
    color: '#272727',
    fontFamily: 'Montserrat-Italic',
    opacity: 0.5,
  },
  delete: {
    alignSelf: 'flex-end',
  },
});
