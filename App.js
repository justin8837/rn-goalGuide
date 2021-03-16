import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView } from "react-native";

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals]=useState([]);

  const goalInputHandler = (enteredText) => {
    setEnteredGoal (enteredText);
  };

  //use spread operators using ([]) using  => is better on react native
  const addGoalHandler = () => {
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  };

  return (
    <View stlye={styles.screen}>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          //dont add () on goalInputHandler so it doesnt execute immediately
          onChangeText = {goalInputHandler}
          value ={enteredGoal}
        />
        <Button title="add" onPress ={addGoalHandler} />
      </View>
      <ScrollView> 
        {courseGoals.map(goal => (<View key ={goal} style={styles.listItem}><Text>{goal}</Text></View>))}
      </ScrollView>
    </View>
  );
}
// better to use stylesheet vs using {{}} js
const styles = StyleSheet.create({
  screen: {
    padding: 50,
    margin: 10
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
  },
  listItem:{
    padding: 10,
    marginVertical: 10,
    backgroundColor:'#ccc',
    borderColor:'black',
    borderWidth:1
  }
});
