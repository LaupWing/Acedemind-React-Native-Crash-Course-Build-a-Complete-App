import { useState } from "react"
import { StyleSheet, Text, View, Button, TextInput } from "react-native"

export default function App() {
   const [goal, setGoal] = useState()
   const [goals, setGoals] = useState([])

   function goalInputHandler(enteredText) {
      setGoal(enteredText)
   }

   function addGoalHandler() {
      setGoals((current_goals)=>{
         return [...current_goals, goal]
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
            {goals.map((goal,i) => (
               <Text key={i}>{goal}</Text>
            ))}
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
   }
})
