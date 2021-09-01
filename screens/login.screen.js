<<<<<<< HEAD
import React, {useContext} from 'react';
import {Text, TouchableOpacity} from 'react-native';
=======
import React, { useContext, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
>>>>>>> 3ae148fa6dff9b6b091932581aa9fa8b46114b73
import {
  AuthBackground,
  AuthButton,
  AuthCover,
  AuthInput,
} from '../components/Auth/auth.styles';
<<<<<<< HEAD
import {AuthContext} from '../context/Auth/auth.context';
import {Title, DefaultText, SpacerBottom} from '../constants';
=======
import { AuthContext } from '../context/Auth/auth.context';
import { TextInput } from 'react-native-paper';
import { Title, DefaultText, SpacerBottom } from '../constants';
import axios from 'axios';
>>>>>>> 3ae148fa6dff9b6b091932581aa9fa8b46114b73

export const LoginScreen = ({ navigation }) => {
  const { isAuth, onLogin } = useContext(AuthContext);

  return (
    <AuthBackground>
      <AuthCover>
        <Title> Login </Title>
        <SpacerBottom />
        <AuthInput label="User Name" />
        <AuthInput label="Password" secureTextEntry />
        <SpacerBottom />
        <AuthButton onPress={() => onLogin()}> Login</AuthButton>
        <SpacerBottom />
        <DefaultText>
          No tiene cuenta ?{' '}
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text> Registrarse </Text>
          </TouchableOpacity>{' '}
        </DefaultText>
      </AuthCover>
    </AuthBackground>
  );
};
