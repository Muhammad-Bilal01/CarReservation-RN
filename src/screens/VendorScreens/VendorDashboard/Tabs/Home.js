import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../../../utils/Colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <View
        style={{
          width: '90%',
          marginTop: moderateVerticalScale(40),
          alignSelf: 'center',
          flexDirection: 'row',
          gap: moderateScale(20),
        }}>
        <View style={{gap: moderateScale(20)}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('AddSpot');
            }}>
            <Image source={require('../../../../res/images/add_spot.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('DeleteSpot');
            }}>
            <Image source={require('../../../../res/images/delete_spot.png')} />
          </TouchableOpacity>
        </View>
        <View style={{gap: moderateScale(20)}}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('UpdateSpot');
            }}>
            <Image source={require('../../../../res/images/update_spot.png')} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ViewAllSpot');
            }}>
            <Image source={require('../../../../res/images/view_spot.png')} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: WHITE_COLOR},
  title: {
    marginTop: moderateScale(25),
    color: BLACK_COLOR,
    fontSize: moderateScale(35),
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  dashView: {},
});

export default Home;
