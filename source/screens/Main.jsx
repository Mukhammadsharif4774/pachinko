import React, {useContext, useState} from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Burger from '../images/burger.png';
import Parcel from '../images/basket-frame-2.png';
import Category1 from '../images/category1.png';
import Category2 from '../images/category2.png';
import Category3 from '../images/category3.png';
import Category4 from '../images/category4.png';
import Category5 from '../images/category5.png';
import {COLORS} from '../helpers/customColor';
import {producs} from '../products/producs';
import Card from '../components/Card';
import {GlobalContext} from '../contexts/GlobalContext';

export default function Main() {
  const navigation = useNavigation();
  const [cat, setCat] = useState(0);
  const [title, setTitle] = useState('Cуши');
  const {refresh, setRefresh} = useContext(GlobalContext);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image source={Burger} style={styles.burger} />
        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Cabas')}>
          <Image source={Parcel} style={styles.parcel} />
        </TouchableOpacity>
      </View>

      <View style={styles.header}>
        <Text style={styles.headerTitle}>Категория</Text>

        <View style={styles.categoryContainer}>
          <TouchableOpacity
            onPress={() => {
              setCat(0);
              setTitle('Суши');
              setRefresh(!refresh);
            }}>
            <Image source={Category1} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Суши</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setCat(1);
              setTitle('Супы');
              setRefresh(!refresh);
            }}>
            <Image source={Category2} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Супы</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setCat(2);
              setTitle('Закуски');
              setRefresh(!refresh);
            }}>
            <Image source={Category3} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Закуски</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setCat(3);
              setTitle('Салаты');
              setRefresh(!refresh);
            }}>
            <Image source={Category4} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Салаты</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setCat(4);
              setTitle('Десерты');
              setRefresh(!refresh);
            }}>
            <Image source={Category5} style={styles.categoryImage} />
            <Text style={styles.categoryText}>Десерты</Text>
          </TouchableOpacity>
        </View>
      </View>

      <Text style={styles.title}>{title}</Text>

      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <ScrollView
          contentContainerStyle={styles.scrollView}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {producs[cat].slice(0, 3).map((item, index) => (
            <Card item={item} key={item.name} />
          ))}
        </ScrollView>

        <ScrollView
          contentContainerStyle={styles.scrollView}
          horizontal={true}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {producs[cat].slice(3).map((item, index) => (
            <Card item={item} key={item.name} />
          ))}
        </ScrollView>
      </ScrollView>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  burger: {
    width: 35,
    height: 25,
  },
  parcel: {
    width: 35,
    height: 35,
  },
  header: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  headerTitle: {
    fontFamily: 'Montserrat-Bold',
  },
  categoryContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
  },
  categoryImage: {
    width: 55,
    height: 55,
  },
  categoryText: {
    textAlign: 'center',
    color: '#272727',
    fontFamily: 'Montserrat-LightItalic',
    fontSize: 13,
  },
  title: {
    color: COLORS.red,
    fontFamily: 'Montserrat-Bold',
    fontSize: 16,
    paddingHorizontal: 20,
    marginTop: 30,
  },
  scrollView: {
    paddingVertical: 20,
  },
});
