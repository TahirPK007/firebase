import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(async () => {
      const unsubscribe = await auth().onAuthStateChanged(user => {
        const isUserlogin = user !== null ? 'Home' : 'Login';
        // navigation.navigate(isUserlogin);
        navigation.dispatch(StackActions.replace(isUserlogin));

        console.log(user);
      });
      unsubscribe();
    }, 2000);
  }, []);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Splash</Text>
    </View>
  );
};

export default Splash;
