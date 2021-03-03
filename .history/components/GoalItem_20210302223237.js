import React from 'react';
import { Text, View} from 'react-native';

const GoalItem = (props) => {
    return (
        <View style={styles.listItem}> 
        <Text > {props.title} </Text> 
      </View>
    )
}

export default GoalItem;
