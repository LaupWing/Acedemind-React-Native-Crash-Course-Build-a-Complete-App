import React from "react"
import { Button, Image, Modal, StyleSheet, TextInput, View } from "react-native"

const GoalInput = ({goalInputHandler, showModal, addGoalHandler, setShowModal}) => {
   const [goal, setGoal] = useState()
   function goalInputHandler(enteredText) {
      setGoal(enteredText)
   }
   return (
      <Modal animationType="slide" visible={showModal}>
         <View style={styles.inputContainer}>
            <Image 
               source={require("../assets/adaptive-icon.png")}
               style={styles.image}
            />
            <TextInput
               placeholder="Test"
               style={styles.textInput}
               onChangeText={goalInputHandler}
               value={goal}
            />
            <View style={styles.buttonContainer}>
               <View style={styles.button}>
                  <Button 
                     title="Add Goal"
                     onPress={()=> {
                        addGoalHandler(goal)
                        setGoal("")
                        setShowModal(false)
                     }}
                     color="#5e0acc"
                     />
               </View>
               <View style={styles.button}>
                  <Button 
                     color="#f31282"
                     title="Cancel"
                     onPress={()=> {
                        setShowModal(false)
                     }}
                  />
               </View>
            </View>
         </View>
      </Modal>
   )
}

export default GoalInput


const styles = StyleSheet.create({
   inputContainer: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginBottom: 24,
      borderBottomWidth: 1,
      padding: 16,
      borderBottomColor: "#cccccc",
      backgroundColor: "orange"
   },
   image:{
      width: 100,
      height: 100,
      margin: 20
   },
   textInput:{
      borderWidth: 1,
      borderColor: "#e4d0ff",
      backgroundColor: "e4d0ff",
      color: "#120438",
      borderRadius: 6,
      width: "100%",
      padding: 8
   },
   buttonContainer:{
      flexDirection: "row",
      marginTop: 16
   },
   button:{
      width: 100,
      marginHorizontal: 8
   }
})