import React, {useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomTextInput from '../components/CustomTextInput';
import CustomSolidButton from '../components/CustomSolidButton';
import {
  BLACK_COLOR,
  INPUTBOX_COLOR,
  PRIMARY_COLOR,
  WHITE_COLOR,
} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';

function Signup() {
  const navigation = useNavigation();
  const [toggleUser, setToggleUser] = useState('user');

  const signUp = () => {
    if (toggleUser === 'vendor') {
      navigation.navigate('VendorNavigation');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}>
          <Image
            source={require('../res/images/back_btn.png')}
            style={styles.icon}
          />
        </TouchableOpacity>
      </View>
      <Image source={require('../res/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Spot Holder</Text>
      <View style={styles.loginBox}>
        <Text style={styles.loginTxt}>Create your account</Text>
        <CustomTextInput placeholder={'Email'} />
        <CustomTextInput placeholder={'Passcode'} />
        <CustomTextInput placeholder={'Confirm Passcode'} />
        <CustomSolidButton
          title="Sign up"
          onPress={() => {
            signUp();
          }}
        />
      </View>
      <View style={styles.bottomView}>
        <TouchableOpacity
          style={[
            styles.toggleBtn,
            {backgroundColor: toggleUser === 'user' ? PRIMARY_COLOR : null},
          ]}
          onPress={() => setToggleUser('user')}>
          <Text
            style={{
              color: toggleUser === 'user' ? WHITE_COLOR : BLACK_COLOR,
            }}>
            I want to Park
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.toggleBtn,
            {backgroundColor: toggleUser === 'vendor' ? PRIMARY_COLOR : null},
          ]}
          onPress={() => setToggleUser('vendor')}>
          <Text
            style={{
              color: toggleUser === 'vendor' ? WHITE_COLOR : BLACK_COLOR,
            }}>
            I will provide parking
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    alignItems: 'center',
  },
  topView: {
    marginTop: moderateVerticalScale(10),
    width: '100%',
    height: moderateVerticalScale(40),
    justifyContent: 'center',
  },
  icon: {
    marginLeft: moderateScale(10),
    width: scale(30),
    height: scale(30),
  },
  logo: {
    width: scale(200),
    height: scale(150),
  },
  title: {
    color: BLACK_COLOR,
    fontSize: moderateScale(30),
    fontWeight: '600',
  },
  loginBox: {
    marginTop: moderateVerticalScale(30),
    width: '90%',
    alignSelf: 'center',
  },
  loginTxt: {
    marginBottom: moderateScale(10),
    color: BLACK_COLOR,
    fontSize: moderateScale(16),
  },
  bottomView: {
    marginTop: moderateVerticalScale(100),
    width: '90%',
    height: moderateVerticalScale(40),
    backgroundColor: INPUTBOX_COLOR,
    alignSelf: 'center',
    borderRadius: moderateScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleBtn: {
    width: '50%',
    height: '100%',
    borderRadius: moderateScale(20),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default Signup;
