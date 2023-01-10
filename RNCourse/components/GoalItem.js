import React from "react"
import { StyleSheet, Text, View, Pressable } from "react-native"

const GoalItem = ({goalData, onDelete}) => {
   return (
      <View style={styles.goalItem}>
         <Pressable 
            onPress={() => onDelete(goalData.item.id)}
            android_ripple={{color: "#210644"}}
            style={({pressed}) => pressed && styles.pressedItem}
         >
            <Text style={styles.goalText}>{goalData.item.text}</Text>
         </Pressable>
      </View>
   )
}

export default GoalItem

const styles = StyleSheet.create({
   goalItem: {
      margin: 8,
      borderRadius: 6,
      backgroundColor: "#5e0acc",
   },
   pressedItem: {
      opacity: 0.5
   },
   goalText:{
      padding: 8,
      color: "white"
   }
})