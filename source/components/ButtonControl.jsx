import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {COLORS} from '../helpers/customColor';

export default function ButtonControl({text, onPress}) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onPress} style={styles.button}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
    marginTop: 10,
    position: 'absolute',
    bottom: 20,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
    borderRadius: 25,
    width: '100%',
    backgroundColor: COLORS.buttonBackground,
  },
  text: {
    color: COLORS.white,
    fontSize: 16,
    fontFamily: 'Montserrat-BoldItalic',
  },
});
