import React from "react"
import { Button, StyleSheet, TextInput, View } from "react-native"

const GoalInput = ({goalInputHandler}) => {
   const [goal, setGoal] = useState()
   function goalInputHandler(enteredText) {
      setGoal(enteredText)
   }
   return (
      <View style={styles.inputContainer}>
         <TextInput
            placeholder="Test"
            style={styles.textInput}
            onChangeText={goalInputHandler}
         />
         <Button 
            title="Add Goal"
            onPress={()=> {
               addGoalHandler(goal)
               setGoal("")
         }}
         />
      </View>
   )
}

export default GoalInput


const styles = StyleSheet.create({
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
})