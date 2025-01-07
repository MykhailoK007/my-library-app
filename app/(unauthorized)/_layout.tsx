import { Slot } from "expo-router"
import { SafeAreaView, StyleSheet, View } from "react-native"
import { Provider as PaperProvider } from "react-native-paper";


const UnAuthorizedLayout = () => {
  return (<PaperProvider>
    <SafeAreaView>
      <View style={{padding: 24}}>
        <Slot/>
      </View>
    </SafeAreaView>
  </PaperProvider>)
}

export default UnAuthorizedLayout