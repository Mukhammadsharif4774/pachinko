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
import Logo from '../images/logo-frame.png';
import Parcel from '../images/basket-frame.png';
import {useNavigation} from '@react-navigation/native';
import {COLORS} from '../helpers/customColor';
import Chevron from '../images/chevron-frame.png';

const {height} = Dimensions.get('window');

export default function Celebrations() {
  const navigation = useNavigation();

  const DrawerItem = ({title, route}) => (
    <TouchableOpacity
      onPress={() => navigation.navigate(route)}
      style={styles.drawerItem}>
      <Text style={styles.itemText}>{title}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        {/* Back Navigation */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={Chevron} style={styles.chevron} />
        </TouchableOpacity>

        {/* Placeholder for a close icon (if needed in the future) */}
        <View style={styles.closeIconContainer}>
          {/* Uncomment and provide the 'Close' image if needed */}
          {/* <TouchableOpacity onPress={() => navigation.closeDrawer()}>
            <Image source={Close} style={styles.close} />
          </TouchableOpacity> */}
        </View>

        {/* Header Section with Logo */}
        <View style={styles.header}>
          <Image source={Logo} style={styles.drawerLogo} />
        </View>

        {/* Main Navigation Options */}
        <View style={styles.mainContainer}>
          <DrawerItem title="Марафон" route="Sprint" />
          <DrawerItem title="Ночь Пачинко" route="Pachinko" />
          <DrawerItem title="Вечер суши" route="Sushi" />
          <DrawerItem title="Суши-Челлендж" route="Challange" />
          <DrawerItem title="Мастер-Класс" route="Master" />
        </View>

        {/* Navigate to Basket */}
        <TouchableOpacity onPress={() => navigation.navigate('Cabas')}>
          <View style={{alignItems: 'center'}}>
            <Image source={Parcel} style={styles.basket} />
          </View>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    height: height - (height / 100) * 6,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingBottom: 60,
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  drawerItem: {
    width: '85%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: COLORS.drawerItem,
    backgroundColor: COLORS.drawerItem,
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  header: {
    width: '100%',
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 3,
  },
  drawerLogo: {
    aspectRatio: 0.4,
    resizeMode: 'contain',
  },
  basket: {
    width: 60,
    height: 60,
    marginTop: 20,
  },
  chevron: {
    width: 35,
    height: 35,
    alignSelf: 'flex-start',
    marginLeft: 20,
    marginTop: 20,
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  close: {
    width: 40,
    height: 40,
  },
});
