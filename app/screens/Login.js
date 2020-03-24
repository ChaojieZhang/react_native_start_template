import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Screen({navigation}) {
  return (
    <View style={style.view}>
      <Text>Login Screen</Text>
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
      <Button
        title="Find password"
        onPress={() => navigation.navigate('FindPassword')}
      />
      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
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
