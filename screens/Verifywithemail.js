import {View, Text, TextInput, Button, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import auth from '@react-native-firebase/auth';

const Verifywithemail = () => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');

  const signup = async () => {
    try {
      if (email.length > 0 && password.length > 0) {
        const usercreate = await auth().createUserWithEmailAndPassword(
          email,
          password,
        );
        await auth().currentUser.sendEmailVerification();
        await auth().signOut();
        alert('pls verify ur email');
      } else {
        alert('Enter Details');
      }
    } catch (error) {
      alert(error);
    }
  };

  //login functionality
  const [email2, setemail2] = useState('');
  const [password2, setpassword2] = useState('');

  const login = async () => {
    try {
      if (email2.length > 0 && password2.length > 0) {
        const userlogin = await auth().signInWithEmailAndPassword(
          email2,
          password2,
        );
        console.log(userlogin);
        if (userlogin.user.emailVerified) {
          alert('ur verified');
        } else {
          alert('psl verify ur email');
          //sending verification link again
          await auth().currentUser.sendEmailVerification();
          //logging out if not verified
          await auth().signOut();
        }
      } else {
        alert('Enter Details');
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <View style={{flex: 1}}>
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
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 20, fontWeight: 'bold'}}>Login</Text>
        <TextInput
          style={{
            width: '80%',
            borderWidth: 2,
            borderRadius: 30,
            paddingLeft: 20,
          }}
          placeholder="enter email"
          value={email2}
          onChangeText={value => {
            setemail2(value);
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
          value={password2}
          onChangeText={value => {
            setpassword2(value);
          }}
          secureTextEntry={true}
        />
        <Button title="Signin" onPress={login} />
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
          onPress={() => {
            navigation.navigate('Signup');
          }}>
          <Text style={{color: 'white'}}>Don't Have Account? Click Here</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Verifywithemail;
