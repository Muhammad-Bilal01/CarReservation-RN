import React, {useState} from 'react';
import {BLACK_COLOR, WHITE_COLOR} from '../../../utils/Colors';
import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
} from 'react-native-size-matters';
import CustomSolidButton from '../../../components/CustomSolidButton';
import {launchImageLibrary} from 'react-native-image-picker';

function AddCNIC() {
  const [image, setImage] = useState('');

  const addImage = async () => {
    const result = await launchImageLibrary();
    setImage(result.assets[0].uri);
    console.log(image);
    console.log(result);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add a front view of CNIC</Text>
      <Pressable
        style={styles.imgView}
        onPress={() => {
          addImage();
        }}>
        {image !== '' ? (
          <Image
            source={{uri: image}}
            style={{width: '100%', height: '100%', resizeMode: 'contain'}}
          />
        ) : (
          <Image
            source={require('../../../res/images/img_attach.png')}
            style={styles.image}
          />
        )}
      </Pressable>
      <View style={styles.btnContainer}>
        <CustomSolidButton title={'Complete Registration'} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: WHITE_COLOR,
  },
  title: {
    color: BLACK_COLOR,
    marginTop: moderateScale(20),
    marginLeft: moderateScale(20),
  },
  imgView: {
    marginTop: moderateScale(20),
    width: '90%',
    height: moderateVerticalScale(150),
    alignSelf: 'center',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: scale(100),
    height: scale(100),
  },
  btnContainer: {
    width: '90%',
    alignSelf: 'center',
  },
});

export default AddCNIC;
