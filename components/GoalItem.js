import { View,Text,StyleSheet, Pressable } from "react-native"

function GoalItem({itemData, onDeleteItem}) {

    function onDelete() {
        onDeleteItem(itemData.item.id)
    }
    return (
     <Pressable onPress={onDelete}  > 
       <View style={styles.goalItem}>
        <Text style={styles.goalText}> {itemData.item.text}</Text>
       </View>
     </Pressable>
    )
}

export default GoalItem;


const styles = StyleSheet.create({
    goalItem: {
        margin: 7,
        padding: 8,
        borderRadius: 6,
        backgroundColor: '#5e0acc'
      },
      goalText: {
        color: 'white'
      }
})