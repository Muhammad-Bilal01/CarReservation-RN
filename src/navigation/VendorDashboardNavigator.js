import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import Main from '../screens/VendorScreens/VendorDashboard/Main';

const Stack = createStackNavigator();
function VendorDashboardNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default VendorDashboardNavigator;
