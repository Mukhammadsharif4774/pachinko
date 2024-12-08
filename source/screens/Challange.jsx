import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import Background from '../images/4235094.png';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Chevron from '../images/chevron-frame.png';
import {COLORS} from '../helpers/customColor';

const {height, width} = Dimensions.get('window');
export default function Challange() {
  const navigation = useNavigation();
  return (
    <ImageBackground source={Background} style={styles.container}>
      <LinearGradient
        colors={['#000000', 'rgba(217, 217, 217, 0)', 'rgba(0, 0, 0, 0)']}
        style={styles.linear}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0}}>
        <TouchableOpacity onPress={() => navigation.navigate('Celebrations')}>
          <Image source={Chevron} style={styles.chevron} />
        </TouchableOpacity>

        <Text style={styles.text}>
          Присоединяйтесь к нашему Пачинко Празднику, где вы не только
          насладитесь игрой в пачинко, но и сможете принять участие в
          захватывающем Суши Челлендже! В этот вечер пачинко и суши соединятся:
          выигрывайте в пачинко и получайте шанс участвовать в конкурсе по
          быстрому поеданию суши. Победители челленджа получат специальные призы
          и скидки. Впереди вас ждут азарт, вкусные блюда и много веселья!
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
    position: 'absolute',
    bottom: 20,
    left: 20,
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
