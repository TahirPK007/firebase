import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import auth from '@react-native-firebase/auth';
import {StackActions} from '@react-navigation/native';

const Home = ({route, navigation}) => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>Home</Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        User Email= {auth().currentUser.email}
      </Text>
      <Text style={{fontSize: 20, fontWeight: 'bold'}}>
        User Uid= {auth().currentUser.uid}
      </Text>
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          borderRadius: 20,
          marginTop: 10,
          height: 50,
          width: 200,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={async() => {
          await auth().signOut();
          navigation.dispatch(StackActions.popToTop());
          // navigation.navigate("Login")
        }}>
        <Text style={{color: 'white'}}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
