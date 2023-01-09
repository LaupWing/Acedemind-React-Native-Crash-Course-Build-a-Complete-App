import { useState } from "react"
import { StyleSheet, View, FlatList } from "react-native"
import GoalInput from "./components/GoalInput"
import GoalItem from "./components/GoalItem"

export default function App() {
   const [goals, setGoals] = useState([])


   function addGoalHandler(goal) {
      setGoals((current_goals)=>{
         return [...current_goals, {
            text:goal,
            id: Math.random().toString()
         }]
      })
   }

   function deleteGoalHandler() {
      console.log("DELETE")
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
                  <GoalItem 
                     goalData={goalData}
                     onDelete={deleteGoalHandler}
                  />
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
