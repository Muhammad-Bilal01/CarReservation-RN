import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import VendorDetailsForm from '../screens/VendorScreens/VendorDetails/VendorDetailsForm';
import VendorBankDetailsForm from '../screens/VendorScreens/VendorDetails/VendorBankDetailsForm';
import AddCNIC from '../screens/VendorScreens/VendorDetails/AddCNIC';
import VendorDashboardNavigator from './VendorDashboardNavigator';

const Stack = createStackNavigator();

function VendorNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'VendorDetails'}
        component={VendorDetailsForm}
        options={{title: 'Spot Holder'}}
      />
      <Stack.Screen
        name={'VendorBankDetails'}
        component={VendorBankDetailsForm}
        options={{title: 'Spot Holder'}}
      />
      <Stack.Screen
        name={'AddCNIC'}
        component={AddCNIC}
        options={{title: 'Spot Holder'}}
      />
      <Stack.Screen
        name="DashboardNavigator"
        component={VendorDashboardNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default VendorNavigation;
