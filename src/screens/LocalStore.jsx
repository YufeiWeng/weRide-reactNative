import React, {createContext, useReducer, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const initialState = {
  user: null,
  isLoading: true,
};

export const AuthContext = createContext({
  state: initialState,
  signIn: () => {},
  signOut: () => {},
});

const reducer = (state, action) => {
  switch (action.type) {
    case 'RESTORE_TOKEN':
      return {
        ...state,
        user: action.user,
        isLoading: false,
      };
    case 'SIGN_IN':
      return {
        ...state,
        user: action.user,
      };
    case 'SIGN_OUT':
      return {
        ...state,
        user: null,
      };
    default:
      return state;
  }
};

export const AuthProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const bootstrapAsync = async () => {
      let user;

      try {
        user = await AsyncStorage.getItem('user');
      } catch (e) {
        console.log(e);
      }

      dispatch({type: 'RESTORE_TOKEN', user});
    };

    bootstrapAsync();
  }, []);

  const signIn = async user => {
    try {
      await AsyncStorage.setItem('user', user);
    } catch (e) {
      console.log(e);
    }

    dispatch({type: 'SIGN_IN', user});
  };

  const signOut = async () => {
    try {
      await AsyncStorage.removeItem('user');
    } catch (e) {
      console.log(e);
    }

    dispatch({type: 'SIGN_OUT'});
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        signIn,
        signOut,
      }}>
      {children}
    </AuthContext.Provider>
  );
};
