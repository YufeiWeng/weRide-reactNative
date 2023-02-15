import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {deleteJWToken} from '../../utils/jwt';
import {AuthContext} from '../../navigation/navigation';

const Home = () => {
  const auth = React.useContext(AuthContext);

  const onLogoutPressed = async () => {
    await deleteJWToken();
    auth.signOut();
  };

  return (
    <SafeAreaView>
      <Text>Home</Text>
    </SafeAreaView>
  );
};

export default Home;
