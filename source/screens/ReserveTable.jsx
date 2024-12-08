import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Chevron from '../images/chevron-frame.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import ButtonControl from '../components/ButtonControl';

export default function ReserveTable() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Chevron} style={styles.chevron} />
        </TouchableOpacity>
      </View>

      <Text style={styles.title}>Резерв столика</Text>

      <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder={'Имя'}
          placeholderTextColor={'rgba(39, 39, 39, 0.6)'}
        />

        <TextInput
          style={styles.input}
          placeholder={'Фамилия'}
          placeholderTextColor={'rgba(39, 39, 39, 0.6)'}
        />

        <TextInput
          style={styles.input}
          placeholder={'Email'}
          placeholderTextColor={'rgba(39, 39, 39, 0.6)'}
        />

        <TextInput
          style={styles.input}
          placeholder={'Дата'}
          placeholderTextColor={'rgba(39, 39, 39, 0.6)'}
        />
      </View>

      <ButtonControl
        text={'Зарезервировать'}
        onPress={() => navigation.navigate('Reserve')}
      />
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
    fontFamily: 'Montserrat-ExtraBold',
    fontSize: 28,
    color: '#272727',
  },
  main: {
    paddingHorizontal: 20,
  },
  input: {
    width: '100%',
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
    height: 50,
    paddingLeft: 10,
    fontFamily: 'Montserrat-LightItalic',
    marginTop: 15,
  },
});
