import {View, Text, Button, Image} from 'react-native';
import React, {useState} from 'react';
import DocumentPicker from 'react-native-document-picker';
import storage from '@react-native-firebase/storage';

const ImageUpload = () => {
  const [imagedata, setimagedata] = useState('');
  const [fullimagerefpath, setfullimagerefpath] = useState('');
  const [imgdwnloadurl, setimgdwnloadurl] = useState('');

  const pickimage = async () => {
    try {
      const response = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.images],
      });
      console.log(response);
      setimagedata(response);
    } catch (error) {}
  };

  const uploadtostorage = async () => {
    try {
      const response = storage().ref(`/profile/${imagedata.name}`);
      const put = await response.putFile(imagedata.uri);
      setfullimagerefpath(put.metadata.fullPath);
      const url = await response.getDownloadURL();
      setimgdwnloadurl(url);
    } catch (error) {}
  };

  const deleteimage = async () => {
    const response = await storage().ref(fullimagerefpath).delete();
    console.log(response);
    try {
    } catch (error) {}
  };
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>ImageUpload</Text>
      {imagedata ? (
        <Image
          style={{height: 100, width: 100}}
          source={{uri: imagedata.uri}}
        />
      ) : (
        <Text>No Image Yet</Text>
      )}
      <Button title="pick image" onPress={pickimage} />
      <Button title="Upload image" onPress={uploadtostorage} />
      <Button title="Delete image" onPress={deleteimage} />
    </View>
  );
};

export default ImageUpload;
