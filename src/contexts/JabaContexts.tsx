import React, { createContext, useState, useEffect, useContext } from "react";
import Api, * as auth from "../api/Api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";


interface User {
    nome_nego: string;
    telefone: string;
    saldo_da_conta:number,
    id_nego:number

}

interface loginData {
    passsword: string;
    telefone: string;
}

interface JabaContextData {
    signed: boolean;
    user: User | null;
    loadingjaba: boolean;
    jabainf(): Promise<void>;
    loanding:boolean;
    yes_loandig(): void
    no_loandig(): void
}
type bt={
    is_loading:boolean
}
const JabaContext = createContext<JabaContextData>({} as JabaContextData);

const JabaProvider: React.FC = ({ children }) => {

    const [user, setUser] = useState<User | null>(null);
    const [loadingjaba, setLoading] = useState(true);
    const [loanding, setLoandingL] = useState(true);

  async function no_loandig(){
    setLoandingL(false)
  }
  async function yes_loandig(){
    setLoandingL(true)
  }
 

    async function jabainf() {

        const token = await AsyncStorage.getItem('token') ?? '';
        const dado = await Api.jabainfo(token);
     
        try {
            console.log(dado.dados.saldo_da_conta)
            if (dado.dados.saldo_da_conta!== null) {
               setUser(dado.dados);
               no_loandig()
            }

        } catch (e) {
            Alert.alert(
                'Verifica sua conexão'
            )
        }

    }

    return (
        <JabaContext.Provider value={{ signed: !!user,user,loadingjaba, jabainf,loanding, no_loandig,yes_loandig }}>
            {children}
        </JabaContext.Provider>
    );
};

function useJaba() {

    const context = useContext(JabaContext);
    if (!context) {
        throw new Error('usp erro no provider.');
    }
    return context;
}

export { JabaProvider, useJaba };