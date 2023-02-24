import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Verification from '../screens/Verification';
import {getJWTToken, setJWTToken} from '../utils/jwt';
import Home from '../screens/Home';
import {API_BASE_URL} from '../constants';
import axios from 'axios';
import {Alert} from 'react-native';
import {authInit, authReducer} from '../reducers/auth';
import VerificationSuccess from '../screens/VerificationSuccess';
import Createpw from '../screens/Createpw';

const Stack = createNativeStackNavigator();
export const AuthContext = React.createContext();
const Navigation = () => {
  const [state, dispatch] = React.useReducer(authReducer, authInit);

  React.useEffect(() => {
    const bootstrapAsync = async () => {
      let userToken;

      try {
        const credential = await getJWTToken();
        if (credential) {
          userToken = credential.password;
        } else {
          // setIsLogged(false);
        }
      } catch (e) {
        // Restoring token failed
      }

      dispatch({type: 'RESTORE_TOKEN', token: userToken});
    };

    bootstrapAsync();
  }, []);

  const authContext = React.useMemo(
    () => ({
      signIn: async data => {
        try {
          const url = API_BASE_URL + '/user-service/login';
          const response = await axios.post(url, {
            email: data.email,
            password: data.password,
          });
          await setJWTToken(response.data);

          // TODO: if activated, to Home, otherwise to verification
          dispatch({type: 'SIGN_IN', token: response.data});
        } catch (e) {
          Alert.alert('Oops', e.response.data);
        }
      },
      signOut: () => dispatch({type: 'SIGN_OUT'}),
      signUp: async data =>
        dispatch({type: 'SIGN_IN', token: 'dummy-auth-token'}),
    }),
    [],
  );

  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {backgroundColor: '#fff'},
          }}>
          {state.userToken == null ? (
            <>
              <Stack.Screen name="Signup" component={Signup} />
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Createpw" component={Createpw} />
              <Stack.Screen name="Verification" component={Verification} />
              <Stack.Screen
                name="VerificationSuccess"
                component={VerificationSuccess}
              />
            </>
          ) : (
            <>
              <Stack.Screen name="Home" component={Home} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

export default Navigation;
