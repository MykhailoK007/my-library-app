import { Slot ,Redirect, Tabs} from "expo-router"
import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";
import { Button, Icon, IconButton, Provider as PaperProvider, Text } from "react-native-paper";
import * as SecureStore from 'expo-secure-store';
import FontAwesome from '@expo/vector-icons/FontAwesome';

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
      <Tabs screenOptions={{ headerShown: false, tabBarStyle: {height: 60} }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Library',
            tabBarIcon: ({color}) => <FontAwesome size={28} name="book" color={color} />
          }}
        />
        <Tabs.Screen

          name="account"
          options={{
            title: 'Account',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            title: 'Settings',
            tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} />,
          }}
        />
    </Tabs>
  </PaperProvider>

  )
}
export default AuthorizedLayout