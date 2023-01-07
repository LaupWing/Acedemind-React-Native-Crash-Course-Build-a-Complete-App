import { StyleSheet, Text, View, Button } from "react-native"

export default function App() {
   return (
      <View style={styles.container}>
         <Text
            style={{
               margin: 10,
               borderWidth: 1,
               borderColor: "red"
            }}
         >Test</Text>
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
})
