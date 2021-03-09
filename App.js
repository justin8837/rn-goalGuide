import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals]=useState({});
  const goalInputHandler = (enteredText) => {
    setEnteredGoal (enteredText);
  }
  //use spread operators using ([]) using  => is better on react native
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...courseGoals, enteredGoal]);
  }

  return (
    <View stlye={styles.screen}>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          //dont add () on goalInputHandler so it doesnt execute right away
          onChangeText = {goalInputHandler}
          value ={enteredGoal}
        />
        <Button title="add" onPress ={addGoalHandler} />
      </View>
      <View>
        
      </View>
    </View>
  );
}
// better to use stylesheet vs using {{}} js
const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
