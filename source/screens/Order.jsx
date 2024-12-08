import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Background from '../images/order-background.png';
import {COLORS} from '../helpers/customColor';
import QRCode from 'react-native-qrcode-svg';
import ButtonControl from '../components/ButtonControl';
import {useNavigation} from '@react-navigation/native';
import Cat from '../images/kisa.png';
import NoteBook from '../images/notebook.png';

const {width} = Dimensions.get('window');
export default function Order() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <Image source={Cat} style={styles.cat} />

      <Image source={NoteBook} style={styles.notebook} />

      <View style={styles.bottomSheet}>
        <Text style={styles.title}>Спасибо за заказ!</Text>

        <QRCode
          value={'https://yaponamama.uz/en'}
          size={width / 3}
          color={COLORS.red}
        />

        <ButtonControl
          text={'Оплатить'}
          onPress={() => navigation.navigate('Main')}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottomSheet: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '45%',
    backgroundColor: COLORS.white,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    alignItems: 'center',
    paddingTop: 25,
  },
  title: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 24,
    color: COLORS.black,
    marginBottom: 30,
  },
  cat: {
    resizeMode: 'contain',
    width: width / 1.3,
  },
  notebook: {
    resizeMode: 'contain',
    width: width / 1.4,
    position: 'absolute',
    left: '15%',
  },
});
