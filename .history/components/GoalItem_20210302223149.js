import React from 'react';

const GoalItem = (props) => {
    return (
        <View style={styles.listItem}> 
        <Text > {props.title} </Text> 
      </View>
    )
}

export default GoalItem;
