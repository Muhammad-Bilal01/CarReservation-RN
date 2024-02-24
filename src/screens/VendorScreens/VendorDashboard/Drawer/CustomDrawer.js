import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {BLACK_COLOR, LINE_COLOR, WHITE_COLOR} from '../../../../utils/Colors';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

function CustomDrawer() {
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <Image
          source={require('../../../../res/images/ic_user.png')}
          style={styles.profile}
        />
        <Text style={styles.userName}>User Name</Text>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.spotView}>
        <Text style={styles.sub_title}>Spot</Text>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemTitle}>Add Spot</Text>
          <Image
            source={require('../../../../res/images/ic_plus.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemTitle}>Update Spot</Text>
          <Image
            source={require('../../../../res/images/ic_update.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemTitle}>Delete Spot</Text>
          <Image
            source={require('../../../../res/images/ic_delete.png')}
            style={styles.icon}
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemTitle}>View All Spot</Text>
          <Image
            source={require('../../../../res/images/ic_view.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.separator}></View>

      <View style={styles.spotView}>
        <Text style={styles.sub_title}>Booking</Text>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemTitle}>View All Bookings</Text>
          <Image
            source={require('../../../../res/images/ic_view.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.separator}></View>
      <View style={styles.spotView}>
        <Text style={styles.sub_title}>Application</Text>

        <TouchableOpacity style={styles.item}>
          <Text style={styles.itemTitle}>Logout</Text>
          <Image
            source={require('../../../../res/images/ic_logout.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  topView: {
    width: '90%',
    marginTop: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'center',
    marginBottom: moderateScale(20),
  },
  profile: {
    width: moderateScale(45),
    height: moderateScale(45),
  },
  userName: {
    color: BLACK_COLOR,
    marginLeft: moderateScale(10),
    fontSize: moderateScale(18),
  },
  separator: {
    width: '90%',
    height: moderateScale(2),
    alignSelf: 'center',
    backgroundColor: LINE_COLOR,
  },
  sub_title: {
    color: BLACK_COLOR,
    marginBottom: moderateScale(20),
  },
  spotView: {
    width: '85%',
    marginTop: moderateScale(10),
    alignSelf: 'center',
  },
  item: {
    height: moderateVerticalScale(40),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  itemTitle: {
    color: BLACK_COLOR,
    fontSize: moderateScale(18),
    fontWeight: '500',
  },
  icon: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
});

export default CustomDrawer;
