import { View } from "react-native"
import AuthForm, {TField} from "../../components/AuthForm";
import { Link, router } from "expo-router";
import { Text } from "react-native-paper";
import * as SecureStore from 'expo-secure-store';

const fields: TField[] = [
  {
    label: 'Email',
  },
  {
    label: 'Password',
    secureTextEntry: true
  },
  {
    label: 'Confirmation',
    secureTextEntry: true
  }
]
const SignUp = () => {
  const handleSubmit = () => {
    SecureStore.setItem('token', 'value')
    router.push('/')
  }
  return (<View>
    <AuthForm fields={fields} title="Sign Up" handleSubmit={handleSubmit}/>
    <Link href='/signin' style={{marginTop: 16}}>
      <Text style={{color:'#5495ff' }}>Already have an account?</Text>
    </Link>
  </View>)
}

export default SignUp;