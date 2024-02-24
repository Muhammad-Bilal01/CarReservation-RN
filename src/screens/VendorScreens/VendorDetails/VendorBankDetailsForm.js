import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../../utils/Colors';
import {moderateScale} from 'react-native-size-matters';
import CustomSolidButton from '../../../components/CustomSolidButton';
import CustomTextInput from '../../../components/CustomTextInput';
import {useNavigation} from '@react-navigation/native';

function VendorBankDetailsForm() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.detailsForm}>
        <Text style={styles.txt}>
          Where do you want to recieve your payment
        </Text>
        <View style={styles.form}>
          <CustomTextInput placeholder={'Full Name'} />
          <CustomTextInput placeholder={'IBAN number'} />
          <View style={styles.bottomInput}>
            <View style={{width: '48%'}}>
              <CustomTextInput placeholder={'Bank Name'} />
            </View>
            <View style={{width: '48%'}}>
              <CustomTextInput placeholder={'Branch Name'} />
            </View>
          </View>
        </View>
        <CustomSolidButton
          title={'Next'}
          onPress={() => {
            navigation.navigate('AddCNIC');
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
  form: {
    padding: moderateScale(10),
    backgroundColor: '#545454',
    borderRadius: moderateScale(20),
    marginTop: moderateScale(30),
  },
  bottomInput: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

export default VendorBankDetailsForm;
