import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';
import CustomUserDrawer from './UserDrawer/CustomUserDrawer';
import UserDrawerScreen from './UserDrawer/UserDrawerScreen';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function Main() {
  return (
    <Drawer.Navigator drawerContent={props => <CustomUserDrawer {...props} />}>
      <Drawer.Screen
        name="UserDrawer"
        component={UserDrawerScreen}
        options={{title: 'Spot User', headerShown: false}}
      />
    </Drawer.Navigator>
  );
}

export default Main;
