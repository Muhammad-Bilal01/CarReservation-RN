import {useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {
  BLACK_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from '../../../../utils/Colors';
import CustomHeader from './CustomHeader';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import Home from '../Tabs/Home';

function UserDrawerScreen() {
  const navigation = useNavigation();
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      <CustomHeader
        onMenu={() => {
          navigation.openDrawer();
        }}
      />

      {selectedTab === 0 ? (
        <Home />
      ) : selectedTab === 1 ? (
        <View></View>
      ) : (
        <View></View>
      )}

      <View style={styles.bottomView}>
        <TouchableOpacity
          style={[
            styles.tab,
            {
              borderTopWidth: selectedTab === 0 ? 2 : 0,
              borderColor: PRIMARY_COLOR,
            },
          ]}
          onPress={() => {
            setSelectedTab(0);
          }}>
          <Image
            style={[
              styles.bottomIcon,
              {tintColor: selectedTab === 0 ? PRIMARY_COLOR : BLACK_COLOR},
            ]}
            source={require('../../../../res/images/home.png')}
          />
          <Text style={styles.bottomText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            {
              borderTopWidth: selectedTab === 1 ? 2 : 0,
              borderColor: PRIMARY_COLOR,
            },
          ]}
          onPress={() => {
            setSelectedTab(1);
          }}>
          <Image
            style={[
              styles.bottomIcon,
              {tintColor: selectedTab === 1 ? PRIMARY_COLOR : BLACK_COLOR},
            ]}
            source={require('../../../../res/images/booking.png')}
          />
          <Text style={styles.bottomText}>Bookings</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.tab,
            {
              borderTopWidth: selectedTab === 2 ? 2 : 0,
              borderColor: PRIMARY_COLOR,
            },
          ]}
          onPress={() => {
            setSelectedTab(2);
          }}>
          <Image
            style={[
              styles.bottomIcon,
              {tintColor: selectedTab === 2 ? PRIMARY_COLOR : BLACK_COLOR},
            ]}
            source={require('../../../../res/images/user.png')}
          />
          <Text style={styles.bottomText}>Profile</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: WHITE_COLOR},
  bottomView: {
    width: '100%',
    height: moderateVerticalScale(55),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    position: 'absolute',
    bottom: 0,
  },
  tab: {
    width: moderateScale(45),
    height: '90%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomIcon: {
    width: scale(25),
    height: scale(25),
  },
  bottomText: {
    color: BLACK_COLOR,
    fontSize: moderateScale(10),
  },
});

export default UserDrawerScreen;
