import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {WHITE_COLOR} from '../../../utils/Colors';
import CustomHeader from './Drawer/CustomHeader';
import SpotCard from '../../../components/SpotCard';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';

function ViewAllSpot() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CustomHeader
        onMenu={() => {
          navigation.openDrawer();
        }}
      />
      <View style={{marginBottom: moderateScale(50)}}>
        <FlatList
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={({item, index}) => {
            return <SpotCard />;
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
});

export default ViewAllSpot;
