import React from 'react';
import { Text, View, StyleSheet} from 'react-native';

 const GoalItem = (props) => {

    return (
            <View style={styles.listItem}> 
                <Text> {props.title} </Text> 
            </View>
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