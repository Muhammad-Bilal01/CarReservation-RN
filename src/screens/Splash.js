import {useNavigation} from '@react-navigation/native';
import React, {useEffect} from 'react';

import {View, StyleSheet, Image} from 'react-native';
import {scale} from 'react-native-size-matters';
import {WHITE_COLOR} from '../utils/Colors';

function Splash() {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Login');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require('../res/images/splash.png')}
        style={{
          width: scale(300),
          height: scale(300),
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Splash;
