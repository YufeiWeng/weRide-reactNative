import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Auth/Login';
import Signup from '../screens/Auth/Signup';
import Verification from '../screens/Auth/Verification';
import RoleSelect from '../screens/Auth/RoleSelect';
import ForgetPassword from '../screens/Auth/ForgetPassword';
import VerificationSuccess from '../screens/Auth/VerificationSuccess';
import CreatePassword from '../screens/Auth/CreatePassword';
import OnBoarding from '../screens/Auth/OnBoarding/index';
import GetStarted from '../screens/Auth/GetStarted';
import LocationAndNotification from '../screens/Auth/LocationAndNotification/index';
import LocationAndNotification1 from '../screens/Auth/LocationAndNotification/index1';
import Teleport from '../screens/teleport';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Colors} from '../constants/colors';
import Activity from '../screens/Main/Activity';
import TripDetails from '../screens/Main/TripDetails';
import CardInfo from '../screens/Main/CardInfo';
import CardSelection from '../screens/Main/CardSelection';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
export const AuthContext = React.createContext();
const ActivityNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="ActivityList" component={Activity} />
      <Stack.Screen name="TripDetails" component={TripDetails} />
    </Stack.Navigator>
  );
};
const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          switch (route.name) {
            case 'Home':
              return <Octicons name="home" size={size} color={color} />;
            case 'Activity':
              return (
                <Ionicons name="ios-list-outline" size={size} color={color} />
              );
            case 'Profile':
              return (
                <Ionicons name="ios-person-outline" size={size} color={color} />
              );
          }
        },
        tabBarInactiveTintColor: Colors.TAB_INACTIVE,
        tabBarActiveTintColor: Colors.TAB_ACTIVE,
        headerShown: false,
      })}>
      <Tab.Screen name="Home" component={Signup} />
      <Tab.Screen name="Activity" component={ActivityNavigator} />
      <Tab.Screen name="Profile" component={Login} />
    </Tab.Navigator>
  );
};

const Navigation = () => {
  let authContext = null;

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Teleport" component={Teleport} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Verification" component={Verification} />
          <Stack.Screen name="ForgetPassword" component={ForgetPassword} />
          <Stack.Screen name="RoleSelect" component={RoleSelect} />
          <Stack.Screen name="CreatePassword" component={CreatePassword} />
          <Stack.Screen name="OnBoarding" component={OnBoarding} />
          <Stack.Screen name="GetStarted" component={GetStarted} />
          <Stack.Screen name="CardInfo" component={CardInfo} />
          <Stack.Screen name="CardSelection" component={CardSelection} />
          <Stack.Screen
            name="LocationAndNotification"
            component={LocationAndNotification}
          />
          <Stack.Screen
            name="LocationAndNotification1"
            component={LocationAndNotification1}
          />
          <Stack.Screen
            name="VerificationSuccess"
            component={VerificationSuccess}
          />
          <Stack.Screen name="Main" component={TabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Navigation;