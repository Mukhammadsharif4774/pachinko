import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Background from '../images/a-plate-of-sushi-roll.png';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import Chevron from '../images/chevron-frame.png';
import Star from '../images/star.png';
import {COLORS} from '../helpers/customColor';

const {height, width} = Dimensions.get('window');
export default function Master() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <LinearGradient
        colors={['#000000', 'rgba(217, 217, 217, 0)', 'rgba(0, 0, 0, 0)']}
        style={styles.linear}
        start={{x: 0, y: 0}}
        end={{x: 0, y: 0}}>
        <TouchableOpacity onPress={() => navigation.navigate('Celebrations')}>
          <Image source={Chevron} style={styles.chevron} />
        </TouchableOpacity>

        <Image source={Background} style={styles.background} />

        <Text style={styles.title}>Мастер-класс: Суши-Искусство и Пачинко</Text>

        <View style={styles.button}>
          <Text style={styles.buttonText}>30.11.2023-15.12.2023</Text>
        </View>

        <Image source={Star} style={styles.starFirst} />

        <Image source={Star} style={styles.starSecond} />

        <Text style={styles.text}>
          Откройте для себя искусство приготовления суши в нашем уникальном
          мастер-классе, сочетающемся с волнующей игрой в пачинко. Научитесь
          готовить изысканные роллы от наших опытных шеф-поваров, а затем
          испытайте свою удачу в пачинко, соревнуясь за эксклюзивные призы. Это
          мероприятие объединит вас с другими любителями японской кухни и
          культуры, предложив уникальный опыт и незабываемые воспоминания!
        </Text>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: height,
    backgroundColor: COLORS.white,
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
    marginTop: '2%',
    fontFamily: 'Montserrat-ExtraBold',
    color: COLORS.red,
    fontSize: 30,
  },
  text: {
    fontFamily: 'Montserrat-Bold',
    textAlign: 'left',
    color: COLORS.black,
    marginTop: 30,
    fontSize: 10,
    position: 'absolute',
    bottom: 20,
    left: 20,
    width: '80%',
  },
  marker: {
    resizeMode: 'contain',
    width: '100%',
    marginTop: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
    marginLeft: '-80%',
  },
  buttonText: {
    fontFamily: 'Montserrat-BoldItalic',
    color: COLORS.white,
    fontSize: 20,
    transform: [{rotate: '270deg'}],
    backgroundColor: COLORS.buttonBackground,
    padding: 10,
    borderRadius: 8,
  },
  background: {
    width: width / 1.5,
    resizeMode: 'contain',
    position: 'absolute',
    right: 0,
    top: '-25%',
  },
  starFirst: {
    width: width / 6,
    resizeMode: 'contain',
    position: 'absolute',
    top: '30%',
    left: '12%',
  },
  starSecond: {
    width: width / 6,
    resizeMode: 'contain',
    position: 'absolute',
    bottom: '-40%',
    right: '-2%',
  },
});
