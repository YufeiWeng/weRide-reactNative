// import * as Keychain from 'react-native-keychain';

export const getJWTToken = async () => {
  try {
    // return await Keychain.getGenericPassword();
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const setJWTToken = async token => {
  const key = 'account jwt';
  // await Keychain.setGenericPassword(key, token);
};

export const deleteJWToken = async token => {
  // await Keychain.resetGenericPassword();
};
