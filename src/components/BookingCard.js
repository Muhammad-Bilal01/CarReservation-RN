import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  BLACK_COLOR,
  LINE_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from '../utils/Colors';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';

function BookingCard() {
  return (
    <View style={styles.card}>
      <View style={styles.topCard}>
        <Image
          source={require('../res/images/splash.png')}
          style={styles.cardImage}
        />
        <View style={styles.textView}>
          <Text style={styles.cardTitle}>Hasan Qadeer</Text>
          <Text style={styles.card_head2}>Spot # 102</Text>
          <Text style={styles.card_subTitle}>Time Left: 30m</Text>
        </View>
        <Image
          source={require('../res/images/ic_information.png')}
          style={styles.cardIcon}
        />
      </View>
      <View style={styles.separator}></View>
      <View style={styles.timerView}>
        <View style={styles.timing}>
          <Text style={{color: WHITE_COLOR, fontSize: moderateScale(12)}}>
            Arriving
          </Text>
          <Text style={{color: WHITE_COLOR, fontSize: moderateScale(12)}}>
            Today 13:00 am
          </Text>
        </View>
        <View style={styles.centerTime}>
          <View
            style={[styles.separator, {backgroundColor: WHITE_COLOR}]}></View>
          <View
            style={{
              position: 'absolute',
              width: moderateScale(60),
              height: moderateScale(20),
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: moderateScale(20),
              backgroundColor: WHITE_COLOR,
            }}>
            <Text style={{color: PRIMARY_COLOR, fontSize: moderateScale(12)}}>
              1H
            </Text>
          </View>
        </View>
        <View style={styles.timing}>
          <Text style={{color: WHITE_COLOR, fontSize: moderateScale(12)}}>
            Leaving
          </Text>
          <Text style={{color: WHITE_COLOR, fontSize: moderateScale(12)}}>
            Today 14:00 am
          </Text>
        </View>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.carDetails}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Image
            source={require('../res/images/car.png')}
            style={{
              tintColor: WHITE_COLOR,
              width: scale(25),
              height: scale(25),
            }}
          />
          <Text style={{marginLeft: moderateScale(5), color: WHITE_COLOR}}>
            Toyota Carolla
          </Text>
        </View>
        <Text style={{color: WHITE_COLOR}}>BUV786</Text>
        <Text style={{color: WHITE_COLOR}}>2019</Text>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity
          style={{
            width: '45%',
            height: moderateVerticalScale(30),
            backgroundColor: 'green',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: moderateScale(20),
          }}>
          <Text style={{color: WHITE_COLOR}}>Car Parked</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            width: '45%',
            height: moderateVerticalScale(30),
            backgroundColor: 'gray',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: moderateScale(20),
          }}>
          <Text style={{color: WHITE_COLOR}}>Check authenticity</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    marginTop: moderateScale(20),
    width: '90%',
    alignSelf: 'center',
    backgroundColor: BLACK_COLOR,
    borderRadius: moderateScale(20),
    padding: moderateScale(10),
  },
  topCard: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: moderateScale(10),
  },
  cardImage: {
    width: scale(60),
    height: scale(60),
    borderRadius: moderateScale(100),
    resizeMode: 'cover',
  },
  cardIcon: {
    tintColor: WHITE_COLOR,
  },
  textView: {
    alignSelf: 'flex-start',
    flex: 1,
    marginLeft: moderateScale(10),
  },
  cardTitle: {
    fontSize: moderateScale(18),
    color: WHITE_COLOR,
    fontWeight: '500',
  },
  card_head2: {
    color: WHITE_COLOR,
    fontSize: moderateScale(14),
  },
  card_subTitle: {
    color: WHITE_COLOR,
    fontSize: moderateScale(12),
  },
  separator: {
    width: '80%',
    height: moderateScale(2),
    alignSelf: 'center',
    backgroundColor: LINE_COLOR,
  },
  timerView: {
    width: '100%',
    flexDirection: 'row',
    marginVertical: moderateScale(10),
    alignItems: 'center',
  },
  centerTime: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  timing: {
    alignItems: 'center',
  },
  carDetails: {
    marginTop: moderateScale(10),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'space-between',
  },
  btnView: {
    marginTop: moderateScale(20),
    marginBottom: moderateScale(10),
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default BookingCard;
