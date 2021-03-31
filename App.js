import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, FlatList } from "react-native";
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  const [courseGoals, setCourseGoals]=useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  //use spread operators using ([]) using  => is better on react native
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals,{id: Math.random().toString(), value: goalTitle}]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  }
  return (
    <View stlye={styles.screen}>
      <Button title ="ADD NEW GOAL" onPress={() => setIsAddMode(true)}/>
      <GoalInput visible={isAddMode} onAddGoal ={addGoalHandler} onCancel ={cancelGoalAdditionHandler}/>
        <FlatList
        keyExtractor={(item, index) => item.id} 
        data={courseGoals} 
        renderItem = { itemData => (
          <GoalItem u
          id={itemData.item.id} 
          onDelete={removeGoalHandler} 
          title= {itemData.item.value}/>
        )}
        />
    </View>
  );
}
// better to use stylesheet vs using {{}} js`
const styles = StyleSheet.create({
  screen: {
    padding: 50,
    margin: 10
  }
});
