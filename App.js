import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button, ScrollView, FlatList } from "react-native";
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';

export default function App() {
  
  const [courseGoals, setCourseGoals]=useState([]);

  //use spread operators using ([]) using  => is better on react native
  const addGoalHandler = goalTitle => {
    setCourseGoals(currentGoals => [...currentGoals,{id: Math.random().toString(), value: goalTitle}]);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }
  return (
    <View stlye={styles.screen}>
      <GoalInput onAddGoal ={addGoalHandler}/>
      <View> 
        <FlatList
        keyExtractor={(item, index) => item.id} 
        data={courseGoals} 
        renderItem = { itemData => (
          <GoalItem 
          id={itemData.item.id} 
          onDelete={removeGoalHandler} 
          title= {itemData.item.value}/>
        )}
        />
      </View>
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
