import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal , setEnteredGoal] = useState('');
  const [courseGoals, setGoalsCourse ] =useState([]);

  const goalInputHandler =(enteredText)=>{
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () =>{
    setGoalsCourse(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler} />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
      <View>
        {courseGoals.map(course => 
        <View style={styles.listItem}> 
          <Text key={course}> {course} </Text> 
        </View>)}
      </View>

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
    },
    listItem:{
      padding:10,
      marginVertical:10,
      backgroundColor:'lightslategrey',
      borderColor:'black',
      borderWidth:1,
      borderRadius:5,
      color: 'white',
      fontWeight:'600',
    }
});
