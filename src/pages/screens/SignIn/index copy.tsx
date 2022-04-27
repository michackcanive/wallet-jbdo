import React, { useState, useContext } from "react";
import UserContexts from "../../../contexts/UserContexts";
import { useNavigation } from '@react-navigation/native'
import { Image, Text, ScrollView, Alert } from "react-native";
import { Container, Logo, SingMessagemButtom } from "./styles";
import { InputArea, SingMessagemButtomTextBold, SingMessagemButtomText } from "./styles";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { TemaSign, TextLogin } from "../../../components/Input/styles";
import button_login from '../../../assets/img/button_login.png';
import avatar_2x from '../../../assets/img/avatar_2x.png';
import { Footer, FromType } from "../Preload/styles";
import Api from "../../../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Icon from 'react-native-vector-icons/Ionicons'



export const SignIn: React.FC = () => {
    const naviagation = useNavigation();

    const [telefone, setTelefone] = useState('')
    const [password, setpassword] = useState('')

    const handlerSignInSubmit = async () => {

        if (telefone !== '' && password !== '') {

            let dado = await Api.signIn(telefone, password);

            console.log(dado)
            if (dado!==null){
                if (dado.erro===false) {
                    await AsyncStorage.setItem('tokenValidation', dado.token)
                    await AsyncStorage.setItem('telefone', telefone)
                    await AsyncStorage.setItem('password', password)
                    
                    naviagation.reset({
                        routes: [{ name: 'Maintab' }]
                    });
                    return;
                } else {
                    alert('Ups dados invalidos')
                }
            }else{
                alert('Ups verifica sua conexão')
                return;
            }
               
            return;
        } else {
            alert('Preecha coretamente os formularios')
        }
    }

    const handlerMessageRegistrer = () => {
        naviagation.reset({
            routes: [{ name: 'SignUp' }]
        });
    }

    return (
        <ScrollView style={{ backgroundColor: '#f8f9fe' }}>
            <Container>

                <Logo>
                    <Image source={avatar_2x} style={{ width: 80, height: 80 }} />
                    <TemaSign>
                        <TextLogin>LOGIN</TextLogin>
                    </TemaSign>
                </Logo>
                <InputArea>

                    <Input
                        name={"numero"}
                        placeholder="Telefone (9XX XXX XXX)"
                        typeInput='telephoneNumber'
                        typeInputTeclado='phone-pad'
                        value={telefone}
                        onChangeText={setTelefone}
                    />
                    <Input
                        typeInputTeclado='twitter'
                        name="senha"
                        placeholder="Seu código da conta"
                        value={password}
                        onChangeText={setpassword}
                    />

                    <Button onPress={handlerSignInSubmit} title="Entrar">

                        <Icon size={24} name="wallet-outline" color="#fff" />

                        <Text>  Entrar</Text>
                    </Button>
                </InputArea>

                <SingMessagemButtom onPress={handlerMessageRegistrer}>

                    <SingMessagemButtomText>Não tem uma conta?</SingMessagemButtomText>
                    <SingMessagemButtomTextBold>Inscrever-se</SingMessagemButtomTextBold>
                </SingMessagemButtom>

            </Container>

            <Footer style={{ backgroundColor: "#f8f9fe", flex: 1, position: "relative", marginBottom: 10 }} >
                <FromType>
                    <Text style={{ color: "#003357" }}>JABAKULÉ </Text>
                </FromType>
            </Footer>
        </ScrollView>

    )
}
