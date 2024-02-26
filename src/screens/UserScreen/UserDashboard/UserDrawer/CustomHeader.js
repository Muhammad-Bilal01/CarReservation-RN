import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import {BLACK_COLOR, WHITE_COLOR} from '../../../../utils/Colors';
import {TouchableOpacity} from 'react-native-gesture-handler';

function CustomHeader({onMenu}) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenu}>
        <Image
          source={require('../../../../res/images/menu.png')}
          style={[styles.icon, styles.menu]}
        />
      </TouchableOpacity>
      <Text style={styles.title}>Spot Vendor</Text>
      <TouchableOpacity>
        <Image
          source={require('../../../../res/images/profile-user.png')}
          style={[styles.icon, styles.profile]}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: moderateVerticalScale(45),
    backgroundColor: WHITE_COLOR,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: BLACK_COLOR,
    fontSize: moderateScale(18),
  },
  icon: {
    width: scale(25),
    height: scale(25),
  },
  menu: {
    marginLeft: moderateScale(15),
  },
  profile: {
    marginRight: moderateScale(15),
  },
});

export default CustomHeader;
