import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button} from 'react-native';

const GoalInput = props => {

    const [enteredGoal, setEnteredGoal] = useState('');
    const goalInputHandler = (enteredText) => {
        setEnteredGoal (enteredText);
      };
    return (
    <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          //dont add () on goalInputHandler so it doesnt execute immediately
          onChangeText = {goalInputHandler}
          value ={enteredGoal}
        />
        <Button title="add" onPress ={props.onAddGoal} />
      </View>
      );
};

const styles = StyleSheet.create({

    inputcontainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      input: {
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%",
      }
});
export default GoalInput;