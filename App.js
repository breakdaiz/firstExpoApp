
import { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';

export default function App() {

  const  [enteredGoalText, setEnteredGoalText] = useState('');
  const  [courseGoals, setCourseGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }
  function addGoalHandler() {
      
    setCourseGoals(currentCourseGoals =>  [...currentCourseGoals, enteredGoalText]);
    
  }
  useEffect(()=> {
    console.log(courseGoals)
  },[courseGoals])

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputCountainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!'
        onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalHandler} title='Add goal'/>
      </View>
      <View style={styles.goalsContainer}>
      <ScrollView >
        {courseGoals.map((goal, index) => <View   key={index} style={styles.goalItem}>
          <Text style={styles.goalText}> {goal}</Text></View>)}
      </ScrollView>
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
  inputCountainer : {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 8,
    padding: 8,
  },
  goalsContainer: {
    flex: 5
  },
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc'
  },
  goalText: {
    color: 'white'
  }
});
