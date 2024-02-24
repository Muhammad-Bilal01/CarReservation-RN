import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import DrawerScreen from './Drawer/DrawerScreen';
import CustomDrawer from './Drawer/CustomDrawer';

const Drawer = createDrawerNavigator();

function Main() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Drawer"
        component={DrawerScreen}
        options={{title: 'Spot Vendor', headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default Main;
