import { useState } from "react"
import { StyleSheet, View, Button, TextInput, FlatList } from "react-native"
import GoalInput from "./components/GoalInput"
import GoalItem from "./components/GoalItem"

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
            id: Math.random().toString()
         }]
      })
   }

   return (
      <View style={styles.appContainer}>
         <GoalInput
            addGoalHandler={addGoalHandler}
            goalInputHandler={goalInputHandler}
         />
         <View style={styles.goalsContainer}>
            <FlatList 
               data={goals} 
               renderItem={(goalData) => (
                  <GoalItem goalData={goalData}/>
               )} 
               keyExtractor={item => item.id}
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
   goalsContainer: {
      flex: 5
   }
})
