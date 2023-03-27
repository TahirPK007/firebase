import {View, Text, TextInput, Button} from 'react-native';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';
import Home from './Home';

const Authentication = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [email2, setemail2] = useState('');
  const [password2, setpassword2] = useState('');

  const signup = async () => {
    try {
      const usercreate = await auth().createUserWithEmailAndPassword(
        email,
        password,
      );
      console.log(usercreate);
    } catch (error) {
      alert(error);
    }
  };

  const login = async () => {
    try {
      const userlogin = await auth().signInWithEmailAndPassword(
        email2,
        password2,
      );
      console.log(userlogin);
      return <Home />;
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View>
      <Text>Signup</Text>
      <TextInput
        placeholder="enter email"
        value={email}
        onChangeText={value => {
          setemail(value);
        }}
      />
      <TextInput
        placeholder="enter pass"
        value={password}
        onChangeText={value => {
          setpassword(value);
        }}
        secureTextEntry={true}
      />
      <Button title="Signup" onPress={signup} />
      <View style={{marginTop: 20}}>
        <Text>login</Text>
        <TextInput
          placeholder="enter email"
          value={email2}
          onChangeText={value => {
            setemail2(value);
          }}
        />
        <TextInput
          placeholder="enter pass"
          value={password2}
          onChangeText={value => {
            setpassword2(value);
          }}
          secureTextEntry={true}
        />
        <Button title="Signin" onPress={login} />
      </View>
    </View>
  );
};

export default Authentication;
