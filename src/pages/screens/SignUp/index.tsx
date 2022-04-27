import React, { useState } from "react";
import { useNavigation } from '@react-navigation/native'
import { Image, Text, ScrollView } from "react-native";
import { Container, Logo, SingMessagemButtom } from "./styles";
import { InputArea, SingMessagemButtomTextBold, SingMessagemButtomText } from "./styles";
import Input from "../../../components/Input/Input";
import Button from "../../../components/Button/Button";
import { TemaSign, TextLogin } from "../../../components/Input/styles";
import button_login from '../../../assets/img/button_login.png';
import jabakule from '../../../assets/img/logo_login.png';
import AsyncStorage from "@react-native-async-storage/async-storage";
import Api from "../../../api/Api";
import { Picker } from '@react-native-picker/picker';



export const SignUp: React.FC = () => {
    const naviagation = useNavigation();

    const [telefone, setTelefone] = useState('')
    const [namefull, setnamefull] = useState('')
    const [emailuser, setEmail] = useState('')
    const [tipdeConta, setSelectedTypeconta] = useState(['comercial','cliente'])
    const [selectedQual, setSelectedQual] = useState([])

    const handlerSignInSubmit = async () => {

        if (telefone !== '' && namefull !== '' && emailuser !== '' && selectedQual !== '') {

            let dado = await Api.SignUn(namefull, telefone, emailuser, tipdeConta);

            if (dado.erro === false) {
                await AsyncStorage.setItem('tokenValidation', dado.token)

                /*useDispatch({
                    type:'setAvatar',
                    payload:{
                        avatar: 'avatar'
                    }
                })*/

                naviagation.reset({
                    routes: [{ name: 'Maintab' }]
                });
            } else {
                alert('Dados Incorretos')
            }
        } else {
            alert('Preecha coretamente os formularios')
        }
    }
    const handlerMessageRegistrer = () => {
        naviagation.reset({
            routes: [{ name: 'SignIn' }]
        });
    }

    return (
        
        <ScrollView style={{ backgroundColor: '#f8f9fe' }}>
            
            <Container>

                <Logo>
                    <Image source={jabakule} />
                    <TemaSign>
                        <TextLogin>REGISTRAR</TextLogin>
                    </TemaSign>
                </Logo>
                <InputArea>

                    <Input
                        name="user"
                        placeholder="Nome completo"
                        typeInput='default'
                        typeInputTeclado='default'
                        value={namefull}
                        onChangeText={setnamefull}
                    />
                    <Input
                        name="numero"
                        placeholder="Telefone (9XX XXX XXX)"
                        typeInput='telephoneNumber'
                        typeInputTeclado='phone-pad'
                        value={telefone}
                        onChangeText={setTelefone}
                    />
                   <Input
                        name="typeconta"
                        placeholder="Tipo de conta"
                        typeInput='telephoneNumber'
                        typeInputTeclado='default'
                        value={telefone}
                        onChangeText={setTelefone}
                    />
                    
                    <Button onPress={handlerSignInSubmit} title="Entrar">

                        <Image style={{ width: 20, height: 20 }} source={button_login} />

                        <Text>  Inscrever</Text>
                    </Button>
                </InputArea>

                <SingMessagemButtom onPress={handlerMessageRegistrer}>

                    <SingMessagemButtomText>Já tem uma conta?</SingMessagemButtomText>
                    <SingMessagemButtomTextBold>Entrar</SingMessagemButtomTextBold>
                </SingMessagemButtom>

            </Container>


        </ScrollView>

    )
}
