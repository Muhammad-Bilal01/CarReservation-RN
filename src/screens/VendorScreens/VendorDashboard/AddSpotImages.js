import React, {useState} from 'react';
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {BLACK_COLOR, WHITE_COLOR} from '../../../utils/Colors';
import CustomHeader from './Drawer/CustomHeader';
import {useNavigation} from '@react-navigation/native';
import {
  moderateScale,
  moderateVerticalScale,
  scale,
  verticalScale,
} from 'react-native-size-matters';
import {launchImageLibrary} from 'react-native-image-picker';
import {ScrollView} from 'react-native-gesture-handler';
import CustomSolidButton from '../../../components/CustomSolidButton';

function AddSpotImages() {
  const navigation = useNavigation();
  const [imageList, setImageList] = useState([]);

  const addImage = async () => {
    const result = await launchImageLibrary();
    const image = result.assets[0].uri;

    setImageList([image, ...imageList]);
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        onMenu={() => {
          navigation.openDrawer();
        }}
      />

      <Pressable
        style={styles.imgSection}
        onPress={() => {
          addImage();
        }}>
        <Image
          source={require('../../../res/images/ic_img_slider.png')}
          style={styles.image_select}
        />
        <Image
          source={require('../../../res/images/ic_plus.png')}
          style={styles.plus_icon}
        />
      </Pressable>

      <FlatList
        contentContainerStyle={styles.imgList}
        data={imageList}
        renderItem={({item, index}) => {
          return (
            <View style={styles.imageBox}>
              <Image
                style={{
                  width: moderateScale(200),
                  height: moderateVerticalScale(200),
                  resizeMode: 'contain',
                }}
                source={{uri: item}}
              />
              <TouchableOpacity style={styles.deleteImg}>
                <Image
                  style={{width: scale(20), height: scale(20)}}
                  source={require('../../../res/images/ic_img_delete.png')}
                />
              </TouchableOpacity>
            </View>
          );
        }}
      />
      <View style={{height: moderateScale(80)}}></View>
      <View
        style={{
          position: 'absolute',
          width: '90%',
          bottom: moderateScale(20),
          alignSelf: 'center',
        }}>
        <CustomSolidButton
          title={'Save Spot'}
          onPress={() => {
            navigation.navigate('Drawer');
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
  imgSection: {
    marginTop: moderateScale(20),
    width: '90%',
    height: moderateVerticalScale(150),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image_select: {
    width: scale(180),
    height: verticalScale(130),
  },
  plus_icon: {
    position: 'absolute',
    bottom: moderateScale(10),
    right: moderateScale(10),
    width: scale(20),
    height: scale(20),
  },
  imgList: {
    marginTop: moderateScale(20),
    width: '90%',
    alignSelf: 'center',
  },
  imageBox: {
    width: '90%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  deleteImg: {
    position: 'absolute',
    top: moderateScale(0),
    right: moderateScale(0),
  },
});

export default AddSpotImages;
