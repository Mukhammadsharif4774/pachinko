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
import Logo from '../images/logo-frame.png';

export default function PhoneNumbers() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Chevron} style={styles.chevron} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>Контакты</Text>
      </View>

      <View style={styles.main}>
        <TextInput
          style={styles.input}
          placeholder={'Адрес'}
          placeholderTextColor={'rgba(39, 39, 39, 0.8)'}
          editable={false}
        />

        <TextInput
          style={styles.input}
          placeholder={'Город'}
          placeholderTextColor={'rgba(39, 39, 39, 0.8)'}
          editable={false}
        />

        <View style={styles.inputRow}>
          <TextInput
            style={styles.halfInput}
            placeholder={'Телефон'}
            placeholderTextColor={'rgba(39, 39, 39, 0.8)'}
            editable={false}
          />

          <TextInput
            style={styles.halfInput}
            placeholder={'Индекс'}
            placeholderTextColor={'rgba(39, 39, 39, 0.8)'}
            editable={false}
          />
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
  headerTitle: {
    textAlign: 'center',
    width: '75%',
    fontFamily: 'Montserrat-Bold',
    fontSize: 15,
  },
  main: {
    paddingHorizontal: 20,
    marginTop: 30,
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
  halfInput: {
    width: '48%',
    backgroundColor: '#F4F4F4',
    borderRadius: 4,
    height: 50,
    paddingLeft: 10,
    fontFamily: 'Montserrat-LightItalic',
    marginTop: 15,
  },
  inputRow: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  logo: {
    aspectRatio: 0.4,
    resizeMode: 'contain',
  },
  logoContainer: {
    width: '100%',
    alignItems: 'center',
  },
});
