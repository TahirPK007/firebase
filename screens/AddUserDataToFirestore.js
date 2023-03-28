import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const AddUserDataToFirestore = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [name, setname] = useState('');

  const signup = async () => {
    try {
      if (email.length > 0 && password.length > 0 && name.length > 0) {
        const usercreate = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        const userdata = {
          id: usercreate.user.uid,
          email: email,
          name: name,
        };

        await firestore().collection('users').doc(usercreate.user.uid).set(userdata);
        alert('data added');
      } else {
        alert('Enter Details');
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Adding user data to firebase</Text>
      <TextInput
        style={{
          width: '80%',
          borderWidth: 2,
          borderRadius: 30,
          paddingLeft: 20,
        }}
        placeholder="enter name"
        value={name}
        onChangeText={value => {
          setname(value);
        }}
      />
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
        placeholder="enter name"
        value={password}
        onChangeText={value => {
          setpassword(value);
        }}
        secureTextEntry={true}
      />
      <Button title="Signup" onPress={signup} />
    </View>
  );
};

export default AddUserDataToFirestore;
