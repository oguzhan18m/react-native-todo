import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 30}}>
      <View style={{flexDirection:'row', alignItems:'center' , justifyContent:'space-between'}}>
        <TextInput placeholder='Course Goal' style={{width:'80%' ,borderColor:'black' , borderWidth:1 , padding:10 , borderRadius:5}} />
        <Button title='ADD' />
      </View>
      <View></View>

    </View>
  );
}

const styles = StyleSheet.create({

});
