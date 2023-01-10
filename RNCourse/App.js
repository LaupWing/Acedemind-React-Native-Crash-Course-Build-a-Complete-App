import { useState } from "react"
import { StyleSheet, View, FlatList, Button } from "react-native"
import GoalInput from "./components/GoalInput"
import GoalItem from "./components/GoalItem"

export default function App() {
   const [goals, setGoals] = useState([])
   const [showModal, setShowModal] = useState(false)

   function addGoalHandler(goal) {
      setGoals((current_goals)=>{
         return [...current_goals, {
            text:goal,
            id: Math.random().toString()
         }]
      })
   }

   function deleteGoalHandler(id) {
      setGoals((current_goals) => {
         return [...current_goals].filter(x => x.id !== id)
      })
   }

   return (
      <View style={styles.appContainer}>
         <Button
            title="Add New Color"
            color="#5e0acc"
            onPress={() => setShowModal(true)}
         />
         <GoalInput
            addGoalHandler={addGoalHandler}
            showModal={showModal}
            goalInputHandler={goalInputHandler}
            setShowModal={setShowModal}
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
