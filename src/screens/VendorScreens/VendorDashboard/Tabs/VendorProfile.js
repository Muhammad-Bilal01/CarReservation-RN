import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';

function VendorProfile() {
  const data = [
    {
      title: 'Full Name',
      value: 'Hassan Qadeer',
    },
    {
      title: 'Identity Number',
      value: '420111-7123456-2',
    },
    {
      title: 'Email',
      value: 'hassanqadeer@gmail.com',
    },
    {
      title: 'Address',
      value: '123 Road Karachi',
    },
  ];

  return (
    <View style={styles.container}>
      <Text
        style={{
          color: BLACK_COLOR,
          fontSize: moderateScale(18),
          marginLeft: moderateScale(20),
          marginTop: moderateScale(10),
        }}>
        Personal Information
      </Text>

      <FlatList
        style={{flexGrow: 0, marginBottom: moderateScale(10)}}
        data={data}
        renderItem={({item, index}) => (
          <View style={styles.contactCard}>
            <Text style={{color: WHITE_COLOR}}>{item.title}</Text>
            <Text style={{color: WHITE_COLOR}}>{item.value}</Text>
          </View>
        )}
      />
      <Text
        style={{
          color: BLACK_COLOR,
          fontSize: moderateScale(18),
          marginLeft: moderateScale(20),
          marginTop: moderateScale(20),
        }}>
        Payment Methods
      </Text>
      <View style={styles.contactCard}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <View style={{width: '45%'}}>
            <View style={{marginBottom: moderateScale(10)}}>
              <Text style={{color: WHITE_COLOR}}>Account Title</Text>
              <Text style={{color: WHITE_COLOR}}>Hassan Qadeer</Text>
            </View>
            <View>
              <Text style={{color: WHITE_COLOR}}>Account Title</Text>
              <Text style={{color: WHITE_COLOR}}>Hassan Qadeer</Text>
            </View>
          </View>
          <Text
            style={{
              width: '45%',
              fontSize: moderateScale(20),
              color: WHITE_COLOR,
            }}>
            Bank AL Habib
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: WHITE_COLOR},
  contactCard: {
    marginTop: moderateScale(10),
    backgroundColor: '#0C1840',
    width: '90%',
    borderRadius: moderateScale(20),
    alignSelf: 'center',
    padding: moderateScale(8),
  },
});
export default VendorProfile;
