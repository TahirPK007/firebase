import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import database from '@react-native-firebase/database';

const App = () => {
  const [data, setdata] = useState('');
  const [todo, settodo] = useState([]);
  const [indexx, setindexx] = useState(null);
  console.log(indexx);
  useEffect(() => {
    getdata();
  }, []);
  const savedata = async () => {
    try {
      if (data.length > 0) {
        const index = todo.length;
        const response = await database().ref(`todo/${index}`).set({
          name: data,
        });
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getdata = async () => {
    try {
      const response = await database()
        .ref('todo')
        .on('value', tempdata => {
          settodo(tempdata.val());
          setdata('');
        });
    } catch (error) {
      console.log(error);
    }
    // try {
    //   const response = await database().ref('todo').once('value');
    //   settodo(response.val());
    //   console.log(response, 'firebase res');
    // } catch (error) {
    //   console.log(error);
    // }
  };

  const populatefieldstoupdate = (item, index) => {
    setdata(item.name);
    setindexx(index);
  };

  const updatetodo = async () => {
    try {
      if (data.length > 0) {
        const response = await database().ref(`todo/${indexx}`).update({
          name: data,
        });
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>todos</Text>
      <TextInput
        placeholder="enter todo"
        value={data}
        onChangeText={value => {
          setdata(value);
        }}
      />
      <Button title="save todo firebase" onPress={savedata} />
      <Button title="update todo firebase" onPress={updatetodo} />
      <View>
        <Text>Todo List</Text>
        <FlatList
          data={todo}
          renderItem={item => {
            const index = item.index;
            if (item.item !== null) {
              return (
                <TouchableOpacity
                  onPress={() => {
                    populatefieldstoupdate(item.item, index);
                  }}>
                  <View style={{backgroundColor: 'black', marginTop: 5}}>
                    <Text style={{color: 'white'}}>{item.item.name}</Text>
                  </View>
                </TouchableOpacity>
              );
            }
          }}
        />
      </View>
    </View>
  );
};

export default App;
