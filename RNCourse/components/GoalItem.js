import React from "react"
import { StyleSheet, Text, View, Pressable } from "react-native"

const GoalItem = ({goalData, onDelete}) => {
   return (
      <Pressable onPress={onDelete}>
         <View style={styles.goalItem}>
            <Text style={styles.goalText}>{goalData.item.text}</Text>
         </View>
      </Pressable>
   )
}

export default GoalItem

const styles = StyleSheet.create({
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