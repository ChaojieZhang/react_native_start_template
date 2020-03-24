import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Screen({navigation}) {
  return (
    <View style={style.view}>
      <Text>UserCenter Screen</Text>
      <Button title="back" onPress={() => navigation.navigate('Home')} />
      <Button title="Logout" onPress={() => navigation.navigate('Login')} />
    </View>
  );
}

let style = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen;
