import { useState } from "react"
import { StyleSheet, Text, View, Button, TextInput, FlatList } from "react-native"

export default function App() {
   const [goal, setGoal] = useState()
   const [goals, setGoals] = useState([])

   function goalInputHandler(enteredText) {
      setGoal(enteredText)
   }

   function addGoalHandler() {
      setGoals((current_goals)=>{
         return [...current_goals, {
            text:goal,
            key: Math.random().toString()
         }]
      })
   }

   return (
      <View style={styles.appContainer}>
         <View style={styles.inputContainer}>
            <TextInput
               placeholder="Test"
               style={styles.textInput}
               onChangeText={goalInputHandler}
            />
            <Button 
               title="Add Goal"
               onPress={addGoalHandler}
            />
         </View>
         <View style={styles.goalsContainer}>
            <FlatList 
               data={goals} 
               renderItem={(goalData) => (
                  <View style={styles.goalItem}>
                     <Text style={styles.goalText}>{goalData.item.text}</Text>
                  </View>
               )} 
               alwaysBounceVertical={false}
            />
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   appContainer:{
      padding: 50,
      paddingHorizontal: 16,
      flex: 1
   },
   inputContainer: {
      flex: 1,
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 24,
      borderBottomWidth: 1,
      borderBottomColor: "#cccccc"
   },
   textInput:{
      borderWidth: 1,
      borderColor: "#cccccc",
      width: "70%",
      marginRight: 8,
      padding: 8
   },
   goalsContainer: {
      flex: 5
   },
   goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
      padding: 8,
   },
   goalText:{
      color: "white"
   }
})
