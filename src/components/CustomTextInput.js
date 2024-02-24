import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';
import {INPUTBOX_COLOR, PRIMARY_COLOR} from '../utils/Colors';

function CustomTextInput({placeholder}) {
  return (
    <View style={styles.input_box}>
      <TextInput
        placeholder={placeholder}
        placeholderTextColor={PRIMARY_COLOR}
        style={styles.text_input}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input_box: {
    marginTop: moderateVerticalScale(10),
    width: '100%',
    height: moderateVerticalScale(40),
    backgroundColor: INPUTBOX_COLOR,
    alignSelf: 'center',
    borderRadius: moderateScale(20),
  },
  text_input: {
    paddingLeft: moderateScale(10),
    color: PRIMARY_COLOR,
  },
});

export default CustomTextInput;
