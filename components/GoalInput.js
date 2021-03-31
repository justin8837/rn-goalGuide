import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Button, Modal} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    const goalInputHandler = (enteredText) => {
        setEnteredGoal (enteredText);
      };

    const addGoalHandler = () => {
      props.onAddGoal(enteredText);
      setEnteredGoal('');
    }
    return (
      <Modal visible={props.visible} animatioType="slide">
        <View style={styles.inputcontainer}>
          <TextInput 
          placeholder="Course Goal"
          style={styles.input}
          //dont add () on goalInputHandler so it doesnt execute immediately
          onChangeText = {goalInputHandler}
          value ={enteredGoal}
          />
          <View style = {styles.buttonContainer}>
          <Button title="add" onPress={addGoalHandler} />
          <Button title='CANCEL' color ="red" onPress={props.onCancel}/>
        </View>
        </View>
      </Modal>
      );
  };

const styles = StyleSheet.create({
       inputcontainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      },
      input: {
        marginBottom: 10,
        borderColor: "black",
        borderWidth: 1,
        padding: 10,
        width: "80%",
      },
      buttonContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'60%'
      }
  
});
export default GoalInput;