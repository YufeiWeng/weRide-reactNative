import React from 'react';
import {Pressable, SafeAreaView, Text} from 'react-native';
import CustomButton from '../../components/CustomButton';
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
      <Pressable onPress={onLogoutPressed}>
        <Text style={{fontSize: 20}}>Logout</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default Home;
