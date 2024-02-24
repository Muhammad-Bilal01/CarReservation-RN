import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {moderateScale, moderateVerticalScale} from 'react-native-size-matters';

function CustomSolidButton({title, onPress}) {
  return (
    <TouchableOpacity style={styles.btn} onPress={onPress}>
      <Text
        style={{
          color: 'white',
          fontWeight: '500',
          fontSize: moderateScale(16),
        }}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    width: '100%',
    height: moderateVerticalScale(40),
    backgroundColor: 'blue',
    borderRadius: moderateScale(20),
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: moderateScale(20),
  },
});

export default CustomSolidButton;
