import React, { useState } from 'react'
import { TouchableOpacity, StyleSheet, View } from 'react-native'
import { Text } from 'react-native-paper'
import Background from '../../../components/Background'
import Logo from '../../../components/Logo'
import Header from '../../../components/Header'
import Button from '../../../components/Button'
import TextInput from '../../../components/TextInput'
import { theme } from '../../../core/theme'
import { emailValidator } from '../../../helpers/emailValidator' 
import { passwordValidator } from '../../../helpers/passwordValidator'
import AsyncStorage from '@react-native-async-storage/async-storage'
import {useAuth} from "../../../contexts/auth";
import BackButton from '../../../components/BackButton'

export  function SignIn({ navigation }) {

  const [telefone, setTelefone] = useState({ value: '', error: '' })
  const [password, setPassword] = useState({ value: '', error: '' })
 const { user,signed,loadingButton,authSignIn } = useAuth(); 
 const [isloadin,setIsloadin]= useState(false)
 

  const  onLoginPressed = async () => {
    setIsloadin(true)
    const telefoneError = emailValidator(telefone.value)
    const passwordError = passwordValidator(password.value)

    if (telefoneError || passwordError) {
      setTelefone({ ...telefone, error: telefoneError })
      setPassword({ ...password, error: passwordError })
      return
    }

    await AsyncStorage.setItem("telefone", telefone.value);
    await AsyncStorage.setItem("password", password.value);
    
    authSignIn();
    setIsloadin(!loadingButton)
    
  }

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <Logo />
      <Header>LOGIN</Header>
      <TextInput
      icon={"call-outline"}
      description={''}
        label="Telefone"
        returnKeyType="next"
        value={telefone.value}
        onChangeText={(text:string) => setTelefone({ value: text, error: '' })}
        error={!!telefone.error}
        errorText={telefone.error}
        autoCapitalize="none"
        autoCompleteType="number"
        keyboardType="phone-pad"

  mnnggdddddsssdjdjjhjddf   hfhhhfffhhjesddhfddfhhhfjjgkddddddwssddssdddsdddddd
        
      />
      <TextInput
      icon={"key-outline"}
      description={''}
        label="Senha da conta"
        returnKeyType="done"
        value={password.value}
        onChangeText={(text:string) => setPassword({ value: text, error: '' })}
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
        
      />

      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Esqueceu a sua Senha?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed} 
    
    >
        {isloadin?'Processando...':'Entrar'}
      </Button>
      <View style={styles.row}>
        <Text>Ainda não tem conta ? </Text>
        <TouchableOpacity onPress={() => navigation.replace('SignUp')}>
          <Text style={styles.link}>Resgritar-se</Text>
        </TouchableOpacity>
      </View>
    </Background>
  )
}

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24,
  },
  row: {
    flexDirection: 'row',
    marginTop: 4,
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary,
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary,
  },
})
