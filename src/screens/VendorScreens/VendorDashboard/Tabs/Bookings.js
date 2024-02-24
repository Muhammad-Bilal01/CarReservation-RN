import React from 'react';
import {StyleSheet, View} from 'react-native';
import {WHITE_COLOR} from '../../../../utils/Colors';

import BookingCard from '../../../../components/BookingCard';

function Bookings() {
  return (
    <View style={styles.container}>
      <BookingCard />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: WHITE_COLOR},
});

export default Bookings;
