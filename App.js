
import { useEffect, useState } from 'react';
import {  StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const  [courseGoals, setCourseGoals] = useState([]);

  useEffect(()=> {
    console.log(courseGoals)
  },[courseGoals])


  function addGoalHandler(enteredGoalText) {
    setCourseGoals(currentCourseGoals =>  [...currentCourseGoals,
      {text: enteredGoalText, id: Math.random().toString() } ]);
  }
 
  return (
    <View style={styles.appContainer}>
      <GoalInput  addGoalHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
          <FlatList data={courseGoals}
            renderItem={itemData => {
              return ( <GoalItem itemData={itemData} />)
           }} 
          keyExtractor={(item, index)=> {
            return item.id
          }} 
          alwaysBounceHorizontal={false} />  
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  appContainer: {
   flex: 1,
   paddingTop: 50,
   paddingHorizontal: 16
  },
  
  goalsContainer: {
    flex: 5
  },
});
