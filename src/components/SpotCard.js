import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {
  BLACK_COLOR,
  INPUTBOX_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from '../utils/Colors';

function SpotCard() {
  return (
    <View style={styles.card}>
      <View
        style={{
          width: moderateScale(80),
          height: moderateVerticalScale(90),
          resizeMode: 'cover',
          overflow: 'hidden',
          borderRadius: moderateScale(10),
          marginRight: moderateScale(10),
        }}>
        <Image
          source={require('../res/images/splash.png')}
          style={styles.card_img}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <View>
          <Text style={styles.card_title}>Fleet Parking Area</Text>
          <Text style={styles.card_desc}>123 Road Karachi</Text>
          <Text
            style={[styles.card_desc, {color: BLACK_COLOR, fontWeight: '500'}]}>
            5 slots available
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{gap: 5, flexDirection: 'row'}}>
            <Image
              source={require('../res/images/car.png')}
              style={{width: scale(20), height: scale(20)}}
            />
            <Image
              source={require('../res/images/car.png')}
              style={{width: scale(20), height: scale(20)}}
            />
          </View>
          <TouchableOpacity style={styles.card_btn}>
            <Text style={styles.btn_text}>Details</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: moderateScale(10),
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: moderateScale(10),
    backgroundColor: INPUTBOX_COLOR,
    marginBottom: moderateScale(10),
  },
  card_img: {
    width: '100%',
    height: '100%',
  },
  card_title: {
    color: PRIMARY_COLOR,
    fontSize: moderateScale(16),
    fontWeight: '500',
  },
  card_desc: {
    color: PRIMARY_COLOR,
    fontSize: moderateScale(12),
  },
  card_btn: {
    width: moderateScale(100),
    height: moderateVerticalScale(30),
    backgroundColor: BLACK_COLOR,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: moderateScale(20),
    padding: moderateScale(5),
  },
  btn_text: {
    color: WHITE_COLOR,
  },
});

export default SpotCard;
