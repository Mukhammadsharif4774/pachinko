import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../images/fresh-and-tasty-.png';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Chevron from '../images/chevron-frame.png';
import Title from '../images/night_title.png';
import {COLORS} from '../helpers/customColor';
import ButtonControl from '../components/ButtonControl';

const {height, width} = Dimensions.get('window');
export default function Sushi() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <LinearGradient
        colors={['#000000', 'rgba(217, 217, 217, 0)', 'rgba(0, 0, 0, 0)']}
        style={styles.linear}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 1}}>
        <TouchableOpacity onPress={() => navigation.navigate('Celebrations')}>
          <Image source={Chevron} style={styles.chevron} />
        </TouchableOpacity>

        <Text style={styles.title}>Пачинко & Суши Ночь</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>30.11.2023-15.12.2023</Text>
        </View>

        <Text style={styles.text}>
          Откройте для себя волшебство Японии в нашем суши-баре! В эту
          уникальную ночь каждый автомат пачинко перенесет вас в разные уголки
          Японии. От Токио до Осаки, каждая игра в пачинко сопровождается
          тематическим суши, вдохновленным регионом.
        </Text>
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
    marginTop: '60%',
    fontFamily: 'Montserrat-ExtraBold',
    color: COLORS.white,
    fontSize: 40,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'left',
    color: COLORS.white,
    marginTop: 30,
    fontSize: 14,
  },
  marker: {
    resizeMode: 'contain',
    width: '100%',
    marginTop: 20,
  },
  button: {
    width: '50%',
    backgroundColor: COLORS.buttonBackground,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    fontFamily: 'Montserrat-BoldItalic',
    color: COLORS.white,
  },
});
