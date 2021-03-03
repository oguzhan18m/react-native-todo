import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal' style={styles.input} />
        <Button title='ADD' />
      </View>
      <View></View>

    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
      padding: 30,
    },
    inputContainer:{
      flexDirection:'row', alignItems:'center' , justifyContent:'space-between',
    },
    input:{
      width:'80%' ,borderColor:'black' , borderWidth:1 , padding:10 , borderRadius:5
    }
});
