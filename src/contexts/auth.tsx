import React, { createContext, useState, useEffect, useContext } from "react";
import Api, * as auth from "../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";


interface User {
    name: string;
    telefone: string;
}

interface loginData {
    passsword: string;
    telefone: string;
}

interface AuthContextData {
    signed: boolean;
    user: User | null;
    loading: boolean;
    loadingButton: boolean;
    authSignIn(): Promise<void>;
    signOut(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

const AuthProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);
    const [loadingButton, setloadingButton] = useState(true);

    console.log(loadingButton)
    useEffect(() => {
        async function loadStorageData() {
            
            const storagedToken = await AsyncStorage.getItem('token');
            
            if (storagedToken !== null) {
                
                console.log(storagedToken)
                let dado = await Api.checkToken(storagedToken);

                if ((dado.status === 'Thoken expirado')) {
                    
                    const telefone = await AsyncStorage.getItem('telefone')
                    const password = await AsyncStorage.getItem('password')

                    console.log(telefone)
                    let dado = await Api.signIn(telefone, password);
                    console.log('ttttttttttttttttt')
                    console.log(dado)
                    if (dado !== null) {
                        if (!dado.erro) {
                            await AsyncStorage.setItem('token', dado.token)
                            setUser(dado.user);
                        }
                    } else {
                        await AsyncStorage.clear();
                        setUser(null);
                    }

                } else {
                    if (!dado.erro) {
                        const telefone = await AsyncStorage.getItem('telefone')
                        const password = await AsyncStorage.getItem('password')
                        let dado = await Api.signIn(telefone, password);
                        await AsyncStorage.setItem('token', dado.token)
                        setUser(dado.user);
                    }
                    else {
                        await AsyncStorage.clear();
                        setUser(null);
                    }
                }

            } else {
                console.log('token invalido')
            }

            setLoading(false);
        }
        
        loadStorageData();
    },[]);

    async function authSignIn() {
        
         const telefone = await AsyncStorage.getItem('telefone');
        const password = await AsyncStorage.getItem('password');
           
            const dado = await Api.signIn(telefone, password);
        try {

           

            if (dado.erro === 'Dados incoretos' || dado.erro === true) {
                console.log('dados incorretos')
                setloadingButton(false)
                return;
            }

            if (dado.user !== null) { 
                await AsyncStorage.setItem("telefone", telefone??'');
                await AsyncStorage.setItem("password", password??' ');
                console.log(dado.user)
                await AsyncStorage.setItem('token', dado.token);
              await AsyncStorage.setItem('user', JSON.stringify(dado.user) );
                setUser(dado.user);
                setloadingButton(true)
            }
        } catch (e) {
            if (dado.error === 'Dados incoretos' || dado.error === true) {
                console.log('dados incorretos')
              
               Alert.alert(
         'Dados incorretos'
      ) 
       setloadingButton(true)
                return;
            }
            Alert.alert(
                'Verifica sua conexão'
             )
            
            setloadingButton(false)
        }

    }
  
    async function signOut() {
        await AsyncStorage.clear();
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{ signed: !!user, loading, loadingButton, user, authSignIn, signOut }}>
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error('usp erro no provider.');
    }
    return context;
}

export { AuthProvider, useAuth };