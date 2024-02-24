import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WHITE_COLOR} from '../../../utils/Colors';
import CustomHeader from './Drawer/CustomHeader';

function ViewAllSpot() {
  return (
    <View style={styles.container}>
      <CustomHeader
        onMenu={() => {
          // navigation.openDrawer();
        }}
      />
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
