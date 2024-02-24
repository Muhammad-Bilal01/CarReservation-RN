import React from 'react';
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
import {BLACK_COLOR, PRIMARY_COLOR, WHITE_COLOR} from '../utils/Colors';
import {useNavigation} from '@react-navigation/native';

function Login() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../res/images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>Spot Holder</Text>
      <View style={styles.loginBox}>
        <Text style={styles.loginTxt}>Login to your account</Text>
        <CustomTextInput placeholder={'Email'} />
        <CustomTextInput placeholder={'Passcode'} />
        <CustomSolidButton title="Login" onPress={() => {}} />
      </View>
      <View style={styles.bottomView}>
        <Text style={styles.bottomTxt}>Don't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text
            style={[
              styles.bottomTxt,
              {marginLeft: moderateScale(5), color: PRIMARY_COLOR},
            ]}>
            Signup
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
  logo: {
    marginTop: moderateScale(30),
    width: scale(200),
    height: scale(150),
  },
  title: {
    color: BLACK_COLOR,
    fontSize: moderateScale(30),
    fontWeight: '600',
  },
  loginBox: {
    marginTop: moderateVerticalScale(50),
    width: '90%',
    alignSelf: 'center',
  },
  loginTxt: {
    marginBottom: moderateScale(10),
    color: BLACK_COLOR,
    fontSize: moderateScale(16),
  },
  bottomView: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateVerticalScale(180),
  },
  bottomTxt: {
    color: BLACK_COLOR,
    fontSize: moderateScale(16),
    fontWeight: '400',
  },
});
export default Login;
