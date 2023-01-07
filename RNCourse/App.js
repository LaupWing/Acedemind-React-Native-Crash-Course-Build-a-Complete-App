import { StyleSheet, Text, View, Button, TextInput } from "react-native"

export default function App() {
   function goalInputHandler() {
      
   }

   function addGoalHandler() {

   }

   return (
      <View style={styles.appContainer}>
         <View style={styles.inputContainer}>
            <TextInput
               placeholder="Test"
               style={styles.textInput}
               onChangeText={goalInputHandler}
            />
            <Button title="Add Goal"/>
         </View>
         <View style={styles.goalsContainer}>
            <Text>List of goals</Text>
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
