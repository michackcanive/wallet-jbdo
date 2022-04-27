import React from 'react'
import Background from '../../components/Background'
import Logo from '../../components/Logo'
import Header from '../../components/Header'
import Button from '../../components/Button'
import Paragraph from '../../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>Login</Header>
      <Paragraph>
        Markting e negocios em Angola 😍
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('SignIn')}
      >
        Entrar
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('SignUp')}
      >
        Registrar-se
      </Button>
    </Background>
  )
}
