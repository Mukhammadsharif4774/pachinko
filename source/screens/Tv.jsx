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
import Chevron from '../images/chevron-frame.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import Logo from '../images/logo-frame.png';

const {height} = Dimensions.get('window');

export default function Tv() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Chevron} style={styles.chevron} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Спортивные трансляции</Text>

      <View style={styles.main}>
        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>IPL</Text>
            <Text style={styles.time}>14.06 - 00:45</Text>
          </View>

          <View>
            <Text style={styles.description}>Kolkata Knight Raiders</Text>
            <Text style={styles.description}>Royal Challengers Bangalore</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>NHL</Text>
            <Text style={styles.time}>17.06 - 00:10</Text>
          </View>

          <View>
            <Text style={styles.description}>Philadelphia Flyers</Text>
            <Text style={styles.description}>Pittsburgh Penguins</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>NBA</Text>
            <Text style={styles.time}>09.06 - 00:05</Text>
          </View>

          <View>
            <Text style={styles.description}>Golden State Warriors</Text>
            <Text style={styles.description}>Minnesota Timberwolves</Text>
          </View>
        </View>

        <View style={styles.card}>
          <View>
            <Text style={styles.cardTitle}>IPL</Text>
            <Text style={styles.time}>14.06 - 00:45</Text>
          </View>

          <View>
            <Text style={styles.description}>Kolkata Knight Raiders</Text>
            <Text style={styles.description}>Royal Challengers Bangalore</Text>
          </View>
        </View>
      </View>

      <View style={styles.logoContainer}>
        <Image source={Logo} style={styles.logo} />
      </View>
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
  title: {
    paddingHorizontal: 20,
    marginTop: 20,
    fontFamily: 'Montserrat-Bold',
    fontSize: 22,
    color: '#272727',
  },
  logo: {
    aspectRatio: 0.4,
    resizeMode: 'contain',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
    position: 'absolute',
    bottom: -height / 5,
  },
  main: {
    paddingHorizontal: 20,
  },
  card: {
    width: '100%',
    height: 70,
    backgroundColor: '#F4F4F4',
    marginTop: 10,
    borderRadius: 8,
    flexDirection: 'row',
    padding: 8,
  },
  cardTitle: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 30,
    color: COLORS.red,
    letterSpacing: 2,
  },
  time: {
    color: COLORS.black,
    fontFamily: 'Montserrat-Bold',
    fontSize: 10,
  },
  description: {
    marginLeft: 15,
    marginTop: 5,
    fontFamily: 'Montserrat-LightItalic',
    color: '#272727',
  },
});
