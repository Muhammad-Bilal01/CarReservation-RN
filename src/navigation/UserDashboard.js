import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Main from '../screens/UserScreen/UserDashboard/Main';

const Stack = createStackNavigator();
function UserDashboard() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Main"
        component={Main}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default UserDashboard;
