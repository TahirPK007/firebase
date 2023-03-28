import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const Signup = ({navigation}) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const signup = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        const usercreate = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        console.log(usercreate);
        navigation.navigate('Login');
      } else {
        alert('Enter Details');
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Signup</Text>
      <TextInput
        style={{
          width: '80%',
          borderWidth: 2,
          borderRadius: 30,
          paddingLeft: 20,
        }}
        placeholder="enter email"
        value={email}
        onChangeText={value => {
          setemail(value);
        }}
      />
      <TextInput
        style={{
          width: '80%',
          borderWidth: 2,
          borderRadius: 30,
          paddingLeft: 20,
          marginTop: 5,
        }}
        placeholder="enter pass"
        value={password}
        onChangeText={value => {
          setpassword(value);
        }}
        secureTextEntry={true}
      />
      <Button title="Signup" onPress={signup} />
      <TouchableOpacity
        style={{
          backgroundColor: 'black',
          borderRadius: 20,
          marginTop: 10,
          height: 50,
          width: 300,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {
          navigation.navigate('Login');
        }}>
        <Text style={{color: 'white'}}>
          Already Have An Account? Click Here
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signup;
