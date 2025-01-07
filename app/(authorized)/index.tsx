import { View } from "react-native";
import { Button, Text } from "react-native-paper";
import * as SecureStore from 'expo-secure-store';

const Dashboard = () => {
  return <View>
    <Text>Your library</Text>
    <Button onPress={() => {
      SecureStore.setItem('token', '')
    }}>Log out</Button>
  </View>
}

export default Dashboard;