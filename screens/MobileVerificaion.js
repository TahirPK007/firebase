import {View, Text, TextInput, Button} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const MobileVerificaion = () => {
  const [number, setnumber] = useState('');
  const [otp, setotp] = useState('');
  const [confirmdata, setconfirmdata] = useState('');

  const sendopt = async () => {
    try {
      const response = await auth().signInWithPhoneNumber(number);
      setconfirmdata(response);
      console.log(response);
      Alert.alert('otp sent');
    } catch (error) {
      console.log(error);
    }
  };
  const verifyotp = async () => {
    try {
      const response = await confirmdata.confirm(otp);
      console.log(response);
      alert('verified');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>MobileVerificaion</Text>
      <TextInput
        style={{
          width: '80%',
          borderWidth: 2,
          borderRadius: 30,
          paddingLeft: 20,
        }}
        placeholder="enter phone number"
        value={number}
        onChangeText={value => {
          setnumber(value);
        }}
      />
      <Button title="Send Otp" onPress={sendopt} />
      <TextInput
        style={{
          width: '80%',
          borderWidth: 2,
          borderRadius: 30,
          paddingLeft: 20,
          marginTop: 5,
        }}
        placeholder="enter otp"
        value={otp}
        onChangeText={value => {
          setotp(value);
        }}
        secureTextEntry={true}
      />
      <Button title="Verify Otp" onPress={verifyotp} />
    </View>
  );
};

export default MobileVerificaion;
