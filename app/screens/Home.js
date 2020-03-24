import React from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

function Screen() {
  return (
    <View style={style.view}>
      <Text>Home Screen</Text>
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
