import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';

 const GoalItem = (props) => {

    return (
        <TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.od)}>
            <View style={styles.listItem}> 
                <Text> {props.title} </Text> 
            </View>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    listItem:{
        padding:10,
        marginVertical:10,
        backgroundColor:'lightslategrey',
        borderColor:'black',
        borderWidth:1,
        borderRadius:5,
        color: 'white',
        fontWeight:'900'
      }
});

export default GoalItem;