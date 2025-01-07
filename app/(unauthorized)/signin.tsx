import React from "react";
import { View } from "react-native"
import { Text } from "react-native-paper";
import { Link, router } from "expo-router";
import AuthForm, {TField} from "../../components/AuthForm";
import * as SecureStore from 'expo-secure-store';

const fields: TField[] = [
  {
    label: 'Email'
  },
  {
    label: 'Password',
    secureTextEntry: true
  }
];

const SignIn = () => {
  const handleSubmit = () => {
    SecureStore.setItem('token', 'value')
    router.push('/')
  }
  return (<View>
    <AuthForm fields={fields} title="Sign in" handleSubmit={handleSubmit}/>
    <Link href='/signup' style={{marginTop: 16}}>
      <Text style={{color:'#5495ff'}}>Don't have an account?</Text>
    </Link>
  </View>)
}

export default SignIn;