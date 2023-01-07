import { StyleSheet, Text, View, Button } from "react-native"

export default function App() {
   return (
      <View style={styles.container}>
         <Text
            style={{
               margin: 16,
               borderWidth: 1,
               borderColor: "red",
               padding: 16
            }}
         >
            Hello World
         </Text>
         <Button
            title="TAP ME"
         />
      </View>
   )
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
   },
   dummyText: {
      margin: 16,
      borderWidth: 1,
      borderColor: "red",
      padding: 16
   }
})
