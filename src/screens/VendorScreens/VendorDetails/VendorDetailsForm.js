import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';
import CustomTextInput from '../../../components/CustomTextInput';
import CustomSolidButton from '../../../components/CustomSolidButton';
import {useNavigation} from '@react-navigation/native';

function VendorDetailsForm() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.detailsForm}>
        <Text style={styles.txt}>Let's know you better</Text>
        <CustomTextInput placeholder={'Full Name'} />
        <CustomTextInput placeholder={'CNIC'} />
        <CustomTextInput placeholder={'Mobile Number'} />
        <CustomTextInput placeholder={'Address'} />
        <CustomSolidButton
          title="Next"
          onPress={() => {
            navigation.navigate('VendorBankDetails');
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  detailsForm: {
    width: '90%',
    alignSelf: 'center',
    marginTop: moderateScale(20),
  },
  txt: {
    color: BLACK_COLOR,
    fontSize: moderateScale(16),
  },
});

export default VendorDetailsForm;
