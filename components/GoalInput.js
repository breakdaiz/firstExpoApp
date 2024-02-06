import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native"




function GoalInput({ addGoalHandler}) { 

    const  [enteredGoalText, setEnteredGoalText] = useState('');

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
      }

    function addGoalClick() {
        addGoalHandler(enteredGoalText);
    }

    
    return (
    <View style={styles.inputCountainer}>
        <TextInput style={styles.textInput} placeholder='Your course goal!'
        onChangeText={goalInputHandler}
        />
        <Button onPress={addGoalClick} title='Add goal'/>
    </View>
    )
}

export default GoalInput

const styles = StyleSheet.create({
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

})