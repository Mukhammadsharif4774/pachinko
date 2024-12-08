import React from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from 'react-native';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';

// Screens
import Main from './screens/Main';
import Cabas from './screens/Cabas';
import Celebrations from './screens/Celebrations';
import Challange from './screens/Challange';
import Master from './screens/Master';
import Order from './screens/Order';
import Pachinko from './screens/Pachinko';
import PhoneNumbers from './screens/PhoneNumbers';
import Reserve from './screens/Reserve';
import ReserveTable from './screens/ReserveTable';
import Sprint from './screens/Sprint';
import Sushi from './screens/Sushi';
import Tv from './screens/Tv';

// Assets and Helpers
import {COLORS} from './helpers/customColor';
import Logo from './images/logo-frame.png';
import Parcel from './images/basket-frame.png';

const {width, height} = Dimensions.get('window');
const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="DrawerNavigator"
          component={DrawerNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {width},
        headerShown: false,
      }}
      drawerContent={props => <CustomDrawerNavigator {...props} />}>
      {drawerScreens.map(screen => (
        <Drawer.Screen
          key={screen.name}
          name={screen.name}
          component={screen.component}
        />
      ))}
    </Drawer.Navigator>
  );
}

const drawerScreens = [
  {name: 'Main', component: Main},
  {name: 'Cabas', component: Cabas},
  {name: 'Celebrations', component: Celebrations},
  {name: 'Challange', component: Challange},
  {name: 'Master', component: Master},
  {name: 'Order', component: Order},
  {name: 'Pachinko', component: Pachinko},
  {name: 'PhoneNumbers', component: PhoneNumbers},
  {name: 'Reserve', component: Reserve},
  {name: 'ReserveTable', component: ReserveTable},
  {name: 'Sprint', component: Sprint},
  {name: 'Sushi', component: Sushi},
  {name: 'Tv', component: Tv},
];

function CustomDrawerNavigator(props) {
  const navigation = useNavigation();

  const drawerItems = [
    {label: 'Главная', screen: 'Main'},
    {label: 'Корзина', screen: 'Cabas'},
    {label: 'Транслации', screen: 'Tv'},
    {label: 'События', screen: 'Celebrations'},
    {label: 'Контакты', screen: 'PhoneNumbers'},
    {label: 'Резерв столика', screen: 'ReserveTable'},
  ];

  return (
    <DrawerContentScrollView {...props} scrollEnabled={false}>
      <View style={styles.container}>
        {/* Header Section */}
        <View style={styles.closeIconContainer}>
          <TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
            {/* Placeholder for Close Icon */}
          </TouchableOpacity>
        </View>
        <View style={styles.header}>
          <Image source={Logo} style={styles.drawerLogo} />
        </View>

        {/* Drawer Items */}
        <View style={styles.mainContainer}>
          {drawerItems.map(item => (
            <DrawerItem
              key={item.screen}
              label={item.label}
              screen={item.screen}
            />
          ))}
        </View>

        {/* Footer Section */}
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('DrawerNavigator', {screen: 'Cabas'})
          }>
          <View>
            <Image source={Parcel} style={styles.basket} />
          </View>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

function DrawerItem({label, screen}) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('DrawerNavigator', {screen})}
      style={styles.drawerItem}>
      <Text style={styles.itemText}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 60,
  },
  mainContainer: {
    width: '100%',
    alignItems: 'center',
  },
  drawerItem: {
    width: '85%',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 10,
    borderRadius: 25,
    borderWidth: 1.5,
    borderColor: COLORS.drawerItem,
    backgroundColor: COLORS.drawerItem,
    alignItems: 'center',
    justifyContent: 'center',
  },
  itemText: {
    color: COLORS.white,
    fontWeight: '500',
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
  },
  closeIconContainer: {
    position: 'absolute',
    left: 20,
    bottom: 40,
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: height / 3,
  },
  drawerLogo: {
    aspectRatio: 0.3,
    resizeMode: 'contain',
  },
  basket: {
    width: 60,
    height: 60,
    marginTop: 20,
  },
});
