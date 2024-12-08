import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Background from '../images/venue-in-tokyo-transformed.png';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Chevron from '../images/chevron-frame.png';
import Title from '../images/pachinko_title.png';
import MarkerImage from '../images/marker.png';
import {COLORS} from '../helpers/customColor';

const {height, width} = Dimensions.get('window');
export default function Sprint() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <LinearGradient
        colors={['#0500FF', 'rgba(0, 0, 0, 0)']}
        style={styles.linear}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <TouchableOpacity onPress={() => navigation.navigate('Celebrations')}>
          <Image source={Chevron} style={styles.chevron} />
        </TouchableOpacity>

        <Image source={Title} style={styles.title} />

        <Text style={styles.text}>
          Станьте участником нашего эксклюзивного события, где каждый игровой
          автомат пачинко представляет собой одну из знаменитых
          достопримечательностей Японии.
        </Text>

        <Image source={MarkerImage} style={styles.marker} />
      </LinearGradient>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
  },
  linear: {
    flex: 1,
    paddingHorizontal: 20,
    width: width,
  },
  chevron: {
    width: 35,
    height: 35,
    alignSelf: 'flex-start',
    marginLeft: 0,
    marginTop: 30,
  },
  title: {
    resizeMode: 'contain',
    width: '100%',
    marginTop: 20,
  },
  text: {
    fontFamily: 'Montserrat-BoldItalic',
    textAlign: 'center',
    color: COLORS.white,
    marginTop: 20,
    fontSize: 16,
  },
  marker: {
    resizeMode: 'contain',
    width: '100%',
    marginTop: 20,
  },
});
