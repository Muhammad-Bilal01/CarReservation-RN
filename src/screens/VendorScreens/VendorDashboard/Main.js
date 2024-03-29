import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View} from 'react-native';
import DrawerScreen from './Drawer/DrawerScreen';
import CustomDrawer from './Drawer/CustomDrawer';
import {createStackNavigator} from '@react-navigation/stack';
import AddSpot from './AddSpot';
import AddSpotImages from './AddSpotImages';
import ViewAllSpot from './ViewAllSpot';
import DeleteSpot from './DeleteSpot';
import UpdateSpot from './UpdateSpot';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Main() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen
        name="Drawer"
        component={DrawerScreen}
        options={{title: 'Spot Vendor', headerShown: false}}
      />
      <Drawer.Screen
        name="AddSpot"
        component={AddSpot}
        options={{title: 'Spot Vendor', headerShown: false}}
      />
      <Drawer.Screen
        name="AddSpotImages"
        component={AddSpotImages}
        options={{title: 'Spot Vendor', headerShown: false}}
      />
      <Drawer.Screen
        name="ViewAllSpot"
        component={ViewAllSpot}
        options={{title: 'Spot Vendor', headerShown: false}}
      />
      <Drawer.Screen
        name="DeleteSpot"
        component={DeleteSpot}
        options={{title: 'Spot Vendor', headerShown: false}}
      />

      <Drawer.Screen
        name="UpdateSpot"
        component={UpdateSpot}
        options={{title: 'Spot Vendor', headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default Main;
