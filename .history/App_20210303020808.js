import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, ScrollView, FlatList, Modal } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [enteredGoal , setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals ] =useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const goalInputHandler =(enteredText)=>{
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () =>{
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString() ,value: enteredGoal }]);
  }

  const removeGoalHandler = (goalId) =>{
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal)=>goal.id !== goalId);
    })
  }

  return (
    <View style={styles.screen}>
        <Button title='ADD NEW GOAL' onPress={()=>setIsAddMode(true)} />
        <Modal visible={isAddMode}>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Course Goal' style={styles.input} onChangeText={goalInputHandler} />
        <Button title='ADD' onPress={addGoalHandler} />
      </View>
        </Modal>
      <FlatList keyExtractor={(item,index)=>item.id}
      data={courseGoals} 
      renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} title={itemData.item.value} /> } 
      />

    </View>
  );
}

const styles = StyleSheet.create({
    screen:{
      padding: 30,
    },
    inputContainer:{
      flex:'1', alignItems:'center' , justifyContent:'center',
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
      fontWeight:'900',
    }
});
