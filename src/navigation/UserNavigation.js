import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {View} from 'react-native';
import UserDetailsForm from '../screens/UserScreen/UserDetails/UserDetailsForm';
import UserDashboard from './UserDashboard';

const Stack = createStackNavigator();
function UserNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'UserDetailsForm'}
        component={UserDetailsForm}
        options={{title: 'Spot Holder'}}
      />
      <Stack.Screen
        name="UserDashboardNavigator"
        component={UserDashboard}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default UserNavigation;
