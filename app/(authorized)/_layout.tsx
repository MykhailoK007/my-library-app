import { Slot ,Redirect} from "expo-router"
import { useEffect, useState } from "react";
import { SafeAreaView, View } from "react-native";
import { Provider as PaperProvider, Text } from "react-native-paper";
import * as SecureStore from 'expo-secure-store';

const AuthorizedLayout = () => {
  const [authorized, setAuthorized] = useState(false);
  const [loaded, setLoaded] = useState(false);
  useEffect( () => {
    (async () => {
      const token = await SecureStore.getItemAsync('token');
      setAuthorized(!!token);
      setLoaded(true)
    })()

  }, []);
  if(!loaded) return <Text>Loading...</Text>
  if(!authorized) return <Redirect href='/signin'/>
  return (
    <PaperProvider>
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Slot/>
        <Text>Bottom menu</Text>
      </View>
    </SafeAreaView>
  </PaperProvider>

  )
}
export default AuthorizedLayout