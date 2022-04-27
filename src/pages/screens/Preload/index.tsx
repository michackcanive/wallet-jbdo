import React, { useContext, useEffect } from 'react';
import { Text, Image } from 'react-native';
import { Container, LoadingIcon, Footer, FromType, Bycreate } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import Api from '../../../api/Api';
import { useUserContexs } from '../../../contexts/UserContexts';
import Logo from '../../../components/Logo';


export const Preload: React.FC = () => {
    const navigation = useNavigation();
    const dados = useUserContexs();

    useEffect(() => {
        const checkToken = async () => {
            const token = await AsyncStorage.getItem('tokenValidation')

            if (token !== null) {
                let dado = await Api.checkToken(token);

                if (!(dado.status === 'Thoken expirado')) {

                    const telefone = await AsyncStorage.getItem('telefone')
                    const password = await AsyncStorage.getItem('password')

                    let dado = await Api.signIn(telefone, password);
                    if (telefone !== null) {
                        if (!dado.erro) {
                            await AsyncStorage.setItem('tokenValidation', dado.token)
                            navigation.reset({
                                routes: [{name: 'Maintab' }]
                            });
                        }
                    } 
                    else {
                        navigation.navigate('StartScreen');
                    }

                } else {
                    navigation.navigate('SignIn');
                }
            } else {
                // nao tem token login
                navigation.navigate('SignIn');
            }
        }
        checkToken();
    }, [])
    return (
        <>
                <Container>
                    <Logo />
                    <LoadingIcon size="large" color="#525f7f" />
                </Container>
                <Footer >
                    <FromType style={{ marginBottom: 23 }}>
                        <Text>FROM:<Text > AJEC</Text></Text>
                    </FromType>

                </Footer>

            
        </>
    )

} 